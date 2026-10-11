import { useId } from "react";
import "./css/Logo.css";

// Monogram: an open "C" interlocked with a "W" drawn as a signal trace, its
// vertices as service nodes. Colors come from the theme tokens.
export const LogoMark = ({ size = 38 }) => {
  const id = useId();
  return (
    <svg
      className="logo__mark"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: "var(--accent)" }} />
          <stop offset="1" style={{ stopColor: "var(--accent-strong)" }} />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${id}-bg)`} />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="10.5"
        fill="none"
        stroke="rgba(255,255,255,0.22)"
      />
      <path
        d="M19.4 13.4 A7.6 7.6 0 1 0 19.4 26.6"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <polyline
        points="17.5,15.5 21.25,25.5 25,18.5 28.75,25.5 32.5,15.5"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.92"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25" cy="18.5" r="1.9" fill="#fff" />
      <circle cx="32.5" cy="15.5" r="1.5" fill="#86efac" />
    </svg>
  );
};

export const Logo = ({ tagline = "full-stack · systems", size }) => (
  <span className="logo">
    <LogoMark size={size} />
    <span className="logo__text">
      <span className="logo__name">Charles Wambua</span>
      {tagline && <span className="logo__tagline">{tagline}</span>}
    </span>
  </span>
);
