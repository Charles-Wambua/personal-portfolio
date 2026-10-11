import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MapPin } from "lucide-react";
import { EXPERIENCES } from "./data";
import "./css/Experiences.css";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Experience = () => {
  const [openId, setOpenId] = useState(EXPERIENCES[0]?.id ?? null);

  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <section className="section experience" id="experience">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={reveal}
      >
        <span className="section-eyebrow">Career</span>
        <h2 className="section-title">Professional experience</h2>
        <p className="section-lead">
          Seven-plus years across startups, scale-ups, and pan-African engineering
          teams, shipping production systems end to end.
        </p>
      </motion.div>

      <motion.ol
        className="timeline"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {EXPERIENCES.map((exp, i) => {
          const open = openId === exp.id;
          return (
            <motion.li
              className={`timeline__item ${open ? "is-open" : ""}`}
              key={exp.id}
              custom={i}
              variants={reveal}
            >
              <span className="timeline__node" />
              <div className="timeline__card glass">
                <button
                  className="timeline__head"
                  onClick={() => toggle(exp.id)}
                  aria-expanded={open}
                >
                  <div className="timeline__head-main">
                    <h3 className="timeline__role">{exp.title}</h3>
                    <span className="timeline__company">{exp.company}</span>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{exp.period}</span>
                    <span className="timeline__loc">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                  <span className={`timeline__toggle ${open ? "open" : ""}`}>
                    <Plus size={18} />
                  </span>
                </button>

                <p className="timeline__summary">{exp.summary}</p>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="timeline__details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="timeline__detail-text">{exp.details}</p>

                      <ul className="timeline__achievements">
                        {exp.achievements.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>

                      <div className="timeline__tags">
                        {exp.technologies.map((t) => (
                          <span className="chip" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
};

export default Experience;
