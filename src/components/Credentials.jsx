import { certifications, education, leadership } from "../data/content";
import Icon from "./Icon";
import { Eyebrow, Reveal, SectionTitle } from "./ui";

export default function Credentials() {
  return (
    <section id="credentials" className="section credentials">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <Eyebrow>Education, Certifications & Leadership</Eyebrow>
            <SectionTitle plain="Credibility," accent="earned" />
          </div>
          <p className="section-head__aside">
            Graduate-level depth in cloud and software engineering, backed by certification and a history of leading
            and teaching others.
          </p>
        </Reveal>

        <div className="cred__top">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100} className="cred-card glass">
              <span className="cred-card__icon"><Icon name={e.icon} size={28} /></span>
              <div>
                <h3>{e.degree}</h3>
                <p className="cred-card__org">{e.school} · {e.location}</p>
                <p className="cred-card__detail">{e.detail}</p>
              </div>
            </Reveal>
          ))}
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={200 + i * 100} className="cred-card cred-card--cert glass">
              <span className="cred-card__icon cred-card__icon--warm"><Icon name={c.icon} size={28} /></span>
              <div>
                <h3>{c.title}</h3>
                <p className="cred-card__org">{c.org}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="leadership">
          {leadership.map((l, i) => (
            <Reveal key={l.title} delay={i * 90} className="lead-card glass glass--hover">
              <span className="lead-card__icon"><Icon name={l.icon} size={20} /></span>
              <h4>{l.title}</h4>
              <span className="lead-card__org">{l.org}</span>
              <p>{l.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
