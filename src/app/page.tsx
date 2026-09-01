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
} from 'lucide-react'

import {getCaseStudies} from '@/sanity/lib/getCaseStudies'
import {getHomepageContent, type HomepageContent} from '@/sanity/lib/getHomepageContent'

const defaultHomepageContent: HomepageContent = {
  navWordmark: 'DT',
  navLinks: [
    {label: 'Work', href: '#work'},
    {label: 'About', href: '#about'},
    {label: 'Contact', href: '#contact'},
  ],
  availabilityText: 'Available for select projects',
  availabilityHref: 'https://cal.com/your-username',
  navMenuHref: '#contact',
  heroEyebrow: 'AI systems engineer',
  heroEyebrowMeta: '2024—26',
  heroHeadingLead: 'Building Production-Grade',
  heroHeadingEmphasis: 'Multi-Agent Systems',
  heroHeadingTrail: '& Enterprise RAG.',
  heroIntro:
    'I design and ship dependable AI infrastructure for teams turning ambitious language-model ideas into measurable business systems.',
  heroPrimaryCtaLabel: 'Book 15-Min Strategy Call',
  heroPrimaryCtaHref: 'https://cal.com/your-username',
  heroCircleCtaHref: '#work',
  heroScrollLabel: 'Scroll to explore',
  heroProgressLabel: '01 / 05',
  heroFigureName: 'DIPAN\nTIMALSINA',
  heroFigureMonogram: 'DT',
  heroFigureCaptionLineOne: 'Kathmandu / Worldwide',
  heroFigureCaptionLineTwo: 'Engineering with intent.',
  aboutSectionNumber: '(01)',
  aboutSectionTitle: 'Approach',
  aboutHeadingLead: 'Useful can be',
  aboutHeadingEmphasis: 'intelligent.',
  aboutParagraphOne:
    "I'm Dipan — an AI Systems Engineer building the connective tissue between models, data, and real-world operations.",
  aboutParagraphTwo:
    'From retrieval quality to infrastructure reliability, I care about the details that make AI systems useful in production. No demos that stop at the wow moment. Just clear architecture, measurable outcomes, and room to grow.',
  aboutConversationLabel: 'Start a conversation',
  aboutConversationHref: 'mailto:hello@dipantimalsina.com',
  capabilities: [
    'Multi-Agent Orchestration',
    'Vector DBs & RAG',
    'FastAPI & Cloud Infra',
    'LLM Token Optimization',
  ],
  workSectionNumber: '(02)',
  workSectionTitle: 'Selected case studies',
  workCountSuffix: 'systems',
  workHeadingLead: 'Built for',
  workHeadingEmphasis: 'the real world.',
  workDescription:
    'AI systems designed around reliability, observability, and the people who depend on them.',
  caseStudyWatchLabel: 'Watch 2-Min Loom',
  caseStudyDemoLabel: 'Live Sandbox',
  caseStudyGithubLabel: 'GitHub Repo',
  caseStudyArtMarkPrimary: 'AI',
  caseStudyArtMarkSecondary: 'RAG',
  processSectionNumber: '(03)',
  processSectionTitle: 'Process',
  processHeadingLead: 'Make it',
  processHeadingEmphasis: 'matter.',
  processSteps: [
    {
      title: 'Map the system',
      description:
        'Find the actual constraints across data, models, users, and infrastructure before choosing a tool.',
    },
    {
      title: 'Build for failure',
      description:
        'Use typed boundaries, evaluations, traces, and fallbacks so the happy path is never the whole plan.',
    },
    {
      title: 'Measure the impact',
      description:
        'Ship with clear quality, latency, and cost metrics — then improve what the system reveals.',
    },
  ],
  quoteLead: 'The best AI system is the one',
  quoteEmphasis: 'people can rely on.',
  quoteAuthor: 'Dipan Timalsina',
  contactSectionNumber: '(04)',
  contactSectionTitle: 'Get in touch',
  contactHeadingLead: 'Have a hard',
  contactHeadingEmphasis: 'problem?',
  contactPrimaryCtaLabel: 'Book 15-Min Strategy Call',
  contactPrimaryCtaHref: 'https://cal.com/your-username',
  contactEmailLabel: 'hello@dipantimalsina.com',
  contactEmailHref: 'mailto:hello@dipantimalsina.com',
  footerScreenLineOne: "Let's make",
  footerScreenHighlight: 'something',
  footerScreenLineThree: 'worth shipping.',
  footerCopyright: '© Dipan Timalsina 2026',
  footerLocation: 'Kathmandu, Nepal',
  socialGithubHref: 'https://github.com/dipantimalsina',
  socialEmailHref: 'mailto:hello@dipantimalsina.com',
  socialBackToTopHref: '#top',
}

