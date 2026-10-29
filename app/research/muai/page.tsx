import AssessmentTimeline from "./AssessmentTimeline";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "µAI — Research & Engineering | MUNOP",
  description: "µAI investiga una capa de evidencia y verificación entre un operador humano y un agente de IA. Prototipo experimental de MUNOP.",
};

const process = [
  ["01", "COLLECT", "Recopilar mediciones técnicas desde una fuente definida."],
  ["02", "ASSESS", "Evaluar una afirmación explícita con reglas reproducibles."],
  ["03", "PRESERVE", "Guardar el reporte y un manifiesto SHA-256 de consistencia local."],
  ["04", "REVALIDATE", "Reabrir la evidencia, comprobar integridad y recalcular el resultado."],
];

export default function MuAIResearchPage() {
  return (
    <main className="muai-page">
      <header className="muai-page-header">
        <Link className="logo" href="/" aria-label="MUNOP inicio"><b>µ</b>NOP</Link>
        <span>MUNOP / RESEARCH &amp; ENGINEERING</span>
        <Link className="muai-back" href="/">← VOLVER A MUNOP</Link>
      </header>

      <section className="muai-page-hero">
        <div className="muai-page-topline"><span>EXPERIMENTAL PLATFORM / µAI</span><span>WORKING PROTOTYPE</span></div>
        <div className="muai-hero-intro-grid">
          <div className="muai-hero-copy">
            <div className="muai-hero-brand">
              <p className="kicker">MUNOP / ENGINEERING RESEARCH</p>
              <h1>µAI<span>.</span></h1>
            </div>
            <h2>BETWEEN HUMAN INTENT<br /><em>AND AI OUTPUT.</em></h2>
            <p className="muai-page-intro">µAI explora una capa de verificación entre un operador humano y un agente de IA. El operador define el objetivo; el agente propone una respuesta; µAI ayuda a contrastar afirmaciones explícitas con evidencia registrada antes de presentarlas como conclusiones revisables.</p>
            <div className="muai-page-tags"><span>.NET 8</span><span>LINUX</span><span>SSH</span><span>EVIDENCE VALIDATION</span></div>
          </div>
          <div className="muai-hero-timeline"><AssessmentTimeline /></div>
        </div>
      </section>
      <section className="muai-boundary-band" aria-label="Arquitectura conceptual de µAI">
        <div className="muai-boundary-band-inner">
        <div className="muai-boundary" aria-label="Diagrama conceptual: operador humano, capa de verificación µAI y agente de IA">
          <div className="muai-boundary-heading"><span>SYSTEM POSITION / CONCEPTUAL ARCHITECTURE</span><span>HUMAN ↔ µAI ↔ AI</span></div>
          <div className="muai-boundary-grid">
            <div className="muai-boundary-node"><span>01 / HUMAN</span><strong>OPERADOR</strong><p>Define el objetivo, autoriza las acciones y revisa la decisión.</p></div>
            <div className="muai-boundary-link" aria-hidden="true">↔</div>
            <div className="muai-boundary-node muai-boundary-node--core"><span>02 / EVIDENCE BOUNDARY</span><strong>µAI</strong><p>Registra evidencia, comprueba afirmaciones explícitas y señala límites.</p></div>
            <div className="muai-boundary-link" aria-hidden="true">↔</div>
            <div className="muai-boundary-node"><span>03 / INTELLIGENCE</span><strong>AI AGENT</strong><p>Propone interpretaciones y respuestas sujetas a revisión.</p></div>
          </div>
          <p className="muai-boundary-caveat">Arquitectura objetivo de investigación. El prototipo actual valida un flujo acotado de evidencia Linux; no implementa todavía un intermediario universal entre personas y agentes.</p>
        </div>
        </div>
      </section>

      <section className="muai-page-proof" aria-labelledby="muai-proof-title">
        <div><p className="kicker">PROOF / 001</p><h2 id="muai-proof-title">A REAL SYSTEM.<br /><em>A CHECKABLE RESULT.</em></h2><p>El primer flujo funcional evalúa el uso del sistema de archivos raíz de un equipo Linux remoto mediante SSH. La afirmación se compara con mediciones guardadas y puede verificarse nuevamente desde un reporte histórico.</p></div>
        <div className="muai-proof-panel">
          <div className="muai-terminal-bar"><span>µNOP / EVIDENCE</span><span>LINUX FILESYSTEM</span></div>
          <dl>
            <div><dt>FILESYSTEM</dt><dd>btrfs</dd></div>
            <div><dt>MEASURED USAGE</dt><dd>3.72%</dd></div>
            <div><dt>THRESHOLD</dt><dd>85%</dd></div>
            <div><dt>ASSESSMENT</dt><dd className="muai-result">REFUTED</dd></div>
            <div><dt>LOCAL SHA-256</dt><dd>MATCH</dd></div>
          </dl>
          <p>Valores de una ejecución real de desarrollo; se omiten identificadores y direcciones privadas.</p>
        </div>
      </section>

      <section className="muai-page-process" aria-labelledby="muai-process-title">
        <p className="kicker">HOW IT WORKS</p>
        <h2 id="muai-process-title">FROM OBSERVATION<br />TO VALIDATION.</h2>
        <div className="muai-process-grid">{process.map(([number, name, description]) => <article key={number}><span>{number}</span><h3>{name}</h3><p>{description}</p></article>)}</div>
      </section>

      <section className="muai-page-results">
        <div><p className="kicker">VALIDATION / CURRENT STATUS</p><h2>NOT JUST A<br /><em>GREEN CHECKMARK.</em></h2></div>
        <div><p>El prototipo ha superado 253 pruebas automatizadas y una verificación manual de tres escenarios negativos en el navegador: JSON alterado, manifiesto ausente y conclusión falsificada con hash regenerado.</p><p>En esos escenarios, el visor rechaza la validación y no presenta la conclusión como confiable.</p><p><strong>Límites:</strong> la coincidencia SHA-256 comprueba consistencia local, no autenticidad independiente. µAI sigue siendo un prototipo experimental, no un servicio de producción ni un agente general de IA validado.</p></div>
      </section>

      <section className="muai-page-contact"><p className="kicker">MUNOP / OPEN CONVERSATION</p><h2>BUILDING WITH<br /><span>EVIDENCE.</span></h2><p>¿Te interesa la validación técnica, la ingeniería de software o el futuro de herramientas verificables? Conversemos.</p><a href="mailto:contacto@munop.cl?subject=MuAI%20-%20Research%20%26%20Engineering">CONTACTAR MUNOP <span aria-hidden="true">→</span></a></section>
      <footer className="muai-page-footer"><Link className="logo" href="/"><b>µ</b>NOP</Link><span>µAI / RESEARCH PROTOTYPE</span><Link href="/">BACK TO MUNOP ↗</Link></footer>
    </main>
  );
}
