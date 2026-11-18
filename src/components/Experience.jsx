import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { experience } from "../data/content";
import { Eyebrow, Reveal, SectionTitle } from "./ui";

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="section experience">
      <div className="container experience__grid">
        <Reveal className="experience__intro">
          <Eyebrow>Experience</Eyebrow>
          <SectionTitle plain="The story," accent="not just titles" />
          <p className="lead">
            From shipping consumer features to millions of users in India, to automating cloud delivery pipelines in
            Canada — each role pushed me further down the stack and closer to production.
          </p>
          <div className="exp-metrics">
            <div><strong>3M+</strong><span>daily users served</span></div>
            <div><strong>30%</strong><span>faster load times</span></div>
            <div><strong>20%</strong><span>accuracy uplift</span></div>
          </div>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={job.company} delay={i * 120} className={`timeline__item ${isOpen ? "is-open" : ""}`}>
                <span className="timeline__dot" />
                <div className="timeline__card glass">
                  <button className="timeline__head" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <div>
                      <span className="timeline__period">{job.period}</span>
                      <h3>{job.role}</h3>
                      <p className="timeline__company">
                        {job.company} <span>·</span> <MapPin size={13} /> {job.location}
                      </p>
                    </div>
                    <ChevronDown className="timeline__chev" size={20} />
                  </button>
                  <p className="timeline__headline">{job.headline}</p>
                  <div className="timeline__body">
                    <div>
                      <ul>
                        {job.highlights.map((h) => <li key={h}>{h}</li>)}
                      </ul>
                      <div className="tags">
                        {job.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
