import React from "react";
import {
  FadeUp as FU,
  AnimatedCounter as AC,
  SectionTitle as ST,
  GoldRule as GR,
  Link as Lnk,
} from "../components/shared";

const SVCS = [
  {
    icon: "⬡",
    t: "Redevelopment Planning",
    d: "Feasibility studies, TDR/FSI analysis, corpus projections & complete project blueprinting.",
  },
  {
    icon: "⬡",
    t: "PMC Services",
    d: "End-to-end Project Management Consultancy from inception to final possession.",
  },
  {
    icon: "⬡",
    t: "Agreement Guidance",
    d: "Expert review of DA, development agreements, and all legal documentation.",
  },
  {
    icon: "⬡",
    t: "Society Representation",
    d: "Strong member-first representation in all builder negotiations.",
  },
  {
    icon: "⬡",
    t: "Risk Management",
    d: "Proactive identification and mitigation of financial, legal & construction risks.",
  },
  {
    icon: "⬡",
    t: "Legal & Technical Support",
    d: "Complete due diligence: title search, RERA compliance, structural surveys.",
  },
];

const STEPS = [
  {
    n: "01",
    t: "Society Consultation",
    d: "Understanding your society's needs, concerns & aspirations.",
  },
  {
    n: "02",
    t: "Feasibility Study",
    d: "Technical & financial viability analysis for the project.",
  },
  {
    n: "03",
    t: "Builder Shortlisting",
    d: "Rigorous evaluation of builder credentials & track record.",
  },
  {
    n: "04",
    t: "Legal Verification",
    d: "Thorough review of all agreements, titles, and compliance.",
  },
];

const TESTS = [
  {
    name: "Rajesh Sharma",
    role: "Chairman, Shiv Sai CHS, Mira Bhayander",
    text: "BABA Properties guided our 120-member society flawlessly. Their expertise saved us from a bad builder deal and secured 28% extra area for all members. Truly transformational.",
  },
  {
    name: "Priya Mehta",
    role: "Secretary, Sunrise Cooperative Society, Thane",
    text: "Their commitment is unmatched — available round the clock during critical negotiations. Our society secured premium terms because of their relentless guidance.",
  },
  {
    name: "Vikram Patel",
    role: "Committee Member, Sai Heights CHS, Mumbai",
    text: "Redevelopment felt impossible until BABA Properties stepped in. They simplified every step and fought for our rights at every stage. Highly recommended.",
  },
];

