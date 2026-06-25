import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight } from "lucide-react";
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
                "Backend & Cloud Engineer",
                2200,
                "Microservices Architect",
                2200,
                "Full-Stack Software Engineer",
                2200,
                "DevOps & Platform Engineer",
                2200,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              cursor
            />
          </motion.div>

          <motion.p className="hero__lead" variants={fade(0.15)}>
            I design and build scalable, high-performance systems — from
            event-driven microservices and payment orchestration to
            cloud-native infrastructure and container orchestration on
            Kubernetes. Currently optimizing high-throughput payment systems
            across multiple African markets.
          </motion.p>

          <motion.div className="hero__cta" variants={fade(0.2)}>
            <a href="#work" className="btn btn-primary">
              View my work <ArrowRight size={18} />
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
                {"\n  "}
                <span className="tok-key">"role"</span>
                <span className="tok-punc">: </span>
                <span className="tok-str">"Software Engineer"</span>,
                {"\n  "}
                <span className="tok-key">"company"</span>
                <span className="tok-punc">: </span>
                <span className="tok-str">"Spiro"</span>,
                {"\n  "}
                <span className="tok-key">"focus"</span>
                <span className="tok-punc">: </span>
                <span className="tok-str">"payments · cloud · scale"</span>,
                {"\n  "}
                <span className="tok-key">"stack"</span>
                <span className="tok-punc">: </span>
                <span className="tok-str">"Java · Spring · Kafka · K8s"</span>,
                {"\n  "}
                <span className="tok-key">"location"</span>
                <span className="tok-punc">: </span>
                <span className="tok-str">"Nairobi, Kenya 🇰🇪"</span>,
                {"\n  "}
                <span className="tok-key">"open_to_work"</span>
                <span className="tok-punc">: </span>
                <span className="tok-bool">true</span>
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
