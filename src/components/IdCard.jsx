import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Mail, RotateCw, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Icon from "./Icon";
import { profile } from "../data/content";

const cardSkills = [
  { name: "React", icon: "SiReact" },
  { name: "Java", icon: "FaJava" },
  { name: "Spring Boot", icon: "SiSpringboot" },
  { name: "AWS", icon: "FaAws" },
  { name: "GCP", icon: "SiGooglecloud" },
  { name: "Docker", icon: "SiDocker" },
  { name: "Kubernetes", icon: "SiKubernetes" },
  { name: "LangChain", icon: "SiLangchain" },
];

/**
 * 3D flipping ID card.
 *  • Tilts toward the cursor (parallax)
 *  • Click / Enter / Space flips it
 *  • Floats gently on its lanyard when idle
 */
export default function IdCard() {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const wrap = useRef(null);

  const onMove = (e) => {
    const r = wrap.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 14, y: px * 18 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });
  const flip = () => setFlipped((f) => !f);

  return (
    <div className="idcard-zone">
      <button className="idcard__hint" onClick={flip} aria-label="Flip the ID card">
        <RotateCw size={14} /> {flipped ? "Flip back" : "Flip card"}
      </button>

      <div className="idcard__lanyard" aria-hidden="true">
        <span />
      </div>

      <div className="idcard-float">
        <div
          ref={wrap}
          className="idcard"
          onMouseMove={onMove}
          onMouseLeave={reset}
          onClick={flip}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), flip())}
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
          aria-label="Interactive ID card. Press to flip."
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (flipped ? 180 : 0)}deg)`,
          }}
        >
          {/* FRONT */}
          <div className="idcard__face idcard__front">
            <div className="idcard__clip" />
            <div className="idcard__shine" />
            <div className="idcard__top">
              <span className="idcard__badge">ENGINEER ID</span>
              <span className="idcard__chip" />
            </div>
            <img src={profile.photo} alt="" className="idcard__photo" />
            <h3 className="idcard__name">{profile.name}</h3>
            <p className="idcard__role">Full-Stack Engineer</p>
            <p className="idcard__loc">
              <MapPin size={11} /> {profile.location}
            </p>
            <div className="idcard__qr" onClick={(e) => e.stopPropagation()}>
              <a href={profile.siteUrl} target="_blank" rel="noreferrer" aria-label="Open portfolio">
                <QRCodeSVG value={profile.siteUrl} size={78} bgColor="#ffffff" fgColor="#0b0820" level="M" />
              </a>
            </div>
            <p className="idcard__scan">Scan to view my portfolio</p>
          </div>

          {/* BACK */}
          <div className="idcard__face idcard__back">
            <div className="idcard__clip" />
            <div className="idcard__shine" />
            <div className="idcard__back-head">
              <span className="eyebrow__line" /> Core Stack
            </div>
            <ul className="idcard__skills">
              {cardSkills.map((s) => (
                <li key={s.name}>
                  <Icon name={s.icon} size={15} /> {s.name}
                </li>
              ))}
            </ul>
            <div className="idcard__cert">
              <Icon name="FaAws" size={22} />
              <div>
                <strong>AWS Certified</strong>
                <span>Solutions Architect – Associate</span>
              </div>
            </div>
            <div className="idcard__socials" onClick={(e) => e.stopPropagation()}>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
