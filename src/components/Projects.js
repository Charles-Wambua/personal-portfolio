import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
  Lock,
  UserRound,
} from "lucide-react";
import { PROJECTS } from "./data";
import "./css/Projects.css";

const CATEGORIES = ["All", ...new Set(PROJECTS.map((p) => p.category))];

const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};

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
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

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
          Products I've designed, built, and shipped across full-stack
          platforms, mobile apps, and cloud infrastructure.
        </p>
      </motion.div>

      <div className="projects__filters" role="tablist" aria-label="Filter projects">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            className={`projects__filter ${filter === c ? "is-active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
            <span className="projects__filter-count">
              {c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        className="projects__grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => {
            const host = hostOf(project.link);
            return (
              <motion.article
                layout
                className={`project glass ${i === 0 ? "project--featured" : ""}`}
                key={project.id}
                custom={i}
                variants={reveal}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                onClick={() => open(project)}
                onKeyDown={(e) => e.key === "Enter" && open(project)}
                tabIndex={0}
                aria-label={`${project.title}: open case study`}
              >
                <div className="project__stage">
                  <div className="project__stack">
                  {project.images[1] && (
                    <div className="project__frame project__frame--back" aria-hidden="true">
                      <img src={project.images[1]} alt="" loading="lazy" decoding="async" />
                    </div>
                  )}
                  <div className="project__frame">
                    <div className="project__chrome">
                      <span className="project__dots">
                        <i /> <i /> <i />
                      </span>
                      <span className="project__url">
                        {host ? <Globe size={11} /> : <Lock size={11} />}
                        {host || "private build"}
                      </span>
                    </div>
                    <div className="project__shot">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  </div>
                </div>

                <div className="project__body">
                  <div className="project__meta">
                    <span>
                      <span className="project__index">
                        {String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}
                      </span>
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__desc">{project.description}</p>
                  {project.role && (
                    <span className="project__role">
                      <UserRound size={13} /> {project.role}
                    </span>
                  )}
                  <div className="project__tags">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="chip">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  <div className="project__actions">
                    <span className="project__cta">
                      Read case study <ArrowRight size={16} />
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__live"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
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
