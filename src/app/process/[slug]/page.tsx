import { notFound } from "next/navigation";

import { CodeMethod } from "@/components/sections/code-method";
import { getProcessStep, processSteps } from "@/data/mock";

export function generateStaticParams() {
  return processSteps.map((step) => ({ slug: step.slug }));
}

export default async function ProcessDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const step = getProcessStep(slug);

  if (!step) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-16">
      <section className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-100">
          {step.stage}
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-50">
          {step.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400">{step.summary}</p>
      </section>
      <CodeMethod step={step} />
    </main>
  );
}
