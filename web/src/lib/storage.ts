"use client";

import { useEffect, useState } from "react";

/** Safe one-shot read. Returns `fallback` on SSR or corrupt/missing data. */
export function readStore<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    console.warn(`Ignoring corrupt localStorage key "${key}"`);
    return fallback;
  }
}

/**
 * State backed by localStorage. SSR-safe: renders `initial` on the server and
 * first client paint, then hydrates from storage in an effect to avoid a
 * hydration mismatch. The third tuple element reports when hydration is done.
 */
export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setValue(readStore(key, initial));
    setHydrated(true);
    // Only re-read when the key changes; `initial` is a stable default.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* quota or private-mode errors are non-fatal */
    }
  }, [key, value, hydrated]);

  return [value, setValue, hydrated] as const;
}
