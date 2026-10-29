import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MuAI — Research & Engineering | MUNOP",
  description: "MuAI es una iniciativa experimental de MUNOP para evaluar afirmaciones de ingeniería mediante evidencia técnica verificable.",
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
        <div className="muai-page-topline"><span>EXPERIMENTAL PLATFORM / MuAI</span><span>WORKING PROTOTYPE</span></div>
        <p className="kicker">MUNOP / ENGINEERING RESEARCH</p>
        <h1>MuAI<span>.</span></h1>
        <h2>ENGINEERING DECISIONS<br /><em>GROUNDED IN EVIDENCE.</em></h2>
        <p className="muai-page-intro">Investigamos cómo construir herramientas que ayuden a tomar decisiones técnicas a partir de evidencia explícita, conservando qué se observó, cómo se evaluó y qué límites tiene la conclusión.</p>
        <div className="muai-page-tags"><span>.NET 8</span><span>LINUX</span><span>SSH</span><span>EVIDENCE VALIDATION</span></div>
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
        <div><p>El prototipo ha superado 253 pruebas automatizadas y una verificación manual de tres escenarios negativos en el navegador: JSON alterado, manifiesto ausente y conclusión falsificada con hash regenerado.</p><p>En esos escenarios, el visor rechaza la validación y no presenta la conclusión como confiable.</p><p><strong>Límites:</strong> la coincidencia SHA-256 comprueba consistencia local, no autenticidad independiente. MuAI sigue siendo un prototipo experimental, no un servicio de producción ni un agente general de IA validado.</p></div>
      </section>

      <section className="muai-page-contact"><p className="kicker">MUNOP / OPEN CONVERSATION</p><h2>BUILDING WITH<br /><span>EVIDENCE.</span></h2><p>¿Te interesa la validación técnica, la ingeniería de software o el futuro de herramientas verificables? Conversemos.</p><a href="mailto:contacto@munop.cl?subject=MuAI%20-%20Research%20%26%20Engineering">CONTACTAR MUNOP <span aria-hidden="true">→</span></a></section>
      <footer className="muai-page-footer"><Link className="logo" href="/"><b>µ</b>NOP</Link><span>MuAI / RESEARCH PROTOTYPE</span><Link href="/">BACK TO MUNOP ↗</Link></footer>
    </main>
  );
}
