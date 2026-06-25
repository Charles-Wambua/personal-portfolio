import { motion } from "framer-motion";
import { Cpu, Cloud, GitBranch, Activity } from "lucide-react";
import "./css/About.css";

const HIGHLIGHTS = [
  {
    icon: <Cpu size={22} />,
    title: "Distributed Systems",
    body: "Horizontally scalable, event-driven services in Java/Spring Boot and Python with Kafka-based messaging and idempotent processing.",
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud & Orchestration",
    body: "Production-grade deployments on AWS & GCP with container orchestration on Kubernetes, Docker, and infrastructure-as-code.",
  },
  {
    icon: <GitBranch size={22} />,
    title: "Platform & DevOps",
    body: "CI/CD pipelines, build automation, and deployment orchestration that keep teams shipping safely and fast.",
  },
  {
    icon: <Activity size={22} />,
    title: "Reliability & Observability",
    body: "Performance optimization and end-to-end observability with Grafana, Sentry, and OpenTelemetry for resilient systems.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const About = () => {
  return (
    <section className="section about" id="about">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={reveal}
      >
        <span className="section-eyebrow">About</span>
        <h2 className="section-title">
          Engineering systems that scale, with care
        </h2>
      </motion.div>

      <div className="about__grid">
        <motion.div
          className="about__bio"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
        >
          <p>
            I'm a Full-Stack Software Engineer focused on building scalable,
            high-performance systems. I work across backend, frontend, DevOps,
            and cloud — with deep expertise in <strong>Java</strong>,{" "}
            <strong>Spring Boot</strong>, microservices architecture, and the{" "}
            <strong>MERN / Next.js</strong> ecosystem.
          </p>
          <p>
            I design distributed, event-driven services and cloud-native
            applications using Kafka, Redis, Docker, and Kubernetes —
            engineering for throughput, fault tolerance, and horizontal scale.
            On the cloud side, I ship secure, production-grade deployments on
            AWS and GCP, orchestrate containers, and build the CI/CD pipelines
            and observability that keep them reliable.
          </p>
          <p>
            Whether it's API design, frontend experiences, or platform
            engineering, I'm driven by solving complex problems and delivering
            clean, maintainable solutions.
          </p>
        </motion.div>

        <motion.div
          className="about__highlights"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              className="about__card glass"
              key={h.title}
              custom={i}
              variants={reveal}
            >
              <span className="about__card-icon">{h.icon}</span>
              <h3 className="about__card-title">{h.title}</h3>
              <p className="about__card-body">{h.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