export default async function Home() {
  const [caseStudies, homepageContentData] = await Promise.all([
    getCaseStudies(),
    getHomepageContent(),
  ])

  const homepageContent = homepageContentData ?? defaultHomepageContent
  const heroFigureNameLines = homepageContent.heroFigureName.split('\n')

  return (
    <main>
      <section className="hero-section" id="top">
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#top" className="wordmark">
            {homepageContent.navWordmark}
            <span>.</span>
          </a>
          <div className="nav-links">
            {homepageContent.navLinks.map((link) => (
              <a href={link.href} key={`${link.label}-${link.href}`}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="nav-menu" href={homepageContent.navMenuHref} aria-label="Jump to contact">
            <Menu />
          </a>
          <a className="availability" href={homepageContent.availabilityHref}>
            <span className="status-dot" /> {homepageContent.availabilityText}
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              {homepageContent.heroEyebrow} <span>/ {homepageContent.heroEyebrowMeta}</span>
            </p>
            <h1>
              {homepageContent.heroHeadingLead}
              <br />
              <em>{homepageContent.heroHeadingEmphasis}</em>
              <br />
              {homepageContent.heroHeadingTrail}
            </h1>
            <p className="hero-intro">{homepageContent.heroIntro}</p>
            <div className="hero-actions">
              <a className="primary-cta" href={homepageContent.heroPrimaryCtaHref}>
                {homepageContent.heroPrimaryCtaLabel} <ArrowUpRight />
              </a>
              <a className="circle-cta" href={homepageContent.heroCircleCtaHref} aria-label="Explore selected work">
                <ArrowDownRight />
              </a>
            </div>
          </div>
          <div className="hero-figure" aria-label="Portrait of Dipan Timalsina">
            <div className="figure-label">
              {heroFigureNameLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < heroFigureNameLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </div>
            <div className="figure-monogram">{homepageContent.heroFigureMonogram}</div>
            <div className="figure-caption">
              {homepageContent.heroFigureCaptionLineOne}
              <br />
              {homepageContent.heroFigureCaptionLineTwo}
            </div>
          </div>
        </div>
        <div className="hero-footer">
          <span>{homepageContent.heroScrollLabel}</span>
          <span className="footer-line" />
          <span>{homepageContent.heroProgressLabel}</span>
        </div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-kicker">
          <span>{homepageContent.aboutSectionNumber}</span>
          <span>{homepageContent.aboutSectionTitle}</span>
        </div>
        <div className="intro-layout">
          <h2>
            {homepageContent.aboutHeadingLead}
            <br />
            <span>{homepageContent.aboutHeadingEmphasis}</span>
          </h2>
          <div className="intro-body">
            <p>{homepageContent.aboutParagraphOne}</p>
            <p>{homepageContent.aboutParagraphTwo}</p>
            <a className="text-link" href={homepageContent.aboutConversationHref}>
              {homepageContent.aboutConversationLabel} <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="capability-row">
          {homepageContent.capabilities.map((capability, index) => (
            <div className="capability" key={capability}>
              <span>{`0${index + 1}`}</span>
              <strong>{capability}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-kicker light">
          <span>{homepageContent.workSectionNumber}</span>
          <span>{homepageContent.workSectionTitle}</span>
          <span className="section-count">
            {caseStudies.length} {homepageContent.workCountSuffix}
          </span>
        </div>
        <div className="work-heading">
          <h2>
            {homepageContent.workHeadingLead}
            <br />
            <em>{homepageContent.workHeadingEmphasis}</em>
          </h2>
          <p>{homepageContent.workDescription}</p>
        </div>
        <div className="project-list">
          {caseStudies.map((study, index) => (
            <article className={`project-card project-${index % 2 === 0 ? 'red' : 'ink'}`} key={study.id}>
              <div className="project-art">
                <span className="project-number">0{index + 1}</span>
                <span className="art-mark">
                  {index % 2 === 0
                    ? homepageContent.caseStudyArtMarkPrimary
                    : homepageContent.caseStudyArtMarkSecondary}
                </span>
                <a className="play-mark" href={study.loomUrl} aria-label={`Watch ${study.title} Loom`}>
                  <Play fill="currentColor" />
                </a>
              </div>
              <div className="project-meta">
                <div>
                  <p className="project-type">{study.situation}</p>
                  <h3>{study.title}</h3>
                </div>
                <p className="project-description">{study.architectureSummary}</p>
                <div className="tag-list">
                  {study.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="metric-list">
                  {study.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
                <div className="project-bottom">
                  <div className="project-links">
                    <a href={study.loomUrl}>
                      {homepageContent.caseStudyWatchLabel} <Play />
                    </a>
                    <a href={study.demoUrl}>
                      {homepageContent.caseStudyDemoLabel} <ExternalLink />
                    </a>
                    <a href={study.githubUrl}>
                      {homepageContent.caseStudyGithubLabel} <GitBranch />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-kicker">
          <span>{homepageContent.processSectionNumber}</span>
          <span>{homepageContent.processSectionTitle}</span>
        </div>
        <div className="process-layout">
          <h2>
            {homepageContent.processHeadingLead}
            <br />
            <em>{homepageContent.processHeadingEmphasis}</em>
          </h2>
          <div className="process-list">
            {homepageContent.processSteps.map((step, index) => (
              <div key={`${step.title}-${index}`}>
                <span>{`0${index + 1}`}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <Sparkles />
        <blockquote>
          “{homepageContent.quoteLead}
          <br />
          <em>{homepageContent.quoteEmphasis}</em>”
        </blockquote>
        <p>— {homepageContent.quoteAuthor}</p>
      </section>

      <footer className="contact-section" id="contact">
        <div className="section-kicker light">
          <span>{homepageContent.contactSectionNumber}</span>
          <span>{homepageContent.contactSectionTitle}</span>
        </div>
        <div className="contact-layout">
          <div>
            <h2>
              {homepageContent.contactHeadingLead}
              <br />
              <em>{homepageContent.contactHeadingEmphasis}</em>
            </h2>
            <div className="contact-actions">
              <a className="primary-cta" href={homepageContent.contactPrimaryCtaHref}>
                {homepageContent.contactPrimaryCtaLabel} <ArrowUpRight />
              </a>
              <a className="contact-email" href={homepageContent.contactEmailHref}>
                {homepageContent.contactEmailLabel} <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="footer-object">
            <div className="laptop-screen">
              {homepageContent.footerScreenLineOne}
              <br />
              <span>{homepageContent.footerScreenHighlight}</span>
              <br />
              {homepageContent.footerScreenLineThree}
            </div>
            <div className="laptop-base" />
          </div>
        </div>
        <div className="footer-bottom">
          <span>{homepageContent.footerCopyright}</span>
          <span className="location">
            <MapPin /> {homepageContent.footerLocation}
          </span>
          <div className="social-links">
            <a href={homepageContent.socialGithubHref} aria-label="GitHub">
              <GitBranch />
            </a>
            <a href={homepageContent.socialEmailHref} aria-label="Email">
              <Mail />
            </a>
            <a href={homepageContent.socialBackToTopHref} aria-label="Back to top">
              <MoveUpRight />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
