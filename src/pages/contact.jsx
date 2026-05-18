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
    email: "",
    phone: "",
    service: "", // redevelopment, liaisoning, jv, outright, pre-leased, new-inventory, other
    society: "",
    members: "",
    plotSize: "",
    propertyType: "",
    budget: "",
    location: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const handle = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setKey = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.service) {
      alert("Please select a service before submitting.");
      return;
    }
    setSending(true);

    const formData = new FormData();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "9d2e9598-851b-4e2f-bd5b-60ae67e90805";
    formData.append("access_key", accessKey);
    formData.append("from_name", "BABA PROPERTIES Consultation Portal");
    formData.append(
      "subject",
      `New Consultation: ${form.name} (${servicesList.find((s) => s.value === form.service)?.label})`
    );

    // Primary inputs
    formData.append("Client Name", form.name);
    formData.append("Phone Number", form.phone);
    formData.append("Email Address", form.email || "Not Provided");
    formData.append("Service Needed", servicesList.find((s) => s.value === form.service)?.label || "");

    // Dynamic dynamic fields
    if (form.service === "redevelopment") {
      formData.append("Society Name", form.society);
      formData.append("Total Members", form.members);
      if (form.plotSize) formData.append("Approx Plot Area", form.plotSize);
    } else if (["jv", "outright", "pre-leased", "new-inventory"].includes(form.service)) {
      formData.append("Property Category", form.propertyType);
      formData.append("Estimated Budget / Deal Value", form.budget);
    }

    formData.append("Location / Area", form.location);
    formData.append("Additional Message", form.message || "No additional message.");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSent(true);
      } else {
        alert(data.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please verify your internet connection and try again.");
    } finally {
      setSending(false);
    }
  };

  const servicesList = [
    { value: "redevelopment", label: "Redevelopment & PMC Consultancy" },
    { value: "liaisoning", label: "Liaisoning & Government Approvals" },
    { value: "jv", label: "J.V. Proposal (Joint Venture)" },
    { value: "outright", label: "Outright Land / Plot Deals" },
    { value: "pre-leased", label: "Pre-Leased Property Investment" },
    { value: "new-inventory", label: "New Inventory (Flats & Commercial)" },
    { value: "other", label: "General Property Query" }
  ];

  const labelCls = "font-inter text-[10px] text-white/65 uppercase tracking-widest block mb-2";
  const inputCls = "w-full bg-transparent border border-[rgba(200,155,60,0.18)] px-5 py-4 font-inter text-sm form-input-themed focus:border-[rgba(200,155,60,0.55)] focus:outline-none transition-colors duration-300";
  const selectCls = "w-full bg-[var(--nav-bg-solid)] border border-[rgba(200,155,60,0.18)] px-5 py-4 font-inter text-sm form-input-themed focus:border-[rgba(200,155,60,0.55)] focus:outline-none transition-colors duration-300 appearance-none";

  return (
    <div className="page-enter">
      <Ph8
        label="Get In Touch"
        title="Contact"
        subtitle="Book your free consultation today. Our expert team will respond within 24 hours to help your society."
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
                  <div className="text-center py-8">
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
                    <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                      Consultation Booked!
                    </h3>
                    <p className="font-inter text-xs text-white/60 mb-6 max-w-sm mx-auto">
                      Thank you, <strong className="text-white">{form.name}</strong>. Virendra Vishwakarma will personally contact you at <strong className="text-gold">{form.phone}</strong> within 24 hours.
                    </p>

                    {/* Receipt Block */}
                    <div 
                      className="text-left border border-gold/15 p-6 max-w-md mx-auto space-y-3 font-inter text-xs rounded"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <p className="font-cinzel text-[10px] font-bold text-gold tracking-widest uppercase pb-2 border-b border-white/5 mb-3">
                        Request Details Summary
                      </p>
                      
                      <div className="flex justify-between">
                        <span className="text-white/55">Service Requested:</span>
                        <span className="text-white font-semibold text-right">
                          {servicesList.find(s => s.value === form.service)?.label}
                        </span>
                      </div>

                      {form.email && (
                        <div className="flex justify-between">
                          <span className="text-white/55">Email:</span>
                          <span className="text-white text-right">{form.email}</span>
                        </div>
                      )}

                      {form.service === "redevelopment" && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-white/55">Society Name:</span>
                            <span className="text-white font-semibold text-right">{form.society}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/55">Total Members:</span>
                            <span className="text-white text-right">{form.members}</span>
                          </div>
                          {form.plotSize && (
                            <div className="flex justify-between">
                              <span className="text-white/55">Approx. Plot Area:</span>
                              <span className="text-white text-right">{form.plotSize}</span>
                            </div>
                          )}
                        </>
                      )}

                      {["jv", "outright", "pre-leased", "new-inventory"].includes(form.service) && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-white/55">Property Type:</span>
                            <span className="text-white font-semibold text-right">{form.propertyType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/55">Estimated Budget:</span>
                            <span className="text-white text-right">{form.budget}</span>
                          </div>
                        </>
                      )}

                      <div className="flex justify-between">
                        <span className="text-white/55">Location:</span>
                        <span className="text-white text-right">{form.location}</span>
                      </div>

                      {form.message && (
                        <div className="pt-3 border-t border-white/5 mt-2">
                          <span className="text-white/55 block mb-1">Your Message:</span>
                          <p className="text-white/80 leading-relaxed italic bg-black/20 p-3 border border-white/5 rounded">
                            "{form.message}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    {/* Always visible base fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Your Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={handle("name")}
                          placeholder="Full Name"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Phone Number *</label>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Email Address</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={handle("email")}
                          placeholder="email@example.com"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Service Needed *</label>
                        {/* Custom Select Dropdown */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setServiceOpen(!serviceOpen)}
                            className={`${inputCls} flex items-center justify-between text-left cursor-pointer`}
                          >
                            <span className={form.service ? "form-input-themed" : "form-input-themed opacity-40"}>
                              {servicesList.find((s) => s.value === form.service)?.label || "Select Service"}
                            </span>
                            <svg
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className={`text-gold transition-transform duration-300 ${
                                serviceOpen ? "rotate-180" : ""
                              }`}
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </button>

                          {serviceOpen && (
                            <>
                              <div className="fixed inset-0 z-40" onClick={() => setServiceOpen(false)} />
                              <div
                                className="absolute left-0 right-0 top-full mt-2 z-50 premium-card p-1 border border-gold/22 shadow-2xl max-h-60 overflow-y-auto"
                                style={{ background: "var(--nav-bg-solid)", backdropFilter: "blur(16px)" }}
                              >
                                {servicesList.map((s) => (
                                  <button
                                    key={s.value}
                                    type="button"
                                    onClick={() => {
                                      setKey("service", s.value);
                                      setServiceOpen(false);
                                    }}
                                    className={`w-full text-left font-inter text-xs px-4 py-3 hover:bg-gold/5 transition-colors cursor-pointer dropdown-option-themed ${
                                      form.service === s.value ? "text-gold bg-gold/5 font-semibold" : ""
                                    }`}
                                  >
                                    {s.label}
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Redevelopment dynamic block */}
                    {form.service === "redevelopment" && (
                      <div className="p-5 border border-gold/10 bg-gold/5 space-y-4 rounded page-enter duration-500">
                        <p className="font-cinzel text-[10px] font-bold text-gold tracking-widest uppercase mb-1">
                          Redevelopment & Society Details
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelCls}>Society Name *</label>
                            <input
                              required
                              value={form.society}
                              onChange={handle("society")}
                              placeholder="e.g. Shiv Sai CHS"
                              className={inputCls}
                            />
                          </div>
                          <div>
                            <label className={labelCls}>Total Members *</label>
                            <div className="relative">
                              <select
                                required
                                value={form.members}
                                onChange={(e) => setKey("members", e.target.value)}
                                className={selectCls}
                              >
                                <option value="" className="bg-[#121212] text-white/40">Select Member Count</option>
                                <option value="Under 15" className="bg-[#121212]">Under 15 members</option>
                                <option value="15 to 30" className="bg-[#121212]">15 to 30 members</option>
                                <option value="30 to 60" className="bg-[#121212]">30 to 60 members</option>
                                <option value="60 to 100" className="bg-[#121212]">60 to 100 members</option>
                                <option value="100+" className="bg-[#121212]">100+ members</option>
                              </select>
                              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M6 9l6 6 6-6" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelCls}>Location *</label>
                            <input
                              required
                              value={form.location}
                              onChange={handle("location")}
                              placeholder="e.g. Borivali West, Mumbai"
                              className={inputCls}
                            />
                          </div>
                          <div>
                            <label className={labelCls}>Approx. Plot Area (Optional)</label>
                            <input
                              value={form.plotSize}
                              onChange={handle("plotSize")}
                              placeholder="e.g. 1500 sq. meters"
                              className={inputCls}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Transaction / Advisory property dynamic block */}
                    {["jv", "outright", "pre-leased", "new-inventory"].includes(form.service) && (
                      <div className="p-5 border border-gold/10 bg-gold/5 space-y-4 rounded page-enter duration-500">
                        <p className="font-cinzel text-[10px] font-bold text-gold tracking-widest uppercase mb-1">
                          Property Details & Budget
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelCls}>Property Category *</label>
                            <div className="relative">
                              <select
                                required
                                value={form.propertyType}
                                onChange={(e) => setKey("propertyType", e.target.value)}
                                className={selectCls}
                              >
                                <option value="" className="bg-[#121212] text-white/40">Select Category</option>
                                <option value="Land Parcel / Plot" className="bg-[#121212]">Land Parcel / Plot</option>
                                <option value="Residential Flat / Apartment" className="bg-[#121212]">Residential Flat / Apartment</option>
                                <option value="Commercial Office Space" className="bg-[#121212]">Commercial Office Space</option>
                                <option value="Retail Shop / Showroom" className="bg-[#121212]">Retail Shop / Showroom</option>
                                <option value="Standalone Building / Bungalow" className="bg-[#121212]">Standalone Building / Bungalow</option>
                              </select>
                              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M6 9l6 6 6-6" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className={labelCls}>Estimated Budget / Deal Value *</label>
                            <div className="relative">
                              <select
                                required
                                value={form.budget}
                                onChange={(e) => setKey("budget", e.target.value)}
                                className={selectCls}
                              >
                                <option value="" className="bg-[#121212] text-white/40">Select Budget Range</option>
                                <option value="Under 2 Crores" className="bg-[#121212]">Under 2 Crores</option>
                                <option value="2 to 5 Crores" className="bg-[#121212]">2 to 5 Crores</option>
                                <option value="5 to 10 Crores" className="bg-[#121212]">5 to 10 Crores</option>
                                <option value="10 to 25 Crores" className="bg-[#121212]">10 to 25 Crores</option>
                                <option value="25 Crores+" className="bg-[#121212]">25 Crores+</option>
                              </select>
                              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M6 9l6 6 6-6" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className={labelCls}>Preferred Location / Area *</label>
                          <input
                            required
                            value={form.location}
                            onChange={handle("location")}
                            placeholder="e.g. Mira Road, Thane, Andheri West"
                            className={inputCls}
                          />
                        </div>
                      </div>
                    )}

                    {/* Liaisoning or General Query Block */}
                    {["liaisoning", "other"].includes(form.service) && (
                      <div className="p-5 border border-gold/10 bg-gold/5 space-y-4 rounded page-enter duration-500">
                        <p className="font-cinzel text-[10px] font-bold text-gold tracking-widest uppercase mb-1">
                          Project Details
                        </p>
                        <div>
                          <label className={labelCls}>Project / Property Location *</label>
                          <input
                            required
                            value={form.location}
                            onChange={handle("location")}
                            placeholder="e.g. Dahisar, BMC Limits"
                            className={inputCls}
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className={labelCls}>Additional Message</label>
                      <textarea
                        value={form.message}
                        onChange={handle("message")}
                        placeholder="Tell us more about your requirements, timeline, or current situation..."
                        rows={4}
                        className={inputCls}
                        style={{ resize: "vertical", minHeight: 100 }}
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
                          Processing Request...
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
                          Book Free Consultation
                        </span>
                      )}
                    </button>
                    <p className="font-inter text-xs text-white/55 text-center mt-2">
                      We respond within 24 hours. Your information is 100% secure.
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
                  <div className="flex items-start gap-4 group">
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
                      <div className="flex flex-col gap-1">
                        <a href="tel:+918097244652" className="font-inter font-semibold text-white hover:text-gold transition-colors no-underline leading-none">+91 80972 44652</a>
                      </div>
                    </div>
                  </div>
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
                href="https://wa.me/918097244652?text=Hello%20BABA%20Properties!%20I%20want%20a%20free%20redevelopment%20consultation%20for%20my%20society."
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

              {/* Real Map */}
              <div className="premium-card overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.981831828551!2d72.8649856!3d19.3004897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b03b10f95229%3A0x9c952dad360eb6fd!2sBalasaheb%20Thakare%20Ground!5e0!3m2!1sen!2sin!4v1715655000000!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  className="map-filter"
                  title="Office Location"
                ></iframe>
                <div className="p-4 border-t border-white/10" style={{ background: "var(--bg-section)" }}>
                  <p className="font-cinzel text-[10px] text-gold tracking-widest uppercase mb-1">
                    Registered Office
                  </p>
                  <p className="font-inter text-[11px] text-white/70 leading-relaxed">
                    Balasaheb Thakare Ground Area, Indralok Phase 2,<br />
                    Bhayandar East, Maharashtra 401105
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
