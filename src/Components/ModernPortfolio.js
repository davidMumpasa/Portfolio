import React, { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
// Palette
// #0A0C10  bg-void        near-black canvas
// #111318  bg-surface     cards / panels
// #1C2030  bg-elevated    hover / active state
// #D4A853  gold           primary accent (amber-gold — warmth against cold tech)
// #8B9AB5  muted          secondary text / labels
// #E8ECF2  text-primary   headings
// #CBD3E0  text-body      body copy
// #1A3A5C  blue-dim       subtle tint for code-block backgrounds

// Type scale:
// Display  — "Space Grotesk" 700, tracked tight
// Body     — "Inter" 400/500
// Mono     — "JetBrains Mono" 400 (used for skill tags / percentages)

// Signature: an animated vertical "system spine" in the hero — a glowing node
// timeline that runs down the left side, like a real architecture diagram.
// ─────────────────────────────────────────────────────────────────────────────

const GOLD = "#D4A853";
const GOLD_DIM = "#8B6A2E";
const BG_VOID = "#0A0C10";
const BG_SURFACE = "#111318";
const BG_ELEVATED = "#1C2030";
const TEXT_PRIMARY = "#E8ECF2";
const TEXT_BODY = "#CBD3E0";
const MUTED = "#8B9AB5";

// ── Google Fonts injection ───────────────────────────────────────────────────
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{background:${BG_VOID};color:${TEXT_BODY};font-family:'Inter',sans-serif;line-height:1.6;overflow-x:hidden}
    ::selection{background:${GOLD};color:#000}
    ::-webkit-scrollbar{width:4px}
    ::-webkit-scrollbar-track{background:${BG_VOID}}
    ::-webkit-scrollbar-thumb{background:${GOLD_DIM};border-radius:2px}

    .display{font-family:'Space Grotesk',sans-serif}
    .mono{font-family:'JetBrains Mono',monospace}

    /* ── Animations ── */
    @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
    @keyframes slideRight{from{width:0}to{width:var(--w)}}
    @keyframes pulse-dot{0%,100%{box-shadow:0 0 0 0 ${GOLD}55}50%{box-shadow:0 0 0 8px ${GOLD}00}}
    @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

    .fade-up{animation:fadeUp .7s ease both}
    .delay-1{animation-delay:.1s}.delay-2{animation-delay:.2s}.delay-3{animation-delay:.3s}
    .delay-4{animation-delay:.4s}.delay-5{animation-delay:.5s}.delay-6{animation-delay:.6s}

    /* ── Nav ── */
    .nav-link{
      font-family:'Space Grotesk',sans-serif;
      font-size:.85rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;
      color:${MUTED};text-decoration:none;padding:.35rem 0;position:relative;transition:color .25s;
    }
    .nav-link::after{
      content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;
      background:${GOLD};transition:width .3s;
    }
    .nav-link:hover,.nav-link.active{color:${TEXT_PRIMARY}}
    .nav-link:hover::after,.nav-link.active::after{width:100%}

    /* ── Buttons ── */
    .btn-primary{
      display:inline-flex;align-items:center;gap:.6rem;
      font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.9rem;
      letter-spacing:.04em;text-transform:uppercase;
      background:${GOLD};color:#000;border:none;
      padding:.8rem 1.8rem;border-radius:2px;cursor:pointer;
      transition:background .25s,transform .2s;text-decoration:none;
    }
    .btn-primary:hover{background:#E8BB6A;transform:translateY(-2px)}
    .btn-outline{
      display:inline-flex;align-items:center;gap:.6rem;
      font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:.9rem;
      letter-spacing:.04em;text-transform:uppercase;
      background:transparent;color:${TEXT_PRIMARY};
      border:1px solid #2C3344;
      padding:.8rem 1.8rem;border-radius:2px;cursor:pointer;
      transition:border-color .25s,color .25s,transform .2s;text-decoration:none;
    }
    .btn-outline:hover{border-color:${GOLD};color:${GOLD};transform:translateY(-2px)}

    /* ── Section headings ── */
    .section-label{
      font-family:'JetBrains Mono',monospace;
      font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;
      color:${GOLD};margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem;
    }
    .section-label::before{content:'//'}
    .section-title{
      font-family:'Space Grotesk',sans-serif;
      font-size:clamp(2rem,5vw,3.5rem);font-weight:700;
      color:${TEXT_PRIMARY};line-height:1.1;margin-bottom:1rem;
    }

    /* ── Cards ── */
    .card{
      background:${BG_SURFACE};border:1px solid #1E2436;
      border-radius:4px;padding:2rem;
      transition:border-color .3s,transform .3s;
    }
    .card:hover{border-color:${GOLD_DIM};transform:translateY(-3px)}

    /* ── Skill bar ── */
    .skill-bar-track{height:2px;background:#1E2436;border-radius:1px;overflow:hidden}
    .skill-bar-fill{
      height:100%;background:linear-gradient(90deg,${GOLD_DIM},${GOLD});
      border-radius:1px;
      transition:width 1.2s cubic-bezier(.25,.46,.45,.94);
    }

    /* ── Spine dot ── */
    .spine-dot{
      width:10px;height:10px;border-radius:50%;
      background:${GOLD};flex-shrink:0;
      animation:pulse-dot 2.5s infinite;
    }
    .spine-line{width:1px;background:linear-gradient(to bottom,${GOLD_DIM},transparent)}

    /* ── Tag ── */
    .tag{
      font-family:'JetBrains Mono',monospace;
      font-size:.72rem;letter-spacing:.04em;
      border:1px solid #2C3344;border-radius:2px;
      padding:.2rem .55rem;color:${MUTED};
      background:#13161E;display:inline-block;
    }

    /* ── Mobile nav overlay ── */
    .mobile-nav{
      position:fixed;inset:0;background:${BG_VOID};
      z-index:200;display:flex;flex-direction:column;
      justify-content:center;align-items:center;gap:2.5rem;
    }
    .mobile-nav a{
      font-family:'Space Grotesk',sans-serif;font-size:2rem;font-weight:700;
      color:${TEXT_PRIMARY};text-decoration:none;letter-spacing:.04em;
    }
    .mobile-nav a:hover{color:${GOLD}}

    /* ── Divider ── */
    .divider{height:1px;background:linear-gradient(90deg,${GOLD_DIM}44,transparent)}

    /* ── Grid helpers ── */
    @media(max-width:768px){
      .hide-mobile{display:none!important}
      .grid-2{grid-template-columns:1fr!important}
      .grid-3{grid-template-columns:1fr!important}
      .hero-grid{grid-template-columns:1fr!important}
    }
  `}</style>
);

// ── Intersection Observer hook ───────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── NAVIGATION ───────────────────────────────────────────────────────────────
function Nav({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["about", "experience", "skills", "projects", "contact"];
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: scrolled
            ? "1px solid #1E2436"
            : "1px solid transparent",
          background: scrolled ? `${BG_VOID}F0` : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          transition: "all .3s",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="display"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            color: TEXT_PRIMARY,
            letterSpacing: ".03em",
          }}
        >
          D.<span style={{ color: GOLD }}>Ebula</span>
        </div>
        <ul
          className="hide-mobile"
          style={{ display: "flex", gap: "2.2rem", listStyle: "none" }}
        >
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => go(l)}
                className={`nav-link ${active === l ? "active" : ""}`}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => go("contact")}
          className="btn-primary hide-mobile"
          style={{ padding: ".55rem 1.2rem", fontSize: ".8rem" }}
        >
          Hire Me
        </button>
        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: TEXT_PRIMARY,
            fontSize: "1.4rem",
            display: "none",
          }}
          className="show-mobile"
        >
          ☰
        </button>
      </nav>
      {open && (
        <div className="mobile-nav">
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
              background: "none",
              border: "none",
              color: MUTED,
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          {links.map((l) => (
            <a key={l} onClick={() => go(l)}>
              {l}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Animated typing effect for roles
  const roles = [
    "Software Developer",
    "AI Engineer",
    "Systems Integrator",
    "Technical Lead",
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let timer;
    if (typing) {
      if (displayed.length < target.length) {
        timer = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          60
        );
      } else {
        timer = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((roleIdx + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIdx]);

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "5+", label: "APIs Integrated" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 2rem 4rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <div style={{ width: "100%" }}>
        {/* System spine — signature element */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: ".4rem",
            }}
          >
            <div className="spine-dot" />
            <div className="spine-line" style={{ height: 60 }} />
          </div>
          <div>
            <p className="mono" style={{ fontSize: ".8rem", color: MUTED }}>
              Pretoria, South Africa · Francophone · Open to remote
            </p>
          </div>
        </div>

        {/* Name block */}
        <div className="fade-up delay-1" style={{ marginBottom: "1.5rem" }}>
          <h1
            className="display"
            style={{
              fontSize: "clamp(3rem,10vw,7rem)",
              fontWeight: 700,
              lineHeight: 1,
              color: TEXT_PRIMARY,
              letterSpacing: "-.02em",
              marginBottom: ".5rem",
            }}
          >
            David
            <br />
            <span style={{ color: GOLD }}>Ebula</span>
          </h1>
        </div>

        {/* Typed role */}
        <div
          className="fade-up delay-2"
          style={{
            marginBottom: "2rem",
            minHeight: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <span
            className="mono"
            style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", color: MUTED }}
          >
            $&gt;
          </span>
          <span
            className="mono"
            style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", color: GOLD }}
          >
            {displayed}
            <span
              style={{ animation: "blink 1s step-end infinite", color: GOLD }}
            >
              _
            </span>
          </span>
        </div>

        {/* Bio */}
        <p
          className="fade-up delay-3"
          style={{
            fontSize: "1.05rem",
            color: TEXT_BODY,
            maxWidth: 580,
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}
        >
          Bilingual engineer (English & French) with 3+ years architecting
          RESTful backends, integrating multi-system APIs, and building
          AI-powered platforms. Currently pursuing a BSc Honours in Computer
          Science at TUT, specialising in ML and intelligent systems.
        </p>

        {/* CTA row */}
        <div
          className="fade-up delay-4"
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          <button onClick={() => go("projects")} className="btn-primary">
            View Projects →
          </button>
          <a href="mailto:davidebula642@gmail.com" className="btn-outline">
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="fade-up delay-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1.5rem",
            maxWidth: 480,
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="display"
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: TEXT_PRIMARY,
                  marginBottom: ".2rem",
                }}
              >
                {s.value}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: ".75rem",
                  color: MUTED,
                  letterSpacing: ".06em",
                }}
              >
                {s.label}
              </div>
              <div className="divider" style={{ marginTop: ".5rem" }} />
            </div>
          ))}
        </div>

        {/* Social strip */}
        <div
          className="fade-up delay-6"
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "3rem",
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com/davidMumpasa"
            target="_blank"
            rel="noreferrer"
            style={{
              color: MUTED,
              textDecoration: "none",
              fontSize: ".85rem",
              fontFamily: "'JetBrains Mono',monospace",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = GOLD)}
            onMouseLeave={(e) => (e.target.style.color = MUTED)}
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/david-ebula-10b1b2231"
            target="_blank"
            rel="noreferrer"
            style={{
              color: MUTED,
              textDecoration: "none",
              fontSize: ".85rem",
              fontFamily: "'JetBrains Mono',monospace",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = GOLD)}
            onMouseLeave={(e) => (e.target.style.color = MUTED)}
          >
            LinkedIn ↗
          </a>
          <a
            href="tel:+27678192979"
            style={{
              color: MUTED,
              textDecoration: "none",
              fontSize: ".85rem",
              fontFamily: "'JetBrains Mono',monospace",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = GOLD)}
            onMouseLeave={(e) => (e.target.style.color = MUTED)}
          >
            +27 67 819 2979
          </a>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  const [ref, inView] = useInView();
  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <div className="section-label">About</div>
      <div className="section-title">Who I Am</div>
      <div className="divider" style={{ marginBottom: "3rem" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "4rem",
        }}
        className="grid-2 hero-grid"
      >
        <div>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT_BODY,
              marginBottom: "1.5rem",
            }}
          >
            I'm a bilingual software engineer who bridges the gap between
            backend architecture, AI integration, and practical business
            outcomes. Having worked in both startup and mid-market environments,
            I understand how to ship fast without cutting corners on quality.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: TEXT_BODY,
              marginBottom: "2rem",
            }}
          >
            My focus areas include designing RESTful APIs, integrating
            multi-source data pipelines, building generative AI platforms, and
            mentoring junior developers. I hold a passion for systems that are
            not just functional — but maintainable and elegant.
          </p>
          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
            {[
              "English (Fluent)",
              "French (Native)",
              "Cisco CCNA (Intro)",
              "BSc Honours — In Progress",
            ].map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Education timeline */}
        <div>
          <h3
            className="display"
            style={{
              fontWeight: 600,
              fontSize: "1.1rem",
              color: TEXT_PRIMARY,
              marginBottom: "1.5rem",
              letterSpacing: ".02em",
            }}
          >
            Education
          </h3>
          {[
            {
              year: "2026–Now",
              degree: "BSc Honours — Computer Science",
              note: "Machine Learning · Intelligent Agents · Cloud Computing · Ontology Engineering",
            },
            {
              year: "2025",
              degree: "Advanced Diploma — Computer Science",
              note: "",
            },
            { year: "2023", degree: "Diploma — Computer Science", note: "" },
          ].map((e, i) => (
            <div
              key={i}
              style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    border: `1px solid ${GOLD}`,
                    background: i === 0 ? GOLD : "transparent",
                    flexShrink: 0,
                    marginTop: 4,
                  }}
                />
                {i < 2 && (
                  <div
                    style={{
                      width: 1,
                      height: "100%",
                      background: "#2C3344",
                      flexGrow: 1,
                      marginTop: 4,
                    }}
                  />
                )}
              </div>
              <div style={{ paddingBottom: "1rem" }}>
                <div
                  className="mono"
                  style={{
                    fontSize: ".72rem",
                    color: GOLD,
                    marginBottom: ".2rem",
                  }}
                >
                  {e.year}
                </div>
                <div
                  className="display"
                  style={{
                    fontWeight: 600,
                    color: TEXT_PRIMARY,
                    fontSize: ".95rem",
                    marginBottom: ".3rem",
                  }}
                >
                  Tshwane University of Technology
                </div>
                <div style={{ color: TEXT_BODY, fontSize: ".9rem" }}>
                  {e.degree}
                </div>
                {e.note && (
                  <div
                    style={{
                      color: MUTED,
                      fontSize: ".8rem",
                      marginTop: ".3rem",
                    }}
                  >
                    {e.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── EXPERIENCE ───────────────────────────────────────────────────────────────
function Experience() {
  const jobs = [
    {
      company: "Fluid Intellect",
      role: "Software Developer — AI & Systems",
      period: "Jan 2023 – Present",
      points: [
        "Architected RESTful backend services using C#/.NET and Java, powering AI-driven reporting pipelines across multiple business units.",
        "Designed a suite of cross-system APIs integrating 5+ data sources, reducing manual reconciliation effort and improving data reliability.",
        "Engineered MS SQL Server databases with complex stored procedures and indexing — achieving ~35% faster query performance on key reports.",
        "Led development of Satori, an in-house generative AI platform (Flask / Python / MySQL) enabling natural-language querying of structured & unstructured data.",
        "Deployed on AWS (EC2, S3), containerised services with Docker, managed CI pipelines via Jenkins.",
        "Conducted peer code reviews, enforced Git branching standards, and mentored junior developers on API design best practices.",
      ],
      stack: [
        "C# .NET",
        "Java",
        "Python / Flask",
        "MySQL",
        "MS SQL",
        "AWS",
        "Docker",
        "Jenkins",
        "React.js",
      ],
    },
    {
      company: "XGile-IT",
      role: "Software Developer",
      period: "Jun 2022 – Dec 2022",
      points: [
        "Built and maintained scalable backend services and REST APIs supporting high-volume transactional and reporting systems for financial-sector clients.",
        "Integrated Java and .NET backend services with React.js frontends, enabling seamless end-to-end data flow.",
        "Contributed architectural input to full-stack solutions, focused on clean code, maintainability, and SOLID design principles.",
      ],
      stack: ["Java", ".NET", "React.js", "REST APIs", "SQL"],
    },
  ];

  return (
    <section
      id="experience"
      style={{ padding: "6rem 2rem", background: BG_SURFACE }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-label">Experience</div>
        <div className="section-title">Where I've Built</div>
        <div className="divider" style={{ marginBottom: "3rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {jobs.map((job, i) => (
            <div
              key={i}
              className="card"
              style={{ borderLeft: `3px solid ${i === 0 ? GOLD : "#2C3344"}` }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: ".5rem",
                  marginBottom: "1.2rem",
                }}
              >
                <div>
                  <div
                    className="display"
                    style={{
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: TEXT_PRIMARY,
                    }}
                  >
                    {job.company}
                  </div>
                  <div
                    style={{
                      color: GOLD,
                      fontSize: ".9rem",
                      marginTop: ".2rem",
                    }}
                  >
                    {job.role}
                  </div>
                </div>
                <div
                  className="mono"
                  style={{
                    fontSize: ".75rem",
                    color: MUTED,
                    background: "#0A0C10",
                    padding: ".3rem .7rem",
                    borderRadius: 2,
                    border: "1px solid #1E2436",
                    whiteSpace: "nowrap",
                  }}
                >
                  {job.period}
                </div>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".6rem",
                  marginBottom: "1.5rem",
                }}
              >
                {job.points.map((p, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: ".75rem",
                      color: TEXT_BODY,
                      fontSize: ".93rem",
                      lineHeight: 1.65,
                    }}
                  >
                    <span
                      style={{ color: GOLD, flexShrink: 0, marginTop: ".1rem" }}
                    >
                      ›
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                {job.stack.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SKILLS ───────────────────────────────────────────────────────────────────
function Skills() {
  const [ref, inView] = useInView();

  const groups = [
    {
      label: "Languages",
      items: [
        { name: "Java", pct: 90 },
        { name: "Python", pct: 85 },
        { name: "C# / .NET", pct: 80 },
        { name: "JavaScript", pct: 85 },
        { name: "SQL", pct: 88 },
      ],
    },
    {
      label: "Frontend",
      items: [
        { name: "React.js", pct: 88 },
        { name: "Angular", pct: 80 },
        { name: "React Native", pct: 78 },
      ],
    },
    {
      label: "Backend & APIs",
      items: [
        { name: "ASP.NET Core Web API", pct: 85 },
        { name: "Java REST APIs", pct: 87 },
        { name: "Flask / Python", pct: 88 },
        { name: "JWT / OAuth", pct: 82 },
        { name: "Spring Boot", pct: 80 },
      ],
    },
    {
      label: "Data & DevOps",
      items: [
        { name: "MS SQL Server", pct: 88 },
        { name: "MySQL", pct: 85 },
        { name: "Docker", pct: 78 },
        { name: "AWS (EC2, S3)", pct: 75 },
        { name: "Jenkins / CI", pct: 74 },
        { name: "Git", pct: 92 },
      ],
    },
    {
      label: "AI & ML",
      items: [
        { name: "LangChain", pct: 82 },
        { name: "OpenAI API", pct: 85 },
        { name: "NLP Pipelines", pct: 80 },
        { name: "Machine Learning", pct: 74 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <div className="section-label">Skills</div>
      <div className="section-title">Technical Toolkit</div>
      <div className="divider" style={{ marginBottom: "3rem" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "2rem",
        }}
        className="grid-2"
      >
        {groups.map((g, gi) => (
          <div
            key={gi}
            className="card"
            style={
              gi === groups.length - 1 && groups.length % 2 !== 0
                ? { gridColumn: "1/-1" }
                : {}
            }
          >
            <h3
              className="display"
              style={{
                fontWeight: 600,
                fontSize: "1rem",
                color: GOLD,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              {g.label}
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {g.items.map((item, ii) => (
                <div key={ii}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: ".35rem",
                    }}
                  >
                    <span style={{ color: TEXT_BODY, fontSize: ".9rem" }}>
                      {item.name}
                    </span>
                    <span
                      className="mono"
                      style={{ fontSize: ".78rem", color: MUTED }}
                    >
                      {inView ? item.pct : 0}%
                    </span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        "--w": `${item.pct}%`,
                        width: inView ? `${item.pct}%` : 0,
                        transitionDelay: `${ii * 0.08}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      name: "Satori — Generative AI Platform",
      type: "Professional · AI Engineering",
      description:
        "In-house AI analyst chatbot enabling business users to query databases and documents via natural language. Built SSE streaming pipeline, JWT auth, chart generation, and multi-source file upload.",
      stack: ["Python", "Flask", "LangChain", "OpenAI", "MySQL", "REST APIs"],
      highlight: true,
      github: null,
    },
    {
      name: "CMS Health Benefits Bridge",
      type: "Professional · Full-Stack",
      description:
        "Web portal for South Africa's largest medical scheme regulator. Structured benefit data entry, role-based workflows, and an email-driven approval system.",
      stack: ["Python", "Flask", "React.js", "MySQL"],
      github: null,
    },
    {
      name: "Assistable — Service Marketplace",
      type: "Professional · Full-Stack",
      description:
        "Full-stack marketplace for service discovery, bookings, payments, and real-time in-app communication with role-based access and push notifications.",
      stack: [
        "Java",
        "C# .NET",
        "React Native",
        "Node.js",
        "SQL Server",
        "JWT",
      ],
      github: null,
    },
    {
      name: "Canteen Management System",
      type: "Full-Stack",
      description:
        "Digital food-ordering and inventory platform for schools and offices with real-time order updates, role-based access, and admin analytics dashboards.",
      stack: ["Node.js", "React.js", "React Native", "MySQL", "REST APIs"],
      github: null,
    },
    {
      name: "Flight Reservation System",
      type: "Backend · Java",
      description:
        "Complete flight booking platform with real-time seat selection and payment integration.",
      stack: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/davidMumpasa/FlightReservation.git",
    },
    {
      name: "Hospital Management System",
      type: "Full-Stack",
      description:
        "Comprehensive healthcare platform covering patient records, appointment scheduling, and medical history.",
      stack: ["Java EE", "JSF", "Oracle DB"],
      github: "https://github.com/davidMumpasa/HospitalManagementSystem.git",
    },
    {
      name: "Faculty Management System",
      type: "Full-Stack",
      description:
        "Academic administration platform for course management, student tracking, and grade management.",
      stack: ["Angular", "Spring Boot", "MySQL"],
      github: "https://github.com/davidMumpasa/FacultyManagementSystem.git",
    },
    {
      name: "Task Management System",
      type: "Full-Stack",
      description:
        "Project management solution with team collaboration, real-time updates, and progress tracking.",
      stack: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/davidMumpasa/TaskManagementSystem.git",
    },
  ];

  return (
    <section
      id="projects"
      style={{ padding: "6rem 2rem", background: BG_SURFACE }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-label">Projects</div>
        <div className="section-title">Selected Work</div>
        <div className="divider" style={{ marginBottom: "3rem" }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "1.5rem",
          }}
          className="grid-2"
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="card"
              style={{
                position: "relative",
                borderLeft: p.highlight
                  ? `3px solid ${GOLD}`
                  : "1px solid #1E2436",
                gridColumn: p.highlight ? "1/-1" : undefined,
              }}
            >
              {p.highlight && (
                <div
                  className="mono"
                  style={{
                    fontSize: ".7rem",
                    color: GOLD,
                    background: `${GOLD}18`,
                    border: `1px solid ${GOLD_DIM}`,
                    padding: ".2rem .6rem",
                    borderRadius: 2,
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                  }}
                >
                  Featured
                </div>
              )}
              <div
                className="mono"
                style={{
                  fontSize: ".72rem",
                  color: MUTED,
                  marginBottom: ".4rem",
                }}
              >
                {p.type}
              </div>
              <h3
                className="display"
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: TEXT_PRIMARY,
                  marginBottom: ".75rem",
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  color: TEXT_BODY,
                  fontSize: ".9rem",
                  lineHeight: 1.7,
                  marginBottom: "1.2rem",
                }}
              >
                {p.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: ".4rem",
                  marginBottom: p.github ? "1.2rem" : 0,
                }}
              >
                {p.stack.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: ".4rem",
                    color: GOLD,
                    textDecoration: "none",
                    fontSize: ".85rem",
                    fontFamily: "'JetBrains Mono',monospace",
                    transition: "opacity .2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = ".7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  ↗ View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://getform.io/f/bd80a706-259c-40eb-9292-e28f5c5ac7f0", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <section
      id="contact"
      style={{ padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <div className="section-label">Contact</div>
      <div className="section-title">Let's Work Together</div>
      <div className="divider" style={{ marginBottom: "3rem" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "4rem",
        }}
        className="grid-2"
      >
        {/* Left */}
        <div>
          <p
            style={{
              color: TEXT_BODY,
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              fontSize: "1.05rem",
            }}
          >
            I'm open to new opportunities — whether it's a full-time role,
            contract work, or a collaboration on something interesting in AI and
            systems engineering.
          </p>
          {[
            {
              icon: "✉",
              label: "Email",
              value: "davidebula642@gmail.com",
              href: "mailto:davidebula642@gmail.com",
            },
            {
              icon: "☎",
              label: "Phone",
              value: "+27 67 819 2979",
              href: "tel:+27678192979",
            },
            {
              icon: "in",
              label: "LinkedIn",
              value: "david-ebula-10b1b2231",
              href: "https://www.linkedin.com/in/david-ebula-10b1b2231",
            },
            {
              icon: "</>",
              label: "GitHub",
              value: "davidMumpasa",
              href: "https://github.com/davidMumpasa",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                marginBottom: "1.4rem",
                textDecoration: "none",
                color: "inherit",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.querySelector("span[data-val]").style.color =
                  GOLD)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.querySelector("span[data-val]").style.color =
                  TEXT_BODY)
              }
            >
              <div
                className="mono"
                style={{
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid #2C3344`,
                  color: GOLD,
                  fontSize: ".75rem",
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: ".72rem",
                    color: MUTED,
                    marginBottom: ".1rem",
                  }}
                >
                  {c.label}
                </div>
                <span
                  data-val
                  style={{
                    color: TEXT_BODY,
                    fontSize: ".9rem",
                    transition: "color .2s",
                  }}
                >
                  {c.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="card">
          {sent ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
              <div
                className="display"
                style={{
                  fontWeight: 700,
                  color: TEXT_PRIMARY,
                  fontSize: "1.2rem",
                  marginBottom: ".5rem",
                }}
              >
                Message sent.
              </div>
              <div style={{ color: MUTED }}>I'll get back to you shortly.</div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
              }}
            >
              {[
                {
                  field: "name",
                  label: "Full Name",
                  type: "text",
                  placeholder: "Your name",
                },
                {
                  field: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "you@example.com",
                },
              ].map((f) => (
                <div key={f.field}>
                  <label
                    className="mono"
                    style={{
                      fontSize: ".72rem",
                      color: MUTED,
                      display: "block",
                      marginBottom: ".4rem",
                      letterSpacing: ".06em",
                    }}
                  >
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    value={form[f.field]}
                    onChange={(e) =>
                      setForm({ ...form, [f.field]: e.target.value })
                    }
                    style={{
                      width: "100%",
                      background: BG_VOID,
                      border: "1px solid #2C3344",
                      borderRadius: 2,
                      padding: ".7rem 1rem",
                      color: TEXT_PRIMARY,
                      fontFamily: "Inter, sans-serif",
                      fontSize: ".95rem",
                      outline: "none",
                      transition: "border-color .2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = GOLD)}
                    onBlur={(e) => (e.target.style.borderColor = "#2C3344")}
                  />
                </div>
              ))}
              <div>
                <label
                  className="mono"
                  style={{
                    fontSize: ".72rem",
                    color: MUTED,
                    display: "block",
                    marginBottom: ".4rem",
                    letterSpacing: ".06em",
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project or opportunity…"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={{
                    width: "100%",
                    background: BG_VOID,
                    border: "1px solid #2C3344",
                    borderRadius: 2,
                    padding: ".7rem 1rem",
                    color: TEXT_PRIMARY,
                    fontFamily: "Inter, sans-serif",
                    fontSize: ".95rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color .2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = GOLD)}
                  onBlur={(e) => (e.target.style.borderColor = "#2C3344")}
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1E2436",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div className="mono" style={{ fontSize: ".78rem", color: MUTED }}>
        © 2025 David Ebula &nbsp;·&nbsp; Built with React &nbsp;·&nbsp;
        <span style={{ color: GOLD }}> Available for opportunities</span>
      </div>
    </footer>
  );
}

// ── ROOT ─────────────────────────────────────────────────────────────────────
export default function ModernPortfolio() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "experience",
      "skills",
      "projects",
      "contact",
    ];
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <FontLink />
      <Nav active={active} />
      <main>
        <Hero />
        <div style={{ background: BG_SURFACE }}>
          <About />
        </div>
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
