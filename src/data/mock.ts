export type HubKey = "problems" | "proof" | "process" | "tools";

export type NavItem = {
  label: string;
  href: `/${string}` | "/";
};

export type Problem = {
  slug: string;
  title: string;
  bottleneck: string;
  severity: "Critical" | "High" | "Medium";
  signal: string;
  metric: string;
  diagnostic: string;
  sections: Array<{
    id: string;
    eyebrow: string;
    title: string;
    body: string;
  }>;
  before: string[];
  after: string[];
};

export type ProofCategory = "Healthcare" | "SaaS" | "Local Services";

export type Proof = {
  slug: string;
  client: string;
  category: ProofCategory;
  heroImage: {
    src: string;
    alt: string;
  };
  metric: {
    value: number;
    suffix: string;
    label: string;
  };
  mechanism: string;
  summary: string;
  chart: number[];
  stack: Array<{
    label: string;
    kind: "input" | "system" | "output";
  }>;
};

export type ProcessStep = {
  slug: string;
  stage: string;
  title: string;
  summary: string;
  duration: string;
  codeLabel: string;
  code: string;
  tooltip: string;
};

export type Tool = {
  name: string;
  status: "Prototype" | "Ready" | "Concept";
  category: string;
  description: string;
  metric: string;
  cta: string;
};

export const site = {
  name: "Darling MarTech v2 Playground",
  eyebrow: "Engineering Teardown Lab",
  description:
    "A template environment for testing motion-heavy diagnostic, proof, process, and tool surfaces before production merge.",
  nav: [
    { label: "Problems", href: "/problems" },
    { label: "Proof", href: "/proof" },
    { label: "Process", href: "/process" },
    { label: "Tools", href: "/tools" },
  ] satisfies NavItem[],
  footerLinks: [
    { label: "Template QA", href: "/process" },
    { label: "Proof Systems", href: "/proof" },
    { label: "Tool Lab", href: "/tools" },
  ] satisfies NavItem[],
};

export const hubs = {
  problems: {
    title: "Diagnostic Dashboard",
    eyebrow: "Structural bottlenecks",
    summary:
      "Map the points where strategy, data, web systems, and revenue workflows stop reinforcing each other.",
  },
  proof: {
    title: "Proof Systems",
    eyebrow: "Measured implementation outcomes",
    summary:
      "Compare work by quantified impact, operating mechanism, and the systems that made the result repeatable.",
  },
  process: {
    title: "Assembly Line",
    eyebrow: "Diagnose -> Build -> Run",
    summary:
      "A route template for showing how methods progress from teardown to shipped operating system.",
  },
  tools: {
    title: "Tool Store",
    eyebrow: "Interactive MarTech utilities",
    summary:
      "A premium software grid for utilities that can be launched, tested, and promoted from the lab.",
  },
};

