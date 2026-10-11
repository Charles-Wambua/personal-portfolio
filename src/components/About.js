import { motion } from "framer-motion";
import { Network, Braces, LayoutTemplate, Cloud } from "lucide-react";
import "./css/About.css";

const HIGHLIGHTS = [
  {
    icon: <Network size={22} />,
    title: "Architecture & System Design",
    body: "I turn ambiguous business problems into clear service boundaries, data models, and trade-offs. Documented, reviewed, and built to evolve.",
  },
  {
    icon: <Braces size={22} />,
    title: "APIs & Distributed Backends",
    body: "Contract-first REST, gRPC and GraphQL APIs in Spring Boot, FastAPI and Node, with Kafka-driven workflows where consistency matters.",
  },
  {
    icon: <LayoutTemplate size={22} />,
    title: "Web & Mobile Frontends",
    body: "React, Next.js and Flutter interfaces that are fast, accessible, and wired cleanly to the APIs behind them.",
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud, Platform & Reliability",
    body: "Kubernetes, Terraform and GitOps on GCP & AWS, with SLOs, tracing and alerting so production stays boring.",
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
          I solve the problems that break at scale
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
            I'm a full-stack software engineer. I build{" "}
            <strong>APIs and backend services</strong>,{" "}
            <strong>distributed, event-driven systems</strong>,{" "}
            <strong>web and mobile frontends</strong>, and the{" "}
            <strong>cloud platforms</strong> they run on, and I'm most useful
            where those pieces meet.
          </p>
          <p>
            At <strong>Spiro</strong> I build Java/Spring Boot and Python
            microservices that orchestrate payments and onboarding across
            multiple African markets. I integrate M-Pesa, MTN MoMo, Airtel
            Money, T-Money, Moov Money, and TNM Mpamba behind one idempotent,
            event-driven platform on Kafka, Redis, and Kubernetes, with USSD and
            SMS journeys delivered through Africa's Talking.
          </p>
          <p>
            Seven-plus years across startups, scale-ups, and Gebeya's
            pan-African talent network taught me to own the whole lifecycle:
            architecture, code, infrastructure, and the on-call pager. I also
            build with AI: LLM-powered features, RAG pipelines, and agentic
            tooling that make teams measurably faster.
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
