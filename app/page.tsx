"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 dark:bg-zinc-950">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-xl rounded-xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <h1 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Design Systems Playground
        </h1>
        <p className="mb-6 text-zinc-600 dark:text-zinc-300">
          Next.js 15 + TypeScript strict mode + Tailwind CSS v4.
        </p>
        <Button>
          <Sparkles className="mr-2 h-4 w-4" />
          Starter UI Primitive
        </Button>
      </motion.section>
    </main>
  );
}
