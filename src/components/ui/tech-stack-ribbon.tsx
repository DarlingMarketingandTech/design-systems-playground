const stack = [
  "Google Ads",
  "Meta Ads",
  "Provider Directory CMS",
  "HubSpot CRM",
  "Zapier",
  "PostHog",
  "GA4",
];

export function TechStackRibbon() {
  return (
    <section className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70 p-5 backdrop-blur-xl">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">Tech stack ribbon</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-white/10 bg-zinc-900/60 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
