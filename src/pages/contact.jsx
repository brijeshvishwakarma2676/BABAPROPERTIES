import React, { useState } from "react";
import {
  FadeUp as Fu8,
  SectionTitle as St8,
  PageHero as Ph8,
  GoldRule as Gr8,
} from "../components/shared";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    society: "",
    location: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  const inputCls = `w-full bg-transparent border border-[rgba(200,155,60,0.18)] px-5 py-4 font-inter text-sm text-white/95 placeholder-white/25 focus:border-[rgba(200,155,60,0.55)] focus:outline-none transition-colors duration-300`;

  return (
    <div className="page-enter">
      <Ph8
        label="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Book your free consultation today. Our expert team will respond within 24 hours."
      />

      <section className="section-pad">
        <div className="max-w-[1380px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <Fu8 className="lg:col-span-3">
              <div className="premium-card p-8 md:p-10">
                <p className="section-label mb-3">Send A Message</p>
                <h2 className="font-cinzel text-2xl font-bold text-white mb-2">
                  Book Free Consultation
                </h2>
                <Gr8 className="mb-8" />

                {sent ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 border border-gold/40 flex items-center justify-center mx-auto mb-6"
                      style={{ background: "rgba(200,155,60,0.06)" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                        fill="none"
                        stroke="#C89B3C"
                        strokeWidth="1.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-white mb-3">
                      Message Received!
                    </h3>
                    <p className="font-inter text-sm text-white/70 leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. Deepak Vishwakarma will
                      personally get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-inter text-[10px] text-white/65 uppercase tracking-widest block mb-2">
                          Your Name *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={handle("name")}
                          placeholder="Full Name"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="font-inter text-[10px] text-white/65 uppercase tracking-widest block mb-2">
                          Society Name *
                        </label>
                        <input
                          required
                          value={form.society}
                          onChange={handle("society")}
                          placeholder="e.g. Shiv Sai CHS"
                          className={inputCls}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-inter text-[10px] text-white/65 uppercase tracking-widest block mb-2">
                          Location *
                        </label>
                        <input
                          required
                          value={form.location}
                          onChange={handle("location")}
                          placeholder="City / Area"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="font-inter text-[10px] text-white/65 uppercase tracking-widest block mb-2">
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={handle("phone")}
                          placeholder="+91 XXXXX XXXXX"
                          className={inputCls}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-inter text-[10px] text-white/65 uppercase tracking-widest block mb-2">
                        Your Message
                      </label>
                      <textarea
                        value={form.message}
                        onChange={handle("message")}
                        placeholder="Tell us about your society's redevelopment situation, questions, or concerns..."
                        rows={5}
                        className={inputCls}
                        style={{ resize: "vertical", minHeight: 120 }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-gold w-full justify-center mt-2"
                      style={{ opacity: sending ? 0.7 : 1 }}
                    >
                      {sending ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21 12a9 9 0 11-6.219-8.56" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                          </svg>
                          Send Message
                        </span>
                      )}
                    </button>
                    <p className="font-inter text-xs text-white/55 text-center mt-2">
                      We respond within 24 hours. Your information is completely
                      confidential.
                    </p>
                  </form>
                )}
              </div>
            </Fu8>

            {/* Contact Info */}
            <Fu8 delay={120} className="lg:col-span-2 space-y-5">
              {/* Card: Direct Contact */}
              <div className="premium-card p-7">
                <p className="section-label mb-5">Direct Contact</p>
                <div className="space-y-5">
                  <a
                    href="tel:+919769423820"
                    className="flex items-start gap-4 group no-underline"
                  >
                    <div className="w-10 h-10 border border-[rgba(200,155,60,0.22)] flex items-center justify-center flex-shrink-0 text-gold group-hover:bg-[rgba(200,155,60,0.08)] transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.13 1 .36 1.97.71 2.91a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.17-1.17a2 2 0 012.11-.45c.94.35 1.91.58 2.91.71A2 2 0 0122 14.93v2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-inter text-[10px] text-white/58 uppercase tracking-widest mb-1">
                        Phone
                      </p>
                      <p className="font-inter font-semibold text-white group-hover:text-gold transition-colors">
                        +91 97694 23820
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:babaproperties188@gmail.com"
                    className="flex items-start gap-4 group no-underline"
                  >
                    <div className="w-10 h-10 border border-[rgba(200,155,60,0.22)] flex items-center justify-center flex-shrink-0 text-gold group-hover:bg-[rgba(200,155,60,0.08)] transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-inter text-[10px] text-white/58 uppercase tracking-widest mb-1">
                        Email
                      </p>
                      <p className="font-inter text-sm text-white group-hover:text-gold transition-colors break-all">
                        babaproperties188@gmail.com
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[rgba(200,155,60,0.22)] flex items-center justify-center flex-shrink-0 text-gold">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-inter text-[10px] text-white/58 uppercase tracking-widest mb-1">
                        Service Areas
                      </p>
                      <p className="font-inter text-sm text-white/85 leading-relaxed">
                        Mira Bhayander · Mumbai
                        <br />
                        Thane · Palghar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919769423820?text=Hello%20BABA%20Properties!%20I%20want%20a%20free%20redevelopment%20consultation%20for%20my%20society."
                target="_blank"
                rel="noopener noreferrer"
                className="block premium-card p-6 border border-[#25D366]/18 hover:border-[#25D366]/45 transition-colors group no-underline"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(37,211,102,0.1)",
                      border: "1px solid rgba(37,211,102,0.25)",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#25D366"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-cinzel text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors">
                      WhatsApp Now
                    </p>
                    <p className="font-inter text-xs text-white/68 mt-0.5">
                      Instant reply during business hours
                    </p>
                  </div>
                </div>
              </a>

              {/* Map Placeholder */}
              <div className="premium-card overflow-hidden">
                <div
                  className="flex items-center justify-center"
                  style={{
                    height: 160,
                    background: "linear-gradient(135deg,#141008,#0D0A06)",
                  }}
                >
                  <div className="text-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      fill="none"
                      stroke="rgba(200,155,60,0.4)"
                      strokeWidth="1.5"
                      className="mx-auto mb-3"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="font-inter text-xs text-white/58">
                      Serving Mira Bhayander · Mumbai · Thane · Palghar
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-cinzel text-xs text-white/75 tracking-wider">
                    Service Area Coverage
                  </p>
                </div>
              </div>
            </Fu8>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
