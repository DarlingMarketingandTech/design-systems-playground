"use client";

import Link from "next/link";

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
    };
  }
}

export function DiagnosticCta() {
  return (
    <Link
      href="/process"
      onClick={() => {
        window.posthog?.capture("diagnostic_cta_clicked", {
          source: "graston_proof_page",
        });
      }}
      className="inline-flex items-center rounded-md border border-sky-300/35 bg-sky-300/12 px-5 py-3 text-sm font-medium text-sky-100 transition hover:border-sky-300/55 hover:bg-sky-300/18"
    >
      Book a system diagnostic
    </Link>
  );
}
