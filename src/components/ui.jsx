import { useInView } from "../hooks";

/** Fades + slides children in when scrolled into view. */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** The purple-dash eyebrow label used across sections ("— About Me"). */
export function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow__line" />
      {children}
    </div>
  );
}

export function SectionTitle({ plain, accent, className = "" }) {
  return (
    <h2 className={`section-title ${className}`}>
      {plain} {accent && <span className="grad-text">{accent}</span>}
    </h2>
  );
}
