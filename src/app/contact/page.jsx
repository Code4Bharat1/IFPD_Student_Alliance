"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from "lucide-react";

const contactInfo = [
  { Icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { Icon: Mail, label: "Email", value: "info@studentalliance.in", href: "mailto:info@studentalliance.in" },
  { Icon: MapPin, label: "Address", value: "Andheri West, Mumbai, Maharashtra 400053", href: "https://maps.google.com" },
  { Icon: Clock, label: "Working Hours", value: "Mon – Sat: 9 AM – 6 PM", href: null },
];

const faqs = [
  {
    question: "What sizes are available in IFPD?",
    answer: 'We offer IFPD panels in 65", 75", 86", and 98" sizes to suit classrooms of all sizes — from small seminar rooms to large auditoriums.',
  },
  {
    question: "Do you provide installation and training?",
    answer: "Yes! Every purchase includes professional on-site installation and a training session for teachers to get started quickly.",
  },
  {
    question: "What warranty do you provide?",
    answer: "All IFPD panels come with a 3-year comprehensive on-site warranty. Extended warranty plans are also available.",
  },
  {
    question: "Can we get a demo before purchasing?",
    answer: "Absolutely. Fill out the form or call us to schedule a free live demo at your school or our nearest showroom.",
  },
  {
    question: "Do you offer EMI or financing options?",
    answer: "Yes, we have flexible EMI plans for schools and institutions. Contact our sales team for custom financing options.",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border-primary rounded-xl overflow-hidden bg-bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-text-heading hover:bg-bg-hover transition-colors"
      >
        {question}
        <ChevronDown
          className={`w-4 h-4 text-text-tertiary shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed border-t border-border-primary">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", school: "", size: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", school: "", size: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-2.5 border border-border-primary rounded-xl text-sm bg-bg-input text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-border-focus transition";

  return (
    <>
      {/* Page Header */}
      <section
        className="py-16 text-center text-white"
        style={{ background: "linear-gradient(135deg, #1e1b6e 0%, var(--brand-primary) 100%)" }}
      >
        <h1 className="text-4xl font-extrabold mb-3">Contact Us</h1>
        <p className="text-blue-200 max-w-lg mx-auto text-sm">
          Have questions or want a demo? Reach out — our team responds within 24 hours.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-bg-primary min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: info cards */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl font-bold text-text-heading mb-6">Get in Touch</h2>
            {contactInfo.map(({ Icon, label, value, href }) => (
              <div
                key={label}
                className="card-glow flex items-start gap-4 p-5 rounded-2xl border border-border-primary bg-bg-card"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-primary hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-text-primary">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border-primary">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7!2d72.835!3d19.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzU4LjgiTiA3MsKwNTAnMDYuMCJF!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="card-glow p-8 rounded-2xl border border-border-primary bg-bg-card"
            >
              <h2 className="text-2xl font-bold text-text-heading mb-2">
                Request a Quote / Demo
              </h2>
              <p className="text-sm text-text-secondary mb-7">
                Fill out the form and our sales team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="John Doe" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">
                      Email <span className="text-error">*</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="john@school.edu" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 98765 43210" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">
                      School / Organization
                    </label>
                    <input type="text" name="school" value={form.school} onChange={handleChange}
                      placeholder="DPS School" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Interested In
                  </label>
                  <select name="size" value={form.size} onChange={handleChange}
                    className={inputClass}>
                    <option value="">Select IFPD size (optional)</option>
                    <option value='65"'>65" IFPD</option>
                    <option value='75"'>75" IFPD</option>
                    <option value='86"'>86" IFPD</option>
                    <option value='98"'>98" IFPD</option>
                    <option value="multiple">Multiple / Bulk Order</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">
                    Message <span className="text-error">*</span>
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    rows={4} placeholder="Tell us about your requirements…"
                    required className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "var(--brand-gradient)" }}
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-text-heading text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

