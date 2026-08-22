import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Play,
  Sparkles,
} from "lucide-react";

const CAL_LINK = "https://cal.com/your-username";

export interface CaseStudy {
  id: string;
  title: string;
  situation: string;
  architectureSummary: string;
  tags: string[];
  loomUrl: string;
  demoUrl: string;
  githubUrl: string;
  metrics: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "enterprise-multi-agent-pipeline",
    title: "Enterprise Multi-Agent Pipeline",
    situation: "A global operations team needed one reliable intelligence layer across fragmented internal workflows.",
    architectureSummary: "Orchestrated specialist agents with typed handoffs, durable task state, observability, and policy-aware tool access.",
    tags: ["Multi-agent", "Python", "Cloud infra"],
    loomUrl: "https://www.loom.com/share/enterprise-multi-agent-pipeline",
    demoUrl: "https://example.com/sandbox",
    githubUrl: "https://github.com/dipantimalsina",
    metrics: ["4 specialist agents", "68% less manual triage", "99.9% workflow uptime"],
  },
  {
    id: "production-grade-rag",
    title: "Production-Grade RAG",
    situation: "A regulated product team needed answers grounded in thousands of changing technical documents.",
    architectureSummary: "Hybrid retrieval with metadata filters, reranking, citation tracing, evaluation sets, and streaming answer delivery.",
    tags: ["RAG", "Vector DB", "Evaluations"],
    loomUrl: "https://www.loom.com/share/production-grade-rag",
    demoUrl: "https://example.com/rag-sandbox",
    githubUrl: "https://github.com/dipantimalsina",
    metrics: ["92% retrieval precision", "1.8s median response", "12k+ indexed documents"],
  },
  {
    id: "token-efficient-copilot",
    title: "Token-Efficient Copilot",
    situation: "An AI support product was delivering value, but escalating model costs made scale difficult.",
    architectureSummary: "Context compression, semantic caching, model routing, and structured outputs reduced waste without sacrificing quality.",
    tags: ["Optimization", "LLM routing", "FastAPI"],
    loomUrl: "https://www.loom.com/share/token-efficient-copilot",
    demoUrl: "https://example.com/copilot",
    githubUrl: "https://github.com/dipantimalsina",
    metrics: ["41% lower token spend", "3 model tiers", "24/7 API availability"],
  },
  {
    id: "agent-observability-layer",
    title: "Agent Observability Layer",
    situation: "A product team needed to understand where autonomous workflows failed before shipping them to customers.",
    architectureSummary: "Trace-first instrumentation, prompt/version tracking, replayable runs, and human review queues made quality measurable.",
    tags: ["Observability", "Tracing", "AI QA"],
    loomUrl: "https://www.loom.com/share/agent-observability-layer",
    demoUrl: "https://example.com/observability",
    githubUrl: "https://github.com/dipantimalsina",
    metrics: ["100% trace coverage", "6 failure modes tracked", "2x faster QA cycles"],
  },
];

const capabilities = [
  "Multi-Agent Orchestration",
  "Vector DBs & RAG",
  "FastAPI & Cloud Infra",
  "LLM Token Optimization",
];

