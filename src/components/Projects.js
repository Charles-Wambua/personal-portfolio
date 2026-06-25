import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PROJECTS } from "./data";
import "./css/Projects.css";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [slide, setSlide] = useState(0);

  const open = (project) => {
    setSelected(project);
    setSlide(0);
  };
  const close = () => setSelected(null);

  const next = () =>
    setSlide((s) => (s + 1) % selected.images.length);
  const prev = () =>
    setSlide((s) => (s - 1 + selected.images.length) % selected.images.length);

  // Lock scroll + handle keyboard while modal is open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <section className="section projects" id="work">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={reveal}
      >
        <span className="section-eyebrow">Selected work</span>
        <h2 className="section-title">Projects &amp; case studies</h2>
        <p className="section-lead">
          A selection of products I've designed, built, and shipped — across
          full-stack platforms, mobile apps, and cloud infrastructure.
        </p>
      </motion.div>

      <motion.div
        className="projects__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PROJECTS.map((project, i) => (
          <motion.article
            className="project glass"
            key={project.id}
            custom={i}
            variants={reveal}
            onClick={() => open(project)}
          >
            <div className="project__media">
              <img
                src={project.images[0]}
                alt={`${project.title} — ${project.category} project screenshot`}
                loading="lazy"
                decoding="async"
              />
              <span className="project__category">{project.category}</span>
              <span className="project__view">
                View case study <ArrowUpRight size={16} />
              </span>
            </div>
            <div className="project__body">
              <div className="project__head">
                <h3 className="project__title">{project.title}</h3>
                <span className="project__year">{project.year}</span>
              </div>
              <p className="project__desc">{project.description}</p>
              <div className="project__tags">
                {project.technologies.slice(0, 4).map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="chip">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="modal glass"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal__close" onClick={close} aria-label="Close">
                <X size={20} />
              </button>

              <div className="modal__gallery">
                <img
                  src={selected.images[slide]}
                  alt={`${selected.title} screenshot ${slide + 1}`}
                />
                {selected.images.length > 1 && (
                  <>
                    <button
                      className="modal__nav modal__nav--prev"
                      onClick={prev}
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="modal__nav modal__nav--next"
                      onClick={next}
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="modal__dots">
                      {selected.images.map((_, idx) => (
                        <button
                          key={idx}
                          className={`modal__dot ${idx === slide ? "active" : ""}`}
                          onClick={() => setSlide(idx)}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="modal__body">
                <div className="modal__head">
                  <div>
                    <span className="modal__category">{selected.category}</span>
                    <h3 className="modal__title">{selected.title}</h3>
                    {selected.role && (
                      <span className="modal__role">
                        {selected.role} · {selected.year}
                      </span>
                    )}
                  </div>
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary modal__visit"
                    >
                      Live site <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                {selected.metrics?.length > 0 && (
                  <div className="modal__metrics">
                    {selected.metrics.map((m) => (
                      <div className="modal__metric" key={m.label}>
                        <span className="modal__metric-value">{m.value}</span>
                        <span className="modal__metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="case">
                  {selected.problem && (
                    <div className="case__block">
                      <h4 className="case__label">The challenge</h4>
                      <p>{selected.problem}</p>
                    </div>
                  )}
                  {selected.approach && (
                    <div className="case__block">
                      <h4 className="case__label">What I built</h4>
                      <p>{selected.approach}</p>
                    </div>
                  )}
                  {selected.outcomes?.length > 0 && (
                    <div className="case__block">
                      <h4 className="case__label">Impact</h4>
                      <ul className="case__outcomes">
                        {selected.outcomes.map((o) => (
                          <li key={o}>{o}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="modal__tags">
                  {selected.technologies.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
