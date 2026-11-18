import { ArrowRight, Download } from "lucide-react";
import { about, profile } from "../data/content";
import Icon from "./Icon";
import { Eyebrow, Reveal } from "./ui";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__arc" aria-hidden="true" />
      <div className="container about__grid">
        <Reveal className="about__intro">
          <Eyebrow>About Me</Eyebrow>
          <h2 className="section-title section-title--xl">
            {about.title[0]}<br /><span className="grad-text">{about.title[1]}</span>
          </h2>
          <p className="lead">{about.summary}</p>

          <ul className="positioning">
            {about.positioning.map((p, i) => (
              <li key={p.label}>
                <span className="positioning__num">0{i + 1}</span>
                <div>
                  <strong>{p.label}</strong>
                  <span>{p.text}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="row-gap">
            <a href="#experience" className="btn btn--ghost btn--sm">See my journey <ArrowRight size={16} /></a>
            <a href={profile.resume} download className="btn btn--text btn--sm"><Download size={16} /> Resume (PDF)</a>
          </div>
        </Reveal>

        <div className="pillars">
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="pillar glass glass--hover">
              <span className="pillar__icon"><Icon name={p.icon} size={24} /></span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