export const problems: Problem[] = [
  {
    slug: "fragmented-attribution",
    title: "Fragmented attribution",
    bottleneck: "Revenue signals are split across ads, CRM, forms, and sales notes.",
    severity: "Critical",
    signal: "Lead source mismatch",
    metric: "42% dark handoff",
    diagnostic:
      "Tracking looks active, but decision makers cannot explain which motion actually moved pipeline.",
    sections: [
      {
        id: "signal",
        eyebrow: "01 / signal",
        title: "The reporting layer is not the system of record.",
        body: "Each channel reports its own success, so budget decisions depend on stitched screenshots instead of shared definitions.",
      },
      {
        id: "teardown",
        eyebrow: "02 / teardown",
        title: "The failure lives between events, not inside one tool.",
        body: "Forms, paid traffic, lifecycle emails, and CRM stages need one operating vocabulary before dashboards become useful.",
      },
      {
        id: "repair",
        eyebrow: "03 / repair",
        title: "A clean event map turns reporting into a control surface.",
        body: "The system needs fewer metrics, better joins, and a traceable path from campaign signal to sales action.",
      },
    ],
    before: ["Unmatched UTM logic", "Manual CRM notes", "Channel-only reporting"],
    after: ["Shared source taxonomy", "Pipeline-stage joins", "Budget-ready dashboards"],
  },
  {
    slug: "conversion-debt",
    title: "Conversion debt",
    bottleneck: "Pages make the offer visible but do not prove the buying path.",
    severity: "High",
    signal: "High-intent exits",
    metric: "31% offer drop",
    diagnostic:
      "The site has enough content volume, but the proof and action path are not aligned to buyer readiness.",
    sections: [
      {
        id: "signal",
        eyebrow: "01 / signal",
        title: "Visitors understand the category before they trust the offer.",
        body: "The page answers what the company does but delays proof, constraints, and the next concrete step.",
      },
      {
        id: "teardown",
        eyebrow: "02 / teardown",
        title: "The conversion problem is usually an information architecture problem.",
        body: "CTAs, proof blocks, and service logic need to match the questions a qualified buyer is already asking.",
      },
      {
        id: "repair",
        eyebrow: "03 / repair",
        title: "A sharper proof ladder reduces decision drag.",
        body: "The fix is a route system that places evidence, mechanism, and action in a tighter sequence.",
      },
    ],
    before: ["Generic service claims", "Late proof", "Same CTA everywhere"],
    after: ["Buyer-stage proof", "Route-specific CTAs", "Mechanism-first sections"],
  },
  {
    slug: "tool-sprawl",
    title: "Tool sprawl",
    bottleneck: "Platform capability grows faster than governance and workflow clarity.",
    severity: "Medium",
    signal: "Redundant automations",
    metric: "18 active platforms",
    diagnostic:
      "The stack has powerful pieces, but teams cannot see which tools are strategic, tactical, or retired.",
    sections: [
      {
        id: "signal",
        eyebrow: "01 / signal",
        title: "The tech stack is visible, but the operating model is not.",
        body: "Teams inherit tools without knowing which platform owns which job or where handoffs should occur.",
      },
      {
        id: "teardown",
        eyebrow: "02 / teardown",
        title: "Capability maps should describe work, not vendor inventory.",
        body: "The useful layer groups tools by data capture, orchestration, delivery, proof, and decision support.",
      },
      {
        id: "repair",
        eyebrow: "03 / repair",
        title: "A capability catalog makes the stack legible.",
        body: "Governed platform groups reduce duplication and create clearer build paths for new tools.",
      },
    ],
    before: ["Vendor-first lists", "Duplicated automations", "Unclear ownership"],
    after: ["Capability groups", "Governed workflows", "Tool retirement rules"],
  },
];

