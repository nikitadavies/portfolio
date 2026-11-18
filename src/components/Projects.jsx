import { useEffect, useState } from "react";
import { ArrowRight, X, ChevronRight, CheckCircle2, ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, profile } from "../data/content";
import Icon from "./Icon";
import { Eyebrow, Reveal, SectionTitle } from "./ui";

function CaseStudy({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="cs-title" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close case study"><X /></button>

        <div className="cs__head">
          <span className="project__icon"><Icon name={project.icon} size={28} /></span>
          <div>
            <span className="tag tag--accent">{project.category} · Case study</span>
            <h3 id="cs-title">{project.title}</h3>
            <p>{project.tagline}</p>
          </div>
        </div>

        <div className="cs__grid">
          <div className="cs__block">
            <h4>The problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="cs__block">
            <h4>The solution</h4>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="cs__block">
          <h4>Architecture</h4>
          <div className="arch">
            {project.architecture.map((node, i) => (
              <div key={node} className="arch__step" style={{ animationDelay: `${i * 90}ms` }}>
                <span className="arch__node">{node}</span>
                {i < project.architecture.length - 1 && <ChevronRight className="arch__arrow" size={18} />}
              </div>
            ))}
          </div>
        </div>

        <div className="cs__grid">
          <div className="cs__block">
            <h4>Key outcomes</h4>
            <ul className="checklist">
              {project.highlights.map((h) => <li key={h}><CheckCircle2 size={16} /> {h}</li>)}
            </ul>
          </div>
          <div className="cs__block">
            <h4>Technology stack</h4>
            <div className="tags">{project.stack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          </div>
        </div>

        <div className="cs__block">
          <h4>Screenshots</h4>
          {project.images.length ? (
            <div className="cs__shots">
              {project.images.map((src) => <img key={src} src={src} alt={`${project.title} screenshot`} loading="lazy" />)}
            </div>
          ) : (
            <div className="cs__shots-empty"><ImageIcon size={20} /> Screenshots coming soon</div>
          )}
        </div>

        <div className="cs__foot">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
            <FaGithub /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <Eyebrow>Featured Projects</Eyebrow>
            <SectionTitle plain="Engineering" accent="in depth" />
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-arrow">
            View all on GitHub <ArrowRight size={16} />
          </a>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="project glass glass--hover">
              <button className="project__btn" onClick={() => setSelected(p)} aria-label={`Open case study: ${p.title}`}>
                <div className="project__top">
                  <span className="project__icon"><Icon name={p.icon} size={26} /></span>
                  <span className="project__cat">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.tagline}</p>
                <div className="tags">
                  {p.stack.slice(0, 4).map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <span className="project__more">
                  Read case study <span className="circle-arrow"><ArrowRight size={16} /></span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <CaseStudy project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
