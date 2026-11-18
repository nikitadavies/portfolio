import { useState } from "react";
import { Mail, Download, Send, Check, Copy, MapPin, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contact, profile } from "../data/content";
import { Logo } from "./Navbar";
import { Eyebrow, Reveal } from "./ui";

function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    // Fallback: no Formspree ID configured → open the visitor's mail client
    if (!contact.formspreeId) {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${form.name}`)}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${contact.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form-success">
        <CheckCircle2 size={40} />
        <h4>Message sent!</h4>
        <p>Thanks for reaching out — I'll get back to you within a day or two.</p>
        <button className="btn btn--ghost btn--sm" onClick={() => setStatus("idle")}>Send another</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label className="field">
          <span>Name</span>
          <input required value={form.name} onChange={update("name")} placeholder="Jane Recruiter" autoComplete="name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input required type="email" value={form.email} onChange={update("email")} placeholder="jane@company.com" autoComplete="email" />
        </label>
      </div>
      <label className="field">
        <span>Message</span>
        <textarea required rows={4} value={form.message} onChange={update("message")} placeholder="Tell me about the role or the problem you're solving…" />
      </label>
      {status === "error" && <p className="form-error">Something went wrong — please email me directly.</p>}
      <button className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : <>Contact Me <Send size={17} /></>}
      </button>
    </form>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <>
      <section id="contact" className="section contact">
        <div className="container">
          <Reveal className="contact__card glass">
            <div className="contact__glow" aria-hidden="true" />
            <div className="contact__left">
              <Eyebrow>Let's Work Together</Eyebrow>
              <h2 className="contact__title">
                {contact.heading} <span className="grad-text">{contact.accent}</span>
              </h2>
              <p className="lead">{contact.text}</p>

              <ul className="contact__list">
                <li>
                  <span className="contact__ico"><Mail size={18} /></span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <button className="icon-btn" onClick={copy} aria-label="Copy email">
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                </li>
                <li>
                  <span className="contact__ico"><FaLinkedin size={17} /></span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/nikita-davies</a>
                </li>
                <li>
                  <span className="contact__ico"><FaGithub size={17} /></span>
                  <a href={profile.github} target="_blank" rel="noreferrer">github.com/nikitadavies</a>
                </li>
                <li>
                  <span className="contact__ico"><MapPin size={18} /></span>
                  <span>{profile.location}</span>
                </li>
              </ul>

              <a href={profile.resume} download className="btn btn--ghost btn--sm"><Download size={16} /> Download Resume</a>

              <p className="work-auth"><span className="pulse-dot" /> {profile.workAuth}</p>
            </div>

            <div className="contact__right">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <a href="#home" className="nav__brand"><Logo size={26} /><span>{profile.name}</span></a>
          <p>Building a better digital future, together.</p>
          <div className="footer__social">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
        <div className="container footer__copy">© {new Date().getFullYear()} {profile.name}. Designed & built with React.</div>
      </footer>
    </>
  );
}
