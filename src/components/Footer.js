import { ArrowUp } from "lucide-react";
import { SOCIALS } from "./data";
import { Logo } from "./Logo";
import "./css/Footer.css";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "architecture", label: "Architecture" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <a href="#top" className="footer__brand">
            <Logo size={44} tagline="Software engineer · Nairobi, KE" />
          </a>

          <nav className="footer__nav">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#top" className="footer__top-btn" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>

        <div className="footer__bottom">
          <p className="footer__credit">
            © {year} Charles Wambua. Designed &amp; built with React.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
