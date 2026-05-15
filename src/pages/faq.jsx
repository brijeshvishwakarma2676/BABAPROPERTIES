import React, { useState } from "react";
import {
  FadeUp as Fu7,
  SectionTitle as St7,
  PageHero as Ph7,
  GoldRule as Gr7,
  Link as Lk7,
  PageCTA as Cta7,
} from "../components/shared";

const FAQS = [
  {
    q: "Redevelopment process kitna time leta hai?",
    a: "Ek typical redevelopment project 4 se 7 saal tak le sakta hai — starting from initial consultation to final possession. Yeh depend karta hai society ki size, builder's speed, government approvals, aur construction complexity par. BABA Properties ka role hota hai is process ko efficient aur delay-free rakhna aapke liye.",
  },
  {
    q: "PMC (Project Management Consultant) ka role kya hota hai?",
    a: "PMC (Project Management Consultant) society ki taraf se kaam karta hai — builder se negotiate karna, agreements review karna, construction quality monitor karna, timelines track karna, aur member communication manage karna. BABA Properties exclusively society ke liye kaam karta hai, builder ke liye nahi. Yeh distinction bahut zaroori hai.",
  },
  {
    q: "Sahi builder kaise choose karein?",
    a: "Builder selection ek critical decision hai. Hum evaluate karte hain: RERA registration & rating, past project delivery history, financial stability, technical capability, member feedback from previous projects, aur legal standing. Sirf price ya corpus offer pe builder choose karna common aur costly galti hai.",
  },
  {
    q: "Society members ko redevelopment mein kya fayda hota hai?",
    a: "Members ko typically milta hai: (1) Extra area — 20-35% bigger flat, (2) Transit rent — jab tak naya building nahi banta, (3) Corpus fund — one-time lump sum payment, (4) New modern flat — premium amenities aur construction quality ke saath. Exact benefits depend karte hain society location, plot potential, aur negotiation strength par.",
  },
  {
    q: "Legal verification process mein kya check hota hai?",
    a: "Legal verification mein shamil hai: property title search, existing encumbrances check, society conveyance deed verification, RERA builder registration, proposed Development Agreement (DA) review, NOC requirements from government bodies, stamp duty implications, aur all statutory compliance review. Yeh step skip nahi karna chahiye.",
  },
  {
    q: "Redevelopment mein kya risks hain?",
    a: "Major risks mein shamil hain: builder abandoning project mid-way, delivering smaller area than promised, poor construction quality, delayed possession, unfair DA terms, insufficient corpus, illegal structures, aur member consent disputes. BABA Properties in sab risks ko proactively identify aur mitigate karta hai — before you sign anything.",
  },
  {
    q: "Kitne members ki consent chahiye redevelopment ke liye?",
    a: "Maharashtra cooperative society law ke under, redevelopment ke liye 51% members ka special resolution through a General Body Meeting (GBM) required hai. BABA Properties member meetings facilitate karta hai, concerns address karta hai, aur smooth consensus building mein help karta hai — taki koi member behind nahi rehe.",
  },
  {
    q: "BABA Properties ki fees kya hoti hai?",
    a: "Hum ek transparent, performance-based consultancy fee structure follow karte hain jo customized hoti hai society ki size aur project scope ke hisab se. Initial consultation bilkul free hai. Fees structure ke baare mein detail mein discuss karne ke liye humse seedha contact karein.",
  },
];

const AccItem = ({ q, a, open, onToggle }) => (
  <div className="border-b border-white/5 group">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left gap-4 focus:outline-none"
    >
      <span
        className={`font-cinzel text-base leading-snug transition-colors duration-300 ${open ? "text-gold" : "text-white/90 group-hover:text-gold"}`}
      >
        {q}
      </span>
      <span
        className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-300 ${open ? "border-gold bg-gold/10 text-gold rotate-45" : "border-white/20 text-white/70 group-hover:border-gold/40"}`}
      >
        <svg viewBox="0 0 14 14" width="12" height="12" fill="currentColor">
          <path
            d="M7 1v12M1 7h12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </span>
    </button>
    <div
      className="acc-body"
      style={{ maxHeight: open ? 400 : 0, opacity: open ? 1 : 0 }}
    >
      <p className="font-inter text-sm text-white/70 leading-relaxed pb-6 pr-10">
        {a}
      </p>
    </div>
  </div>
);

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="page-enter">
      <Ph7
        label="Common Queries"
        title="FAQ"
        subtitle="Everything your society committee needs to know about redevelopment, PMC, and our property services."
      />

      {/* FAQ List */}
      <section className="section-pad">
        <div className="max-w-[820px] mx-auto px-5 lg:px-10">
          <Fu7>
            <div className="premium-card px-8 py-4">
              {FAQS.map((f, i) => (
                <AccItem
                  key={i}
                  q={f.q}
                  a={f.a}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </div>
          </Fu7>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="pb-24">
        <div className="max-w-[820px] mx-auto px-5 lg:px-10 text-center">
          <Fu7>
            <div className="premium-card p-12">
              <p className="section-label mb-4">Still Have Questions?</p>
              <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-4">
                Talk Directly to Our Expert
              </h2>
              <Gr7 center className="mb-6" />
              <p className="font-inter text-sm text-white/75 leading-relaxed mb-8 max-w-md mx-auto">
                Aapke specific society ke liye personalized answers chahiye?
                Virendra Vishwakarma se directly baat karein — free consultation
                mein.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Lk7 to="/contact" className="btn-gold">
                  Book Free Consultation
                </Lk7>
                <a
                  href="https://wa.me/919769423830?text=Hello%20BABA%20Properties!%20I%20want%20a%20free%20redevelopment%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </Fu7>
        </div>
      </section>

      <Cta7
        headline="Ready to Make the Right Decision?"
        sub="Aaj hi contact karein aur apni society ka redevelopment journey sahi raaste par shuru karein."
      />
    </div>
  );
};

export default FAQPage;
