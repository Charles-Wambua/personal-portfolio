import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { CONTACT, SOCIALS, EMAILJS_CONFIG } from "./data";
import "./css/Contact.css";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.message.trim().length < 5) {
      setStatus({ state: "error", msg: "Please write a slightly longer message." });
      return;
    }

    setStatus({ state: "sending", msg: "" });
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name || "Portfolio Visitor",
          reply_to: form.email || "no-reply@portfolio.com",
          message: form.message,
          to_name: "Charles",
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus({ state: "success", msg: "Message sent! I'll get back to you soon. 🎉" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        state: "error",
        msg: "Couldn't send right now. Email me directly at " + CONTACT.email,
      });
    }
  };

  const details = [
    { icon: <Mail size={18} />, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: <Phone size={18} />, label: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: <MapPin size={18} />, label: CONTACT.location, href: null },
  ];

  return (
    <section className="section contact" id="contact">
      <div className="contact__grid">
        <motion.div
          className="contact__intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-lead">
            Have a project, role, or idea in mind? I'm open to select
            opportunities and always happy to talk shop.
          </p>

          <ul className="contact__details">
            {details.map((d) => (
              <li key={d.label}>
                <span className="contact__detail-icon">{d.icon}</span>
                {d.href ? (
                  <a href={d.href}>{d.label}</a>
                ) : (
                  <span>{d.label}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="contact__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact__form glass"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <div className="contact__row">
            <label className="contact__field">
              <span>Name</span>
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
              />
            </label>
            <label className="contact__field">
              <span>Email</span>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@email.com"
              />
            </label>
          </div>

          <label className="contact__field">
            <span>Message</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me about your project…"
              maxLength={1000}
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary contact__submit"
            disabled={status.state === "sending"}
          >
            {status.state === "sending" ? (
              <>
                <Loader2 size={18} className="spin" /> Sending…
              </>
            ) : (
              <>
                Send message <Send size={16} />
              </>
            )}
          </button>

          {status.msg && (
            <p className={`contact__status contact__status--${status.state}`}>
              {status.msg}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
