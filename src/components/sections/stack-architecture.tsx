import { type Proof } from "@/data/mock";

const kindClass: Record<Proof["stack"][number]["kind"], string> = {
  input: "border-zinc-700 text-zinc-300",
  system: "border-sky-300/35 bg-sky-300/10 text-sky-100",
  output: "border-white/15 text-zinc-100",
};

export function StackArchitecture({ stack }: { stack: Proof["stack"] }) {
  return (
    <section className="glass-panel rounded-lg p-6">
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
          Stack architecture
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {stack.map((node, index) => (
          <div key={node.label} className="relative">
            {index > 0 ? (
              <div className="absolute -left-4 top-1/2 hidden h-px w-4 bg-sky-300/30 md:block" />
            ) : null}
            <div
              className={`min-h-32 rounded-lg border bg-zinc-950/70 p-4 ${kindClass[node.kind]}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                {node.kind}
              </p>
              <p className="mt-8 text-sm font-medium">{node.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
