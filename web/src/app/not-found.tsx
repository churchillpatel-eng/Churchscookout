import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-header">
      <h2>Page not found</h2>
      <p className="page-sub">That recipe seems to have left the kitchen.</p>
      <Link className="btn-primary" href="/" style={{ marginTop: 16 }}>
        Back to Home
      </Link>
    </div>
  );
}
