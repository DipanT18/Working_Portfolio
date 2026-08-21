import { ArrowDownRight, ArrowUpRight, ExternalLink, GitBranch, Mail, MapPin, Menu, MoveUpRight, Play, Sparkles } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "MOMENTUM",
    type: "Creative direction / Digital product",
    description: "A new visual language for a studio that moves at the speed of culture.",
    tags: ["Branding", "Web design", "Development"],
    tone: "project-red",
  },
  {
    number: "02",
    title: "ARCHIVE / 24",
    type: "Editorial platform",
    description: "Making the invisible work of independent makers impossible to miss.",
    tags: ["Art direction", "Editorial", "Interaction"],
    tone: "project-ink",
  },
  {
    number: "03",
    title: "FIELD NOTES",
    type: "Digital experience",
    description: "A field guide for curious people, designed to be explored rather than scrolled.",
    tags: ["Strategy", "UX / UI", "Motion"],
    tone: "project-slate",
  },
  {
    number: "04",
    title: "STILL / MOVING",
    type: "Campaign / Portfolio",
    description: "A flexible home for a photographer with a point of view and places to go.",
    tags: ["Portfolio", "Creative coding", "CMS"],
    tone: "project-paper",
  },
];

const capabilities = ["Creative direction", "Brand identity", "Digital experiences", "Frontend development"];

export default function Home() {
  return (
    <main>
      <section className="hero-section" id="top">
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#top" className="wordmark">DT<span>.</span></a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-menu" href="#contact" aria-label="Jump to contact"><Menu /></a>
          <a className="availability" href="#contact"><span className="status-dot" /> Available for select projects</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent designer & developer <span>/ 2024—26</span></p>
            <h1>Things should<br /><em>feel</em> inevitable.</h1>
            <p className="hero-intro">I build identities and digital experiences for people making the future more considered, more useful, and more alive.</p>
            <a className="circle-cta" href="#work" aria-label="Explore selected work"><ArrowDownRight /></a>
          </div>
          <div className="hero-figure" aria-label="Portrait of Dipan Timalsina">
            <div className="figure-label">DIPAN<br />TIMALSINA</div>
            <div className="figure-monogram">DT</div>
            <div className="figure-caption">Kathmandu / Worldwide<br />Designing with intent.</div>
          </div>
        </div>
        <div className="hero-footer"><span>Scroll to explore</span><span className="footer-line" /><span>01 / 05</span></div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-kicker"><span>(01)</span><span>Approach</span></div>
        <div className="intro-layout">
          <h2>Useful can be<br /><span>beautiful.</span></h2>
          <div className="intro-body"><p>I&apos;m Dipan — a multidisciplinary designer and developer working at the intersection of clear thinking and expressive craft.</p><p>From the first sketch to the final line of code, I care about the details that make good work feel natural. No noise. No needless decoration. Just the right idea, given room to breathe.</p><a className="text-link" href="mailto:hello@dipantimalsina.com">More about me <ArrowUpRight /></a></div>
        </div>
        <div className="capability-row">{capabilities.map((capability, index) => <div className="capability" key={capability}><span>0{index + 1}</span><strong>{capability}</strong></div>)}</div>
      </section>

      <section className="work-section" id="work">
        <div className="section-kicker light"><span>(02)</span><span>Selected work</span><span className="section-count">04 projects</span></div>
        <div className="work-heading"><h2>Made with<br /><em>purpose.</em></h2><p>Selected collaborations across identity, digital, and everything in between.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-art"><span className="project-number">{project.number}</span><span className="art-mark">{project.number === "01" ? "M" : project.number === "02" ? "A" : project.number === "03" ? "F" : "S"}</span><span className="play-mark"><Play fill="currentColor" /></span></div><div className="project-meta"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><p className="project-description">{project.description}</p><div className="project-bottom"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact" aria-label={`View ${project.title} project`}><ExternalLink /></a></div></div></article>)}</div>
      </section>

      <section className="process-section">
        <div className="section-kicker"><span>(03)</span><span>Process</span></div>
        <div className="process-layout"><h2>Make it<br /><em>matter.</em></h2><div className="process-list"><div><span>01</span><h3>Find the signal</h3><p>Start with the question underneath the question. The strongest work has something real to say.</p></div><div><span>02</span><h3>Make it clear</h3><p>Turn the thinking into a system — flexible enough to grow, specific enough to be remembered.</p></div><div><span>03</span><h3>Make it sing</h3><p>Add just enough surprise. The detail that makes someone stop, look twice, and lean in.</p></div></div></div>
      </section>

      <section className="quote-section"><Sparkles /><blockquote>“The details are not the details.<br /><em>They make the design.</em>”</blockquote><p>— Charles Eames</p></section>

      <footer className="contact-section" id="contact"><div className="section-kicker light"><span>(04)</span><span>Get in touch</span></div><div className="contact-layout"><div><h2>Have a good<br /><em>feeling?</em></h2><a className="contact-email" href="mailto:hello@dipantimalsina.com">hello@dipantimalsina.com <ArrowUpRight /></a></div><div className="footer-object"><div className="laptop-screen">Let&apos;s make<br /><span>something</span><br />worth keeping.</div><div className="laptop-base" /></div></div><div className="footer-bottom"><span>© Dipan Timalsina 2026</span><span className="location"><MapPin /> Kathmandu, Nepal</span><div className="social-links"><a href="https://github.com" aria-label="GitHub"><GitBranch /></a><a href="mailto:hello@dipantimalsina.com" aria-label="Email"><Mail /></a><a href="#top" aria-label="Back to top"><MoveUpRight /></a></div></div></footer>
    </main>
  );
}
