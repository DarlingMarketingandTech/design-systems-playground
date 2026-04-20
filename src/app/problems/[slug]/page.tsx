import { notFound } from "next/navigation";

import { ScrollToc } from "@/components/sections/scroll-toc";
import { SystemDiffToggle } from "@/components/ui/system-diff-toggle";
import { getProblem, problems } from "@/data/mock";

export function generateStaticParams() {
  return problems.map((problem) => ({ slug: problem.slug }));
}

export default async function ProblemDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const problem = getProblem(slug);

  if (!problem) {
    notFound();
  }

  return (
    <main className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[18rem_1fr]">
      <ScrollToc sections={problem.sections} />
      <article>
        <section className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-100">
            {problem.signal}
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-50 md:text-6xl">
            {problem.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400">
            {problem.diagnostic}
          </p>
        </section>
        <div className="grid gap-6">
          {problem.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 rounded-lg border border-white/10 bg-zinc-950/55 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                {section.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
                {section.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
                {section.body}
              </p>
            </section>
          ))}
        </div>
        <section className="mt-8">
          <SystemDiffToggle before={problem.before} after={problem.after} />
        </section>
      </article>
    </main>
  );
}
