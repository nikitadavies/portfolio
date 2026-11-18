import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { profile } from "../data/content";
import { useActiveSection } from "../hooks";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];
const ids = links.map((l) => l.id);

export function Logo({ size = 34 }) {
  // Monogram "ND" drawn as a single continuous stroke, like the design
  return (
    <svg width={size * 1.4} height={size} viewBox="0 0 56 40" fill="none" aria-hidden="true">
      <path
        d="M4 36V4l22 32V4h8c11 0 18 7 18 16s-7 16-18 16h-4"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" aria-label="Nikita Davies — home">
          <Logo size={26} />
          <span>{profile.name}</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm nav__cta-mobile" onClick={() => setOpen(false)}>
            Let's Connect <ArrowRight size={16} />
          </a>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm nav__cta">
          Let's Connect <ArrowRight size={16} />
        </a>
        <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
