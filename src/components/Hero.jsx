import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { hero, profile, stats } from "../data/content";
import { useCountUp, useInView } from "../hooks";
import Icon from "./Icon";
import IdCard from "./IdCard";

function Stat({ s, start, i }) {
  const n = useCountUp(s.value ?? 0, start, 1400 + i * 150, s.decimals ?? 0);
  const display = s.text ?? n.toFixed(s.decimals ?? 0);
  return (
    <div className="stat">
      <span className="stat__icon"><Icon name={s.icon} size={26} /></span>
      <div>
        <div className="stat__value">
          {display}{s.smallSuffix ? <span className="stat__suffix">{s.suffix}</span> : s.suffix}
        </div>
        <div className="stat__label">{s.label}</div>
        <div className="stat__sub">{s.sub}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [statsRef, statsIn] = useInView({ threshold: 0.4 });

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="pill pill--status">
            <span className="pulse-dot" /> {profile.status}
          </span>

          <h1 className="hero__title">
            {hero.headline.map((l, i) => (
              <span key={i} className={`hero__line ${l.accent ? "grad-text" : ""}`} style={{ animationDelay: `${120 + i * 110}ms` }}>
                {l.text}
              </span>
            ))}
          </h1>

          <p className="hero__sub fade-up" style={{ animationDelay: "600ms" }}>
            {hero.subheading}
            <span className="hero__stack">
              {hero.stack.map((t, i) => (
                <span key={t}>{i > 0 && <i>·</i>}{t}</span>
              ))}
            </span>
          </p>

          <p className="hero__intro fade-up" style={{ animationDelay: "700ms" }}>{hero.intro}</p>

          <div className="hero__ctas fade-up" style={{ animationDelay: "800ms" }}>
            <a href="#projects" className="btn btn--primary">View My Work <ArrowRight size={18} /></a>
            <a href={profile.resume} download className="btn btn--ghost"><Download size={18} /> Download Resume</a>
            <a href="#contact" className="btn btn--text"><MessageCircle size={18} /> Let's Connect</a>
          </div>

          <div className="hero__meta fade-up" style={{ animationDelay: "900ms" }}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <span className="hero__auth">🇨🇦 {profile.workAuth}</span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__portrait fade-in" style={{ animationDelay: "200ms" }}>
            <div className="hero__halo" />
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
          </div>
          <IdCard />
        </div>
      </div>

      <div className="container">
        <div ref={statsRef} className="stats glass">
          {stats.map((s, i) => <Stat key={s.label} s={s} start={statsIn} i={i} />)}
        </div>
      </div>
    </section>
  );
}
