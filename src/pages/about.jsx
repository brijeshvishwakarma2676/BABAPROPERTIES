import React from "react";
import {
  FadeUp as Fu,
  SectionTitle as Stl,
  PageHero as Ph,
  GoldRule as Gr,
  AnimatedCounter as Cnt,
  Link as Lk2,
  PageCTA as Cta,
} from "../components/shared";

const AboutPage = () => (
  <div className="page-enter">
    <Ph
      label="About BABA Properties"
      title="Your Trusted Redevelopment Partner"
      subtitle="Founded with a mission to protect and empower housing societies through expert, unbiased guidance."
    />

    {/* ── STORY ────────────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Fu>
            <p className="section-label mb-5">Our Story</p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Built on the Foundation of{" "}
              <span className="text-gold">Society Trust</span>
            </h2>
            <Gr className="mb-8" />
            <div className="space-y-5 font-inter text-sm text-white/78 leading-relaxed">
              <p>
                BABA Properties was founded with a singular purpose: to ensure
                that housing society members are never exploited during the
                redevelopment process.
              </p>
              <p>
                Having witnessed societies make costly mistakes — accepting
                unfair terms, choosing wrong builders, missing critical legal
                protections — our founder Deepak Vishwakarma decided to bridge
                the gap between societies and expert guidance.
              </p>
              <p>
                Today, BABA Properties stands as one of the most trusted
                redevelopment consultancies in the Mumbai Metropolitan Region,
                with a proven record of securing better outcomes for every
                society we serve.
              </p>
            </div>
          </Fu>
          <Fu delay={140}>
            <div className="premium-card p-10 relative overflow-hidden">
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 120,
                  height: 120,
                  borderTop: "1px solid rgba(200,155,60,0.08)",
                  borderRight: "1px solid rgba(200,155,60,0.08)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 120,
                  height: 120,
                  borderBottom: "1px solid rgba(200,155,60,0.08)",
                  borderLeft: "1px solid rgba(200,155,60,0.08)",
                }}
              />
              <div className="grid grid-cols-2 gap-5">
                {[
                  ["50", "+", "Societies Served"],
                  ["15", "+", "Years Experience"],
                  ["4", "", "Cities Covered"],
                  ["100", "%", "Client Focus"],
                ].map(([v, s, l], i) => (
                  <div
                    key={i}
                    className="text-center p-6 border border-[rgba(200,155,60,0.1)]"
                  >
                    <div className="font-cinzel text-3xl font-black text-gold mb-2">
                      <Cnt target={parseInt(v)} suffix={s} />
                    </div>
                    <p className="font-inter text-xs text-white/68 tracking-wide">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Fu>
        </div>
      </div>
    </section>

    {/* ── MISSION & VALUES ─────────────────────────────────────────── */}
    <section className="section-pad" style={{ background: "#0D0A07" }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <Stl label="Our Purpose" title="Mission, Vision & Values" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              t: "Our Mission",
              c: "To empower every housing society with the knowledge, expert guidance, and strong representation needed to make the best possible redevelopment decisions for their community.",
            },
            {
              t: "Our Vision",
              c: "A Maharashtra where every housing society undergoes redevelopment with complete transparency, fair builder terms, and maximum benefit — financial and spatial — for all members.",
            },
            {
              t: "Our Values",
              c: "Integrity · Transparency · Member-First · No Conflicts of Interest. Your society's interests are always our highest and only priority. We are consultants — not brokers, not builders.",
            },
          ].map((m, i) => (
            <Fu key={i} delay={i * 90}>
              <div className="premium-card p-8 h-full">
                <div
                  style={{
                    width: 32,
                    height: 2,
                    background: "#C89B3C",
                    marginBottom: 20,
                  }}
                />
                <h3 className="font-cinzel text-lg font-semibold text-white mb-4">
                  {m.t}
                </h3>
                <p className="font-inter text-sm text-white/72 leading-relaxed">
                  {m.c}
                </p>
              </div>
            </Fu>
          ))}
        </div>
      </div>
    </section>

    {/* ── FOUNDER ─────────────────────────────────────────────────── */}
    <section className="section-pad">
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <Fu className="order-1 lg:order-1 flex justify-center">
            <div className="relative max-w-[280px] w-full">
              <div
                style={{
                  position: "absolute",
                  inset: -12,
                  border: "1px solid rgba(200,155,60,0.08)",
                }}
              />
              <div
                className="premium-card relative overflow-hidden"
                style={{ paddingTop: "120%" }}
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{
                    background: "linear-gradient(160deg,#1B1008,#0E0A06)",
                  }}
                >
                  <div
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: "50%",
                      border: "2px solid rgba(200,155,60,0.3)",
                      background: "rgba(200,155,60,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <span className="font-cinzel text-3xl font-black text-gold">
                      DV
                    </span>
                  </div>
                  <p className="font-cinzel text-base text-white/95 tracking-wider">
                    Deepak Vishwakarma
                  </p>
                  <p className="font-inter text-[11px] text-gold/75 mt-1 tracking-widest uppercase">
                    Founder & Consultant
                  </p>
                  <div
                    style={{
                      marginTop: 20,
                      padding: "6px 16px",
                      border: "1px solid rgba(200,155,60,0.22)",
                      background: "rgba(200,155,60,0.06)",
                    }}
                  >
                    <p className="font-cinzel text-[10px] text-gold tracking-widest uppercase">
                      15+ Years Experience
                    </p>
                  </div>
                </div>
                {[
                  [16, 16, "borderTop borderLeft"],
                  [16, "auto", "borderTop borderRight"],
                  ["auto", 16, "borderBottom borderLeft"],
                  ["auto", "auto", "borderBottom borderRight"],
                ].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: 18,
                      height: 18,
                      top: i < 2 ? 16 : "auto",
                      bottom: i >= 2 ? 16 : "auto",
                      left: i % 2 === 0 ? 16 : "auto",
                      right: i % 2 === 1 ? 16 : "auto",
                      borderTop:
                        i < 2 ? "1px solid rgba(200,155,60,0.45)" : undefined,
                      borderBottom:
                        i >= 2 ? "1px solid rgba(200,155,60,0.45)" : undefined,
                      borderLeft:
                        i % 2 === 0
                          ? "1px solid rgba(200,155,60,0.45)"
                          : undefined,
                      borderRight:
                        i % 2 === 1
                          ? "1px solid rgba(200,155,60,0.45)"
                          : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </Fu>
          {/* Bio */}
          <Fu delay={130} className="order-2">
            <p className="section-label mb-4">Founder</p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-2">
              Deepak Vishwakarma
            </h2>
            <p className="font-inter text-sm text-gold/85 mb-6 tracking-wide">
              Founder & Chief Redevelopment Consultant
            </p>
            <Gr className="mb-8" />
            <div className="space-y-4 font-inter text-sm text-white/75 leading-relaxed mb-8">
              <p>
                With 15+ years of experience in real estate advisory, legal
                guidance, and society management, Deepak Vishwakarma brings
                unparalleled expertise to every redevelopment consultation.
              </p>
              <p>
                He has personally guided 50+ housing societies through the
                complex redevelopment journey — securing fair corpus, maximum
                area benefits, and quality construction commitments for
                thousands of families.
              </p>
              <p>
                His deep understanding of Maharashtra's redevelopment laws,
                RERA, and cooperative society dynamics makes him the most
                sought-after consultant across Mira Bhayander, Mumbai, Thane &
                Palghar.
              </p>
            </div>
            <Lk2 to="/contact" className="btn-gold">
              Consult With Deepak
            </Lk2>
          </Fu>
        </div>
      </div>
    </section>

    {/* ── TIMELINE ─────────────────────────────────────────────────── */}
    <section className="section-pad" style={{ background: "#0D0A07" }}>
      <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
        <Stl label="Our Journey" title="A Legacy of Trust" center />
        <div className="max-w-2xl mx-auto">
          {[
            [
              "2009",
              "Foundation",
              "Started real estate advisory specializing in society property laws and documentation.",
            ],
            [
              "2013",
              "First Redevelopment",
              "Successfully guided first major society redevelopment in Mira Bhayander, setting a new benchmark.",
            ],
            [
              "2017",
              "Regional Expansion",
              "Extended services to Mumbai and Thane, becoming a trusted name across MMR.",
            ],
            [
              "2021",
              "PMC Services Launch",
              "Launched comprehensive Project Management Consultancy for full-cycle redevelopment support.",
            ],
            [
              "2024",
              "50+ Milestones",
              "Crossed 50 successful society consultations — thousands of families benefited across 4 cities.",
            ],
          ].map(([y, t, d], i, arr) => (
            <Fu key={i} delay={i * 80}>
              <div className="flex gap-6 mb-8">
                <div className="w-14 text-right flex-shrink-0 pt-1">
                  <span className="font-cinzel text-xs text-gold font-bold">
                    {y}
                  </span>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      border: "2px solid #C89B3C",
                      background: "#0D0A07",
                      flexShrink: 0,
                      boxShadow: "0 0 8px rgba(200,155,60,0.4)",
                    }}
                  />
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        flex: 1,
                        minHeight: 40,
                        background:
                          "linear-gradient(180deg,rgba(200,155,60,0.4),rgba(200,155,60,0.08))",
                        marginTop: 4,
                      }}
                    />
                  )}
                </div>
                <div className="premium-card p-5 flex-1 mb-2">
                  <h4 className="font-cinzel text-sm font-semibold text-white mb-1">
                    {t}
                  </h4>
                  <p className="font-inter text-sm text-white/70">{d}</p>
                </div>
              </div>
            </Fu>
          ))}
        </div>
      </div>
    </section>

    <Cta
      headline="Partner With the Experts Your Society Deserves"
      sub="Book a no-obligation consultation with Deepak Vishwakarma and get expert clarity on your redevelopment journey."
    />
  </div>
);

export default AboutPage;
