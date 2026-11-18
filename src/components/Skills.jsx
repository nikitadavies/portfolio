import { useState } from "react";
import { skillCategories } from "../data/content";
import { useInView } from "../hooks";
import Icon, { brandColor } from "./Icon";
import { Eyebrow, Reveal, SectionTitle } from "./ui";

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId);
  const [gridRef, gridIn] = useInView({ threshold: 0.2 });
  const total = skillCategories.reduce((n, c) => n + c.skills.length, 0);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <Eyebrow>My Skills</Eyebrow>
            <SectionTitle plain="Technology" accent="dashboard" />
          </div>
          <p className="section-head__aside">
            {total}+ tools across {skillCategories.length} domains — from pixel to production. Pick a domain to explore.
          </p>
        </Reveal>

        <div className="skills__layout">
          <Reveal as="div" className="skills__tabs" role="tablist" aria-label="Skill categories">
            {skillCategories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={c.id === activeId}
                className={`skills__tab ${c.id === activeId ? "is-active" : ""}`}
                onClick={() => setActiveId(c.id)}
              >
                <span className="skills__tab-icon"><Icon name={c.icon} size={20} /></span>
                <span className="skills__tab-text">
                  <strong>{c.label}</strong>
                  <small>{c.skills.length} skills</small>
                </span>
              </button>
            ))}
          </Reveal>

          <div className="skills__panel glass" ref={gridRef} role="tabpanel">
            <div className="skills__panel-head">
              <h3>{active.label}</h3>
              <p>{active.blurb}</p>
            </div>
            <div className="skills__grid" key={activeId}>
              {active.skills.map((s, i) => (
                <div
                  key={s.name}
                  className="skill-tile"
                  style={{ "--brand": brandColor[s.icon] || "#a78bfa", animationDelay: `${i * 45}ms` }}
                >
                  <span className="skill-tile__icon"><Icon name={s.icon} size={30} /></span>
                  <span className="skill-tile__name">{s.name}</span>
                  <span className="skill-tile__bar">
                    <span style={{ width: gridIn ? `${s.level}%` : 0, transitionDelay: `${200 + i * 50}ms` }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
