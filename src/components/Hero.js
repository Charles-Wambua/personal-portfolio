import { Fragment } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDownRight,
  Braces,
  Network,
  Wallet,
  LayoutTemplate,
  Cloud,
  Sparkles,
} from "lucide-react";
import { SOCIALS, STATS } from "./data";
import "./css/Hero.css";

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const STRENGTHS = [
  { icon: <Braces size={16} />, label: "APIs & backend services" },
  { icon: <Network size={16} />, label: "Distributed systems" },
  { icon: <LayoutTemplate size={16} />, label: "Web & mobile frontends" },
  { icon: <Wallet size={16} />, label: "Payments & USSD" },
  { icon: <Cloud size={16} />, label: "Cloud & DevOps" },
  { icon: <Sparkles size={16} />, label: "AI-powered features" },
];

// Rendered as syntax-highlighted JSON. Array values wrap onto their own lines.
const STATUS = [
  ["role", "Software Engineer · Full Stack"],
  ["company", "Spiro"],
  ["backend", "Java · Spring · Python · Node"],
  ["frontend", "React · Next.js · Flutter"],
  ["platform", "Kafka · K8s · GCP · AWS"],
  ["rails", ["M-Pesa", "MTN MoMo", "Airtel Money", "T-Money", "Moov Money", "TNM Mpamba"]],
  ["location", "Nairobi, Kenya 🇰🇪"],
  ["open_to_work", true],
];

const Value = ({ value }) => {
  if (typeof value === "boolean") return <span className="tok-bool">{String(value)}</span>;
  if (!Array.isArray(value)) return <span className="tok-str">"{value}"</span>;
  // Wrap long arrays three-per-line to keep the card narrow.
  const rows = [];
  for (let i = 0; i < value.length; i += 3) rows.push(value.slice(i, i + 3));
  const inline = rows.length === 1;
  return (
    <>
      <span className="tok-punc">[</span>
      {rows.map((row, r) => (
        <Fragment key={r}>
          {!inline && "\n    "}
          {row.map((v, i) => (
            <Fragment key={v}>
              <span className="tok-str">"{v}"</span>
              {(r < rows.length - 1 || i < row.length - 1) && (
                <span className="tok-punc">, </span>
              )}
            </Fragment>
          ))}
        </Fragment>
      ))}
      {!inline && "\n  "}
      <span className="tok-punc">]</span>
    </>
  );
};

const Hero = () => {
  return (
    <section className="hero section" id="top">
      <div className="hero__grid">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span className="hero__badge" variants={fade(0)}>
            <span className="hero__status-dot" />
            Available for select projects
          </motion.span>

          <motion.h1 className="hero__title" variants={fade(0.05)}>
            Charles Wambua
          </motion.h1>

          <motion.div className="hero__role" variants={fade(0.1)}>
            <TypeAnimation
              sequence={[
                "Full-Stack Software Engineer",
                2200,
                "Backend & API Engineer",
                2200,
                "Distributed Systems Engineer",
                2200,
                "React & Flutter Developer",
                2200,
                "Payments Platform Engineer",
                2200,
                "Cloud & DevOps Engineer",
                2200,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              cursor
            />
          </motion.div>

          <motion.p className="hero__lead" variants={fade(0.15)}>
            I design and build software end to end: clean, well-documented
            APIs and backend services, event-driven distributed systems, fast
            React and Flutter frontends, and the cloud platforms underneath. My
            deepest work is in fintech, orchestrating six mobile-money rails
            across Africa.
          </motion.p>

          <motion.ul className="hero__strengths" variants={fade(0.18)}>
            {STRENGTHS.map((s) => (
              <li key={s.label}>
                <span className="hero__strength-icon">{s.icon}</span>
                {s.label}
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero__cta" variants={fade(0.2)}>
            <a href="#architecture" className="btn btn-primary">
              See the architecture <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch <ArrowDownRight size={18} />
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={fade(0.25)}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social"
                aria-label={s.label}
              >
                <i className={s.icon} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero__aside"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__card glass">
            <div className="hero__card-head">
              <span className="hero__dots">
                <i /> <i /> <i />
              </span>
              <span className="hero__card-title">status.json</span>
            </div>
            <pre className="hero__code">
              <code>
                <span className="tok-punc">{"{"}</span>
                {STATUS.map(([key, value], i) => (
                  <Fragment key={key}>
                    {"\n  "}
                    <span className="tok-key">"{key}"</span>
                    <span className="tok-punc">: </span>
                    <Value value={value} />
                    {i < STATUS.length - 1 && <span className="tok-punc">,</span>}
                  </Fragment>
                ))}
                {"\n"}
                <span className="tok-punc">{"}"}</span>
              </code>
            </pre>
          </div>

          <div className="hero__stats">
            {STATS.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <span className="hero__stat-num">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