const HomePage = () => (
  <div className="page-enter">
    {/* ── HERO ──────────────────────────────────────────────────────────── */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg,#0B0B0B 0%,#160C05 50%,#0B0B0B 100%)",
        }}
      />
      <div className="absolute inset-0 hero-pattern" />
      <div className="gold-ray" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 60% 50%,transparent 25%,rgba(11,11,11,0.85) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 lg:px-10 w-full pt-20 pb-16">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          style={{ minHeight: "calc(100vh - 80px)" }}
        >
          {/* Left */}
          <div className="lg:col-span-7 py-12 lg:py-0">
            <FU>
              <p className="section-label mb-5 flex items-center gap-3">
                <span
                  style={{
                    display: "inline-block",
                    width: 32,
                    height: 1,
                    background: "#C89B3C",
                  }}
                />
                Redevelopment & PMC Consultancy
              </p>
            </FU>
            <FU delay={90}>
              <h1
                className="font-cinzel font-black text-white leading-[1.15] mb-5"
                style={{
                  fontSize: "clamp(2.1rem,4.8vw,4.2rem)",
                  textShadow: "0 2px 40px rgba(0,0,0,0.6)",
                }}
              >
                Redevelopment Ka
                <br />
                Decision{" "}
                <span
                  className="text-gold"
                  style={{ textShadow: "0 0 40px rgba(200,155,60,0.28)" }}
                >
                  Jaldi Nahi,
                </span>
                <br />
                Sahi Lein.
              </h1>
            </FU>
            <FU delay={160}>
              <GR className="mb-6" />
            </FU>
            <FU delay={200}>
              <p className="font-inter text-base text-white/70 leading-relaxed mb-10 max-w-xl">
                Expert redevelopment &amp; PMC guidance for housing societies
                across Mumbai, Mira Bhayander, Thane &amp; Palghar. Your future
                deserves the right partner.
              </p>
            </FU>
            <FU delay={280}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Lnk to="/contact" className="btn-gold">
                  Get Free Consultation
                </Lnk>
                <a
                  href="https://wa.me/919769423830?text=Hello%20BABA%20Properties!%20I%20want%20a%20free%20redevelopment%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </FU>
            <FU delay={360}>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["50+", "Society Consultations"],
                  ["100%", "End-to-End Support"],
                  ["4 Cities", "Service Coverage"],
                ].map(([v, l], i) => (
                  <div key={i} className="glass-card p-4">
                    <div className="font-cinzel text-xl font-black text-gold mb-1">
                      {v}
                    </div>
                    <div className="font-inter text-[10px] text-white/68 leading-tight">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </FU>
          </div>

          {/* Right – founder placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <FU delay={180} className="relative w-full max-w-[320px]">
              <div
                style={{
                  position: "absolute",
                  inset: -16,
                  border: "1px solid rgba(200,155,60,0.07)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -28,
                  border: "1px solid rgba(200,155,60,0.035)",
                }}
              />
              <div
                className="relative overflow-hidden"
                style={{
                  paddingTop: "130%",
                  background: "linear-gradient(160deg,#1B1008,#0E0A06)",
                }}
              >
                {/* bg silhouette */}
                <div
                  className="absolute inset-0 flex items-end justify-center"
                  style={{ opacity: 0.07 }}
                >
                  <svg viewBox="0 0 300 220" width="100%">
                    <rect
                      x="90"
                      y="50"
                      width="120"
                      height="170"
                      fill="#C89B3C"
                    />
                    <rect
                      x="110"
                      y="10"
                      width="80"
                      height="50"
                      fill="#C89B3C"
                    />
                    <rect
                      x="20"
                      y="110"
                      width="55"
                      height="110"
                      fill="#C89B3C"
                    />
                    <rect
                      x="225"
                      y="90"
                      width="55"
                      height="130"
                      fill="#C89B3C"
                    />
                    <rect
                      x="130"
                      y="170"
                      width="40"
                      height="50"
                      fill="#0E0A06"
                    />
                  </svg>
                </div>
                {/* Portrait */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: "50%",
                      border: "2px solid rgba(200,155,60,0.3)",
                      background: "rgba(200,155,60,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                      overflow: "hidden"
                    }}
                  >
                    <img 
                      src="/uploads/file (1).enc" 
                      alt="Virendra Vishwakarma" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="font-cinzel text-3xl font-black text-gold" style={{ display: 'none' }}>
                      DV
                    </span>
                  </div>
                  <p className="font-cinzel text-base text-white/95 tracking-wider">
                    Virendra Vishwakarma
                  </p>
                  <p className="font-inter text-[11px] text-gold/75 mt-1 tracking-widest uppercase">
                    Founder & Consultant
                  </p>
                </div>
                {/* Corner marks */}
                {[
                  [5, 5, "borderTop borderLeft"],
                  [5, "auto", "borderTop borderRight"],
                  ["auto", 5, "borderBottom borderLeft"],
                  ["auto", "auto", "borderBottom borderRight"],
                ].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: 20,
                      height: 20,
                      top: i < 2 ? 16 : "auto",
                      bottom: i >= 2 ? 16 : "auto",
                      left: i % 2 === 0 ? 16 : "auto",
                      right: i % 2 === 1 ? 16 : "auto",
                      borderTop:
                        i < 2 ? "1px solid rgba(200,155,60,0.5)" : undefined,
                      borderBottom:
                        i >= 2 ? "1px solid rgba(200,155,60,0.5)" : undefined,
                      borderLeft:
                        i % 2 === 0
                          ? "1px solid rgba(200,155,60,0.5)"
                          : undefined,
                      borderRight:
                        i % 2 === 1
                          ? "1px solid rgba(200,155,60,0.5)"
                          : undefined,
                    }}
                  />
                ))}
              </div>
              {/* Floating badges */}
              <div className="glass-card animate-float absolute -top-4 -right-4 px-3 py-2 border border border-[rgba(200,155,60,0.2)]">
                <div className="font-cinzel text-[10px] text-gold tracking-widest">
                  Expert Guidance
                </div>
                <div className="font-inter text-[9px] text-white/62">
                  Better Decisions
                </div>
              </div>
              <div className="glass-card absolute -bottom-4 -left-4 px-3 py-2 border border border-[rgba(200,155,60,0.14)]">
                <div className="font-inter text-[9px] text-white/70 tracking-wide">
                  Trusted by
                </div>
                <div className="font-cinzel text-sm font-bold text-white">
                  50+ Societies
                </div>
              </div>
            </FU>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        style={{ opacity: 0.5 }}
      >
        <p className="font-inter text-[9px] text-white/60 tracking-widest uppercase">
          Scroll
        </p>
        <div
          style={{
            width: 1,
            height: 36,
            background:
              "linear-gradient(180deg,rgba(200,155,60,0.5),transparent)",
          }}
        />
      </div>
    </section>

    {/* ── STATS BAND ──────────────────────────────────────────────────── */}
    <section
      className="py-14 border-y border-[rgba(200,155,60,0.1)]"
      style={{ background: "#0D0A07" }}
    >
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:divide-x divide-[rgba(200,155,60,0.14)]">
          {[
            ["50", "+", "Society Consultations"],
            ["15", "+", "Years Experience"],
            ["100", "%", "Client Satisfaction"],
            ["4", "", "Cities Covered"],
          ].map(([v, s, l], i) => (
            <FU key={i} delay={i * 70} className="text-center lg:px-8 py-3">
              <div className="font-cinzel text-4xl font-black text-gold mb-2">
                <AC target={parseInt(v)} suffix={s} />{" "}
              </div>
              <p className="font-inter text-[10px] text-white/68 uppercase tracking-wider">
                {l}
              </p>
            </FU>
          ))}
        </div>
      </div>
    </section>

    {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <ST
          label="Why BABA Properties"
          title="Your Society Deserves Better"
          subtitle="Redevelopment is the most critical decision your society will ever make. We ensure it is made right — with full transparency and expert guidance."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              t: "Unbiased Guidance",
              d: "We represent your society — not the builder. Pure consultancy, zero conflicts of interest.",
            },
            {
              t: "Legal Expertise",
              d: "Deep knowledge of Maharashtra redevelopment laws, RERA, and cooperative society regulations.",
            },
            {
              t: "Builder Evaluation",
              d: "Rigorous evaluation of builders' track record, financial health, and delivery history.",
            },
            {
              t: "Complete Support",
              d: "From initial consultation to final possession — we stand with you at every single step.",
            },
          ].map((w, i) => (
            <FU key={i} delay={i * 70}>
              <div className="premium-card p-7 h-full group">
                <div className="w-10 h-10 border border-[rgba(200,155,60,0.25)] flex items-center justify-center text-gold font-cinzel font-bold text-sm mb-5 group-hover:bg-[rgba(200,155,60,0.08)] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-cinzel text-base font-semibold text-white mb-3">
                  {w.t}
                </h3>
                <p className="font-inter text-sm text-white/72 leading-relaxed">
                  {w.d}
                </p>
              </div>
            </FU>
          ))}
        </div>
      </div>
    </section>

    {/* ── SERVICES OVERVIEW ──────────────────────────────────────────── */}
    <section className="section-pad" style={{ background: "#0D0A07" }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <ST
          label="Our Services"
          title="Complete Redevelopment Support"
          subtitle="From initial feasibility to final possession — expert guidance at every stage."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SVCS.map((s, i) => (
            <FU key={i} delay={i * 60}>
              <div className="premium-card p-7 flex items-start gap-5 group">
                <div className="w-10 h-10 border border-[rgba(200,155,60,0.22)] flex items-center justify-center flex-shrink-0 text-gold text-lg group-hover:bg-[rgba(200,155,60,0.08)] transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-cinzel text-sm font-semibold text-white mb-2">
                    {s.t}
                  </h3>
                  <p className="font-inter text-sm text-white/70 leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </div>
            </FU>
          ))}
        </div>
        <FU className="text-center">
          <Lnk to="/services" className="btn-gold">
            Explore All Services
          </Lnk>
        </FU>
      </div>
    </section>

    {/* ── PROCESS OVERVIEW ───────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <ST
          label="How We Work"
          title="A Proven Redevelopment Process"
          subtitle="Every step is carefully managed to protect your society's interests from start to finish."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {STEPS.map((s, i) => (
            <FU key={i} delay={i * 80}>
              <div className="premium-card p-7 h-full relative">
                <div
                  className="font-cinzel text-5xl font-black mb-3"
                  style={{ color: "rgba(200,155,60,0.1)" }}
                >
                  {s.n}
                </div>
                <h3 className="font-cinzel text-sm font-semibold text-white mb-3">
                  {s.t}
                </h3>
                <p className="font-inter text-sm text-white/70 leading-relaxed">
                  {s.d}
                </p>
                {i < 3 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-2.5 w-5"
                    style={{ height: 1, background: "rgba(200,155,60,0.3)" }}
                  />
                )}
              </div>
            </FU>
          ))}
        </div>
        <FU className="text-center">
          <Lnk to="/process" className="btn-ghost">
            View Full Process (9 Steps)
          </Lnk>
        </FU>
      </div>
    </section>

    {/* ── 5 CHECKS ───────────────────────────────────────────────────── */}
    <section className="section-pad" style={{ background: "#0D0A07" }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <ST
          label="Decision Se Pehle"
          title="5 Cheezein Zaroor Check Karein"
          subtitle="Every society must verify these five critical factors before starting redevelopment."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            [
              "01",
              "Project Viability",
              "Is redevelopment financially viable for your specific plot and society?",
            ],
            [
              "02",
              "Agreement Terms",
              "Are the builder's terms fair, transparent, and legally sound?",
            ],
            [
              "03",
              "Financial Benefits",
              "What corpus, transit rent, and area increase will members receive?",
            ],
            [
              "04",
              "Builder Credibility",
              "What is the builder's track record, RERA rating, and delivery history?",
            ],
            [
              "05",
              "Society Consensus",
              "Is there proper member consent and documentation in place?",
            ],
          ].map(([n, t, d], i) => (
            <FU key={i} delay={i * 60}>
              <div className="premium-card p-6 text-center group">
                <div
                  className="font-cinzel text-4xl font-black mb-3 group-hover:text-gold transition-colors duration-300"
                  style={{ color: "rgba(200,155,60,0.12)" }}
                >
                  {n}
                </div>
                <h3 className="font-cinzel text-xs font-bold text-gold tracking-wider mb-3">
                  {t}
                </h3>
                <p className="font-inter text-xs text-white/65 leading-relaxed">
                  {d}
                </p>
              </div>
            </FU>
          ))}
        </div>
      </div>
    </section>

    {/* ── TESTIMONIALS ───────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <ST
          label="Testimonials"
          title="What Society Members Say"
          subtitle="The trust of hundreds of families across Mumbai is our greatest achievement."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {TESTS.map((t, i) => (
            <FU key={i} delay={i * 90}>
              <div className="glass-card p-8 border border-[rgba(200,155,60,0.1)] hover:border-[rgba(200,155,60,0.28)] transition-colors duration-300 h-full flex flex-col">
                <div
                  className="font-cinzel text-5xl text-gold leading-none mb-4"
                  style={{ opacity: 0.35 }}
                >
                  "
                </div>
                <p className="font-inter text-sm text-white/70 leading-relaxed flex-1 mb-6 italic">
                  {t.text}
                </p>
                <div
                  className="pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="font-inter font-semibold text-sm text-white/95">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs text-gold/80 mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </FU>
          ))}
        </div>
        <FU className="text-center">
          <Lnk to="/testimonials" className="btn-ghost">
            Read All Testimonials
          </Lnk>
        </FU>
      </div>
    </section>

    {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
    <section className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 hero-pattern"
        style={{ background: "#0D0A07" }}
      />
      <div className="gold-ray" />
      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <FU>
          <p className="section-label mb-5">Start Your Journey</p>
          <h2
            className="font-cinzel font-black text-white leading-tight mb-4"
            style={{
              fontSize: "clamp(1.8rem,4vw,3.2rem)",
              textShadow: "0 0 60px rgba(200,155,60,0.12)",
            }}
          >
            Aapki Society Ka
            <br />
            <span className="text-gold">Behtar Bhavishya</span>
            <br />
            Hamare Saath
          </h2>
          <GR center className="my-6" />
          <p className="font-inter text-base text-white/75 mb-10 leading-relaxed">
            Humara goal sirf project nahi — aapki society ka behtar bhavishya
            hai.
            <br />
            Free consultation ke liye aaj hi sampark karein.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Lnk to="/contact" className="btn-gold">
              Book Free Consultation
            </Lnk>
            <a href="tel:+919769423830" className="btn-ghost">
              +91 97694 23830
            </a>
          </div>
        </FU>
      </div>
    </section>

    {/* Mobile sticky */}
    <div className="mobile-cta-bar">
      <Lnk
        to="/contact"
        className="btn-gold flex-1 text-center text-[10px] py-3 justify-center block"
      >
        Consult Now
      </Lnk>
      <a
        href="https://wa.me/919769423830?text=Hello%20BABA%20Properties!%20I%20want%20a%20free%20redevelopment%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 text-[#25D366] text-[10px] font-bold tracking-widest uppercase border border-[#25D366]"
      >
        WhatsApp
      </a>
    </div>
  </div>
);

export default HomePage;