export default function Home() {
  return (
    <main>
      <section className="hero-section" id="top">
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#top" className="wordmark">DT<span>.</span></a>
          <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
          <a className="nav-menu" href="#contact" aria-label="Jump to contact"><Menu /></a>
          <a className="availability" href={CAL_LINK}><span className="status-dot" /> Available for select projects</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI systems engineer <span>/ 2024—26</span></p>
            <h1>Building Production-Grade<br /><em>Multi-Agent Systems</em><br />&amp; Enterprise RAG.</h1>
            <p className="hero-intro">I design and ship dependable AI infrastructure for teams turning ambitious language-model ideas into measurable business systems.</p>
            <div className="hero-actions">
              <a className="primary-cta" href={CAL_LINK}>Book 15-Min Strategy Call <ArrowUpRight /></a>
              <a className="circle-cta" href="#work" aria-label="Explore selected work"><ArrowDownRight /></a>
            </div>
          </div>
          <div className="hero-figure" aria-label="Portrait of Dipan Timalsina"><div className="figure-label">DIPAN<br />TIMALSINA</div><div className="figure-monogram">DT</div><div className="figure-caption">Kathmandu / Worldwide<br />Engineering with intent.</div></div>
        </div>
        <div className="hero-footer"><span>Scroll to explore</span><span className="footer-line" /><span>01 / 05</span></div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-kicker"><span>(01)</span><span>Approach</span></div>
        <div className="intro-layout"><h2>Useful can be<br /><span>intelligent.</span></h2><div className="intro-body"><p>I&apos;m Dipan — an AI Systems Engineer building the connective tissue between models, data, and real-world operations.</p><p>From retrieval quality to infrastructure reliability, I care about the details that make AI systems useful in production. No demos that stop at the wow moment. Just clear architecture, measurable outcomes, and room to grow.</p><a className="text-link" href="mailto:hello@dipantimalsina.com">Start a conversation <ArrowUpRight /></a></div></div>
        <div className="capability-row">{capabilities.map((capability, index) => <div className="capability" key={capability}><span>0{index + 1}</span><strong>{capability}</strong></div>)}</div>
      </section>

      <section className="work-section" id="work">
        <div className="section-kicker light"><span>(02)</span><span>Selected case studies</span><span className="section-count">{caseStudies.length} systems</span></div>
        <div className="work-heading"><h2>Built for<br /><em>the real world.</em></h2><p>AI systems designed around reliability, observability, and the people who depend on them.</p></div>
        <div className="project-list">{caseStudies.map((study, index) => <article className={`project-card project-${index % 2 === 0 ? "red" : "ink"}`} key={study.id}><div className="project-art"><span className="project-number">0{index + 1}</span><span className="art-mark">{index % 2 === 0 ? "AI" : "RAG"}</span><a className="play-mark" href={study.loomUrl} aria-label={`Watch ${study.title} Loom`}><Play fill="currentColor" /></a></div><div className="project-meta"><div><p className="project-type">{study.situation}</p><h3>{study.title}</h3></div><p className="project-description">{study.architectureSummary}</p><div className="tag-list">{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="metric-list">{study.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div><div className="project-bottom"><div className="project-links"><a href={study.loomUrl}>Watch 2-Min Loom <Play /></a><a href={study.demoUrl}>Live Sandbox <ExternalLink /></a><a href={study.githubUrl}>GitHub Repo <GitBranch /></a></div></div></div></article>)}</div>
      </section>

      <section className="process-section"><div className="section-kicker"><span>(03)</span><span>Process</span></div><div className="process-layout"><h2>Make it<br /><em>matter.</em></h2><div className="process-list"><div><span>01</span><h3>Map the system</h3><p>Find the actual constraints across data, models, users, and infrastructure before choosing a tool.</p></div><div><span>02</span><h3>Build for failure</h3><p>Use typed boundaries, evaluations, traces, and fallbacks so the happy path is never the whole plan.</p></div><div><span>03</span><h3>Measure the impact</h3><p>Ship with clear quality, latency, and cost metrics — then improve what the system reveals.</p></div></div></div></section>

      <section className="quote-section"><Sparkles /><blockquote>“The best AI system is the one<br /><em>people can rely on.</em>”</blockquote><p>— Dipan Timalsina</p></section>

      <footer className="contact-section" id="contact"><div className="section-kicker light"><span>(04)</span><span>Get in touch</span></div><div className="contact-layout"><div><h2>Have a hard<br /><em>problem?</em></h2><div className="contact-actions"><a className="primary-cta" href={CAL_LINK}>Book 15-Min Strategy Call <ArrowUpRight /></a><a className="contact-email" href="mailto:hello@dipantimalsina.com">hello@dipantimalsina.com <ArrowUpRight /></a></div></div><div className="footer-object"><div className="laptop-screen">Let&apos;s make<br /><span>something</span><br />worth shipping.</div><div className="laptop-base" /></div></div><div className="footer-bottom"><span>© Dipan Timalsina 2026</span><span className="location"><MapPin /> Kathmandu, Nepal</span><div className="social-links"><a href="https://github.com/dipantimalsina" aria-label="GitHub"><GitBranch /></a><a href="mailto:hello@dipantimalsina.com" aria-label="Email"><Mail /></a><a href="#top" aria-label="Back to top"><MoveUpRight /></a></div></div></footer>
    </main>
  );
}
