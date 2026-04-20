import { notFound } from "next/navigation";
import Image from "next/image";

import { ImpactChart } from "@/components/sections/impact-chart";
import { StackArchitecture } from "@/components/sections/stack-architecture";
import { CountUp } from "@/components/ui/count-up";
import { getProof, proofItems } from "@/data/mock";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nOScgdmlld0JveD0nMCAwIDE2IDknIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzknIGZpbGw9JyMwOTA5MGInLz48Y2lyY2xlIGN4PScxMicgY3k9JzQnIHI9JzYnIGZpbGw9JyMwYzc0YTgnIG9wYWNpdHk9Jy4zNScvPjwvc3ZnPg==";

export function generateStaticParams() {
  return proofItems.map((proof) => ({ slug: proof.slug }));
}

export default async function ProofDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proof = getProof(slug);

  if (!proof) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-16">
      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-100">
            {proof.category}
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-50 md:text-6xl">
            {proof.client}
          </h1>
          <CountUp
            value={proof.metric.value}
            suffix={proof.metric.suffix}
            className="mt-8 block font-mono text-6xl font-semibold tracking-tight text-sky-100"
          />
          <p className="mt-3 text-sm text-zinc-400">{proof.metric.label}</p>
          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">
            {proof.summary}
          </p>
        </div>
        <div className="grid gap-4">
          <div className="gradient-border relative min-h-64 overflow-hidden rounded-lg">
            <Image
              src={proof.heroImage.src}
              alt={proof.heroImage.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="image-luminosity object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/45 to-transparent" />
          </div>
          <ImpactChart points={proof.chart} />
        </div>
      </section>
      <section className="mt-8">
        <StackArchitecture stack={proof.stack} />
      </section>
    </main>
  );
}
