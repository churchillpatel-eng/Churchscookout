"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// Styled replacements for the browser's alert()/confirm() and a toast, matching
// the site design (terracotta accent, Playfair title). Exposed as promise-based
// helpers so call sites read like the natives:  if (await confirm({...})) …
type DialogOpts = {
  badge?: string;
  title: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
};
type ActiveDialog = (DialogOpts & { resolve: (ok: boolean) => void }) | null;
type ToastItem = { id: number; text: string; out?: boolean };

type DialogApi = {
  confirm: (opts: DialogOpts) => Promise<boolean>;
  alert: (opts: DialogOpts) => Promise<void>;
  toast: (text: string) => void;
};

const DialogContext = createContext<DialogApi | null>(null);

export function useDialogs(): DialogApi {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("useDialogs must be used within <DialogProvider>");
  return ctx;
}

export default function DialogProvider({ children }: { children: React.ReactNode }) {
  const [dialog, setDialog] = useState<ActiveDialog>(null);
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const confirmRef = useRef<HTMLButtonElement>(null);

  const confirm = useCallback(
    (opts: DialogOpts) =>
      new Promise<boolean>((resolve) => {
        setDialog({ confirmLabel: "Confirm", cancelLabel: "Cancel", ...opts, resolve });
      }),
    [],
  );

  const alert = useCallback(
    (opts: DialogOpts) =>
      new Promise<void>((resolve) => {
        setDialog({ confirmLabel: "Got it", ...opts, cancelLabel: undefined, resolve: () => resolve() });
      }),
    [],
  );

  const toast = useCallback((text: string) => {
    const id = Date.now() + Math.random();
    setToasts((list) => [...list, { id, text }]);
    setTimeout(() => setToasts((list) => list.map((t) => (t.id === id ? { ...t, out: true } : t))), 2200);
    setTimeout(() => setToasts((list) => list.filter((t) => t.id !== id)), 2500);
  }, []);

  const close = useCallback((ok: boolean) => {
    setDialog((d) => {
      d?.resolve(ok);
      return null;
    });
  }, []);

  useEffect(() => {
    if (!dialog) return;
    confirmRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [dialog, close]);

  return (
    <DialogContext.Provider value={{ confirm, alert, toast }}>
      {children}

      {dialog && (
        <div
          className="cc-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cc-dialog-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) close(false);
          }}
        >
          <div className="cc-dialog">
            {dialog.badge && (
              <div className="cc-dialog-badge" aria-hidden="true">
                {dialog.badge}
              </div>
            )}
            <h2 className="cc-dialog-title" id="cc-dialog-title">
              {dialog.title}
            </h2>
            {dialog.message && <p className="cc-dialog-msg">{dialog.message}</p>}
            <div className="cc-dialog-actions">
              {dialog.cancelLabel && (
                <button type="button" className="cc-btn cc-btn-ghost" onClick={() => close(false)}>
                  {dialog.cancelLabel}
                </button>
              )}
              <button
                type="button"
                ref={confirmRef}
                className="cc-btn cc-btn-primary"
                onClick={() => close(true)}
              >
                {dialog.confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="cc-toast-layer" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`cc-toast${t.out ? " cc-out" : ""}`} style={{ pointerEvents: "auto" }}>
            <span className="cc-toast-dot" aria-hidden="true">
              ✓
            </span>
            {t.text}
          </div>
        ))}
      </div>
    </DialogContext.Provider>
  );
}