export const proofItems: Proof[] = [
  {
    slug: "clinical-demand-system",
    client: "Clinical demand system",
    category: "Healthcare",
    heroImage: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      alt: "Dark circuit board and data hardware close up",
    },
    metric: { value: 212, suffix: "%", label: "qualified inquiry lift" },
    mechanism:
      "Offer routing, proof-first landing architecture, and CRM handoff telemetry worked as one system.",
    summary:
      "A demand surface rebuilt around buyer questions, compliance-sensitive proof, and faster sales triage.",
    chart: [22, 31, 38, 44, 59, 71, 84],
    stack: [
      { label: "Paid signal", kind: "input" },
      { label: "Proof route", kind: "system" },
      { label: "CRM handoff", kind: "system" },
      { label: "Sales action", kind: "output" },
    ],
  },
  {
    slug: "saas-pipeline-clarity",
    client: "SaaS pipeline clarity",
    category: "SaaS",
    heroImage: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
      alt: "Server rack with structured lights in a dark data center",
    },
    metric: { value: 64, suffix: "%", label: "faster source diagnosis" },
    mechanism:
      "Channel taxonomy, lead scoring logic, and reporting views were rebuilt around decision speed.",
    summary:
      "A reporting layer turned from passive dashboards into a weekly operating surface.",
    chart: [18, 21, 33, 39, 47, 58, 64],
    stack: [
      { label: "Campaign events", kind: "input" },
      { label: "Source model", kind: "system" },
      { label: "Pipeline view", kind: "system" },
      { label: "Budget call", kind: "output" },
    ],
  },
  {
    slug: "local-booking-command",
    client: "Local booking command",
    category: "Local Services",
    heroImage: {
      src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80",
      alt: "Fiber optic network cables glowing in a dark technical room",
    },
    metric: { value: 37, suffix: "%", label: "booking flow improvement" },
    mechanism:
      "Search intent, local landing pages, and operational command-center logic were connected.",
    summary:
      "A service business moved from scattered inbound demand to a cleaner booking and follow-up loop.",
    chart: [12, 17, 21, 25, 29, 34, 37],
    stack: [
      { label: "Local intent", kind: "input" },
      { label: "Booking path", kind: "system" },
      { label: "Follow-up queue", kind: "system" },
      { label: "Booked work", kind: "output" },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    slug: "diagnose",
    stage: "01",
    title: "Diagnose",
    summary:
      "Audit the current market, content, tracking, and platform shape before prescribing a build.",
    duration: "1-2 weeks",
    codeLabel: "diagnostic.config.ts",
    code: "export const diagnostic = {\n  inputs: ['traffic', 'crm', 'offers'],\n  output: 'bottleneck-map',\n  confidence: 'evidence-first'\n};",
    tooltip: "The diagnostic phase produces a prioritized map, not a generic recommendations deck.",
  },
  {
    slug: "build",
    stage: "02",
    title: "Build",
    summary:
      "Translate the teardown into route architecture, system components, automation, and proof surfaces.",
    duration: "2-6 weeks",
    codeLabel: "implementation.pipeline.ts",
    code: "export const build = compose(\n  routeSystem,\n  dataContract,\n  proofModules,\n  launchChecks\n);",
    tooltip: "Build work is constrained by the data contract so templates can survive content changes.",
  },
  {
    slug: "run",
    stage: "03",
    title: "Run",
    summary:
      "Operate the shipped system through reporting cadence, experiments, content updates, and tool governance.",
    duration: "Ongoing",
    codeLabel: "operating-loop.ts",
    code: "while (system.isLive) {\n  inspectSignals();\n  shipSmallFixes();\n  documentLearning();\n}",
    tooltip: "Run work turns launch into an operating cadence with measurable fixes.",
  },
];

export const tools: Tool[] = [
  {
    name: "GEO Readiness Auditor",
    status: "Ready",
    category: "Search intelligence",
    description: "Scores whether a page can be discovered, cited, and understood by AI answer systems.",
    metric: "12-point scan",
    cta: "Launch Tool",
  },
  {
    name: "Offer Ladder Mapper",
    status: "Prototype",
    category: "Service strategy",
    description: "Models how low-friction proof, service offers, and high-value engagements connect.",
    metric: "4 route modes",
    cta: "Launch Tool",
  },
  {
    name: "Stack Drift Monitor",
    status: "Concept",
    category: "Platform governance",
    description: "Flags duplicated platform jobs, orphan automations, and unclear source-of-truth ownership.",
    metric: "18 stack checks",
    cta: "Launch Tool",
  },
  {
    name: "Proof Block Generator",
    status: "Prototype",
    category: "Content systems",
    description: "Turns raw project evidence into concise mechanism, metric, and implementation-stack modules.",
    metric: "3 proof layers",
    cta: "Launch Tool",
  },
];

export function getProblem(slug: string) {
  return problems.find((problem) => problem.slug === slug);
}

export function getProof(slug: string) {
  return proofItems.find((proof) => proof.slug === slug);
}

export function getProcessStep(slug: string) {
  return processSteps.find((step) => step.slug === slug);
}
