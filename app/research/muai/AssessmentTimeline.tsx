"use client";

import { useEffect, useState } from "react";

// DECISION PROVENANCE / STEP 07
// Entire scenario is fictional and demonstrates a proposed capability.
// It is NOT an actual historical record or a live AI/SSH integration.
const events = [
  {date:"01 OCT", label:"STATEMENT", actor:"AI AGENT", title:"Capacity risk asserted", usage:88, threshold:85, policy:"v1", verdict:"SUPPORTED", claim:"Filesystem usage exceeds the configured 85% threshold.", recommendation:"Delete old logs or migrate files to another volume.", decision:"Not yet reviewed", rationale:"The numeric claim is supported (88% > 85%), but this does not prove deletion is safe or necessary.", evidence:"SIM-001 · synthetic filesystem measurement · 88%", state:"Claim verified · Action unverified"},
  {date:"08 OCT", label:"OPERATOR REVIEW", actor:"HUMAN OPERATOR", title:"Recommendation rejected", usage:88, threshold:85, policy:"v1", verdict:"SUPPORTED", claim:"Filesystem usage exceeds the configured 85% threshold.", recommendation:"Delete old logs or migrate files to another volume.", decision:"REJECTED · No files deleted", rationale:"The operator requires retention review, growth history and available capacity before authorizing destructive actions.", evidence:"SIM-002 · simulated operator review", state:"Claim supported · Recommendation not approved"},
  {date:"15 OCT", label:"POLICY DECISION", actor:"HUMAN OPERATOR", title:"Threshold revision proposed", usage:88, threshold:90, policy:"v2", verdict:"REFUTED", claim:"Filesystem usage exceeds the configured 90% threshold.", recommendation:"Review retention and capacity policy instead of deleting files.", decision:"CONDITIONAL · v2 proposed", rationale:"Illustrative capacity review proposes 90%; real adoption would require documented evidence, approver and effective date. Changing the threshold does not resolve capacity risk.", evidence:"SIM-003 · hypothetical policy review; no real approval", state:"v1 preserved · v2 hypothetical"},
  {date:"22 OCT", label:"REASSESSMENT", actor:"µAI / PROPOSED", title:"Two conclusions preserved", usage:88, threshold:90, policy:"v2", verdict:"REFUTED", claim:"Filesystem usage exceeds the configured threshold.", recommendation:"Continue observation; assess growth, retention and free-space needs before action.", decision:"NO AUTOMATIC ACTION", rationale:"At 88%: v1 (85%) is SUPPORTED; v2 (90%) is REFUTED. Neither verdict independently establishes whether deleting logs is appropriate.", evidence:"SIM-004 · synthetic comparison of v1 and v2", state:"Both policy contexts retained"},
] as const;

export default function AssessmentTimeline() {
  const [active, setActive] = useState(0);
  // STEP 08 AUTOPLAY: advance every 7 seconds; pause while user interacts.
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing || paused) return;
    const timer = window.setInterval(() => {
      setActive(i => (i + 1) % events.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [playing, paused, active]);
  const event = events[active];
  return (
    <section className="muai-hero-workbench muai-timeline muai-decision" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }} aria-label="Carrusel conceptual de procedencia de decisiones de µAI">
      <div className="muai-wb-top"><span><b>µ</b>AI / DECISION WORKBENCH</span><span className="muai-wb-dot">● SIMULATED</span></div>
      <div className="muai-wb-flow"><span>OPERATOR</span><i>↔</i><strong>µAI</strong><i>↔</i><span>AI AGENT</span></div>
      <div className="muai-timeline-heading"><div><span className="muai-wb-eyebrow">FILESYSTEM / DECISION PROVENANCE</span><h2>WHY WAS THIS DECIDED?</h2></div><span className="muai-timeline-policy">{event.policy.toUpperCase()}</span></div>
      <div className="muai-decision-event"><span>{event.date} / {event.label}</span><strong>{event.actor}</strong><h3>{event.title}</h3></div>
      <div className="muai-decision-measures"><div><small>USAGE</small><strong>{event.usage}%</strong></div><div><small>THRESHOLD</small><strong>{event.threshold}%</strong></div><div><small>CLAIM ASSESSMENT</small><strong className={event.verdict === "SUPPORTED" ? "muai-timeline-warn" : "muai-timeline-ok"}>{event.verdict}</strong></div></div>
      <div className="muai-timeline-meter" aria-label={`Uso ${event.usage} por ciento, umbral ${event.threshold} por ciento`}><div className="muai-timeline-usage" style={{width:`${event.usage}%`}}/><div className="muai-timeline-limit" style={{left:`${event.threshold}%`}}><span>{event.threshold}%</span></div></div>
      <div className="muai-decision-detail"><div><small>STATEMENT / CLAIM</small><p>{event.claim}</p></div><div><small>AI RECOMMENDATION</small><p>{event.recommendation}</p></div><div><small>OPERATOR / POLICY DECISION</small><p>{event.decision}</p></div><div className="muai-decision-reason"><small>µAI ASSESSMENT / WHY</small><p>{event.rationale}</p></div></div>
      <div className="muai-decision-evidence"><span>{event.evidence}</span><span>{event.state}</span></div>
      <div className="muai-timeline-controls"><button type="button" onClick={()=>setActive(i=>(i-1+events.length)%events.length)} aria-label="Momento anterior">← PREV</button><span>{String(active+1).padStart(2,"0")} / {String(events.length).padStart(2,"0")}</span><button type="button" onClick={()=>setActive(i=>(i+1)%events.length)} aria-label="Momento siguiente">NEXT →</button></div>
      <button type="button" onClick={() => setPlaying(v => !v)} aria-label={playing ? "Pausar carrusel automático" : "Reanudar carrusel automático"} style={{marginTop: "12px", background: "transparent", border: "1px solid #678277", color: "inherit", padding: "7px 12px", cursor: "pointer", font: "inherit"}}>{playing ? "Ⅱ PAUSE AUTO" : "▶ PLAY AUTO"} · 7s</button>
      <div className="muai-timeline-points" aria-label="Seleccionar etapa de decisión">{events.map((item,index)=><button key={item.date} type="button" aria-pressed={active===index} onClick={()=>setActive(index)}><span>{item.date}</span><i className={item.label === "POLICY DECISION" ? "muai-timeline-change" : ""}/></button>)}</div>
      <p className="muai-wb-caption">SCENARIO SIMULADO · Datos, recomendaciones, operadores y cambios de política ficticios. La implementación actual de µAI no registra todavía este ciclo completo de decisiones ni autoriza acciones.</p>
    </section>
  );
}
