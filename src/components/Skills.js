import { motion } from "framer-motion";
import { SKILL_GROUPS } from "./data";
import "./css/Skills.css";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={reveal}
      >
        <span className="section-eyebrow">Toolbox</span>
        <h2 className="section-title">Capabilities &amp; stack</h2>
        <p className="section-lead">
          Organized by where it lives in the system: distributed backends,
          event streaming, mobile money and USSD, cloud platforms, AI, and
          reliability.
          <span className="skills__legend">
            <span className="chip chip--core">Highlighted</span> = core depth I lead with.
          </span>
        </p>
      </motion.div>

      <motion.div
        className="skills__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {SKILL_GROUPS.map((group, i) => (
          <motion.div
            className={`skills__card glass ${group.wide ? "skills__card--wide" : ""}`}
            key={group.title}
            custom={i}
            variants={reveal}
          >
            <div className="skills__card-head">
              <span className="skills__card-icon">
                <i className={group.icon} />
              </span>
              <h3 className="skills__card-title">{group.title}</h3>
            </div>
            <div className="skills__tags">
              {group.skills.map((skill) => (
                <span
                  className={`chip ${group.core?.includes(skill) ? "chip--core" : ""}`}
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
