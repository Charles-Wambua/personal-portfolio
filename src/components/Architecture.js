import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Play, Pause, RotateCcw } from "lucide-react";
import { ARCH_SCENARIOS, ARCH_PLATFORM, PATTERNS } from "./data";
import "./css/Architecture.css";

const STEP_MS = 2200;

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Architecture = () => {
  const boardRef = useRef(null);
  const inView = useInView(boardRef, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();

  const [scenarioId, setScenarioId] = useState(ARCH_SCENARIOS[0].id);
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(false);

  const scenario = ARCH_SCENARIOS.find((s) => s.id === scenarioId);
  const flow = scenario.flow;

  const selectScenario = (id) => {
    if (id === scenarioId) return;
    setScenarioId(id);
    setStep(reduceMotion ? -1 : 0);
    setPlaying(!reduceMotion);
  };

  // Auto-play the trace the first time the board scrolls into view.
  useEffect(() => {
    if (inView && !reduceMotion) {
      setStep(0);
      setPlaying(true);
    }
  }, [inView, reduceMotion]);

  useEffect(() => {
    if (!playing) return undefined;
    if (step >= flow.length - 1) {
      setPlaying(false);
      return undefined;
    }
    const id = setTimeout(() => setStep((s) => s + 1), STEP_MS);
    return () => clearTimeout(id);
  }, [playing, step, flow]);

  const finished = step >= flow.length - 1 && !playing;

  const onPlayToggle = () => {
    if (playing) return setPlaying(false);
    if (step < 0 || finished) setStep(0);
    setPlaying(true);
  };

  const onReset = () => {
    setPlaying(false);
    setStep(-1);
  };

  const jumpTo = (i) => {
    setPlaying(false);
    setStep(i);
  };

  const active = useMemo(
    () => new Set(step >= 0 ? flow[step].nodes : []),
    [step, flow]
  );
  const visited = useMemo(
    () => new Set(flow.slice(0, Math.max(step, 0)).flatMap((s) => s.nodes)),
    [step, flow]
  );

  const progress = step < 0 ? 0 : ((step + 1) / flow.length) * 100;
  const total = flow[flow.length - 1].t;

  return (
    <section className="section arch" id="architecture">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={reveal}
      >
        <span className="section-eyebrow">Architecture</span>
        <h2 className="section-title">How I design systems</h2>
        <p className="section-lead">
          Three reference architectures, representative of what I build: an
          API platform, a payments platform, and a modern web frontend. Pick
          one, replay a request, and see the decision behind each hop.
        </p>
      </motion.div>

      <motion.div
        className="arch__board glass"
        ref={boardRef}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={reveal}
      >
        <div className="arch__tabs" role="tablist" aria-label="Architecture scenario">
          {ARCH_SCENARIOS.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === scenarioId}
              className={`arch__tab ${s.id === scenarioId ? "is-active" : ""}`}
              onClick={() => selectScenario(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="arch__toolbar">
          <span className="arch__file">
            <span className="arch__live" data-on={playing} />
            trace · {scenario.trace}
          </span>
          <div className="arch__controls">
            <button
              className="arch__btn"
              onClick={onPlayToggle}
              aria-label={playing ? "Pause trace" : "Play trace"}
            >
              {playing ? <Pause size={15} /> : <Play size={15} />}
              {playing ? "Pause" : finished ? "Replay" : "Play"}
            </button>
            <button className="arch__btn arch__btn--icon" onClick={onReset} aria-label="Reset trace">
              <RotateCcw size={15} />
            </button>
          </div>
        </div>

        <div className="arch__progress">
          <span style={{ width: `${progress}%` }} />
        </div>

        <motion.div
          className="arch__layers"
          key={scenario.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {scenario.layers.map((layer) => (
            <div className="arch__layer" key={layer.title}>
              <span className="arch__layer-title">{layer.title}</span>
              <div className={`arch__nodes ${layer.compact ? "arch__nodes--compact" : ""}`}>
                {layer.nodes.map((n) => {
                  const state = active.has(n.id)
                    ? "is-active"
                    : visited.has(n.id)
                    ? "is-visited"
                    : "";
                  return (
                    <div className={`arch__node ${state}`} key={n.id}>
                      <span className="arch__node-label">{n.label}</span>
                      <span className="arch__node-sub">{n.sub}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="arch__platform">
          <span className="arch__platform-title">Runs on</span>
          {ARCH_PLATFORM.map((p) => (
            <span className="arch__platform-item" key={p.label}>
              <strong>{p.label}</strong> {p.sub}
            </span>
          ))}
        </div>

        <ol className="arch__trace">
          {flow.map((s, i) => {
            const state = i === step ? "is-current" : i < step ? "is-done" : "";
            return (
              <li key={s.title} className={`arch__span ${state}`}>
                <button onClick={() => jumpTo(i)} aria-current={i === step}>
                  <span className="arch__span-t">
                    {String(i + 1).padStart(2, "0")} · +{s.t}ms
                  </span>
                  <span className="arch__span-title">{s.title}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="arch__detail" aria-live="polite">
          {step >= 0 ? (
            <>
              <span className="arch__detail-title">{flow[step].title}</span>
              <p>{flow[step].detail}</p>
            </>
          ) : (
            <p className="arch__detail-idle">
              Press play, or pick any span, to walk the request path.
            </p>
          )}
        </div>
        <p className="arch__trace-foot">
          {flow.length} spans · end-to-end ≈{" "}
          {total < 1000 ? `${total}ms` : `${(total / 1000).toFixed(1)}s`}. {scenario.note}
        </p>
      </motion.div>

      <motion.div
        className="arch__patterns"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PATTERNS.map((p, i) => (
          <motion.div className="arch__pattern glass" key={p.title} custom={i} variants={reveal}>
            <span className="arch__pattern-icon">
              <i className={p.icon} />
            </span>
            <h3 className="arch__pattern-title">{p.title}</h3>
            <p className="arch__pattern-body">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
