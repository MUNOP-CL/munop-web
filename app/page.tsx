import MunopBoot from "./components/MunopBoot";
import ProductSelector from "./components/ProductSelector";

const disciplines = [
  ["01", "ROBOTICS", "Máquinas que interactúan con el mundo físico."],
  ["02", "EMBEDDED SYSTEMS", "Electrónica y control integrados al producto."],
  ["03", "SOFTWARE", "Servicios digitales que conectan y coordinan la experiencia."],
];

export default function Home() {
  return (
    <>
      <MunopBoot />

      <main className="munop-home">
        <header className="home-header">
          <a className="logo" href="#top" aria-label="MUNOP inicio">
            <b>µ</b>NOP
          </a>

          <div className="header-code">
            MUNOP / CL
            <br />
            ROBOTICS + EMBEDDED + SOFTWARE
          </div>

          <nav>
            <a href="#products">PRODUCTS</a>
            <a href="#about">MUNOP</a>
            <a className="contact" href="mailto:contacto@munop.cl">
              CONTACTO ↗
            </a>
          </nav>
        </header>

        <section className="home-hero" id="top">
          <div className="home-hero-watermark">µNOP</div>

          <div className="home-hero-copy">
            <div className="home-system-line">
              <span>MUNOP / SYSTEM READY</span>
              <span>SANTIAGO · CHILE</span>
            </div>

            <p className="kicker">ROBOTICS · EMBEDDED SYSTEMS · SOFTWARE</p>

            <h1 className="home-title">
              TECHNOLOGY
              <br />
              <span>OUT OF</span>
              <br />
              THE CODE.
            </h1>

            <p className="home-lead">
              Creamos productos donde software, electrónica y robótica se
              encuentran con problemas y experiencias del mundo real.
            </p>

            <div className="actions">
              <a className="primary" href="#products">
                EXPLORAR PRODUCTOS <i>→</i>
              </a>
              <a className="secondary" href="mailto:contacto@munop.cl">
                HABLAR CON MUNOP
              </a>
            </div>
          </div>

          <div className="home-signal" aria-hidden="true">
            <div className="signal-orbit signal-orbit--outer" />
            <div className="signal-orbit signal-orbit--inner" />
            <div className="signal-core">
              <span>µ</span>NOP
            </div>
            <div className="signal-label signal-label--a">PHYSICAL</div>
            <div className="signal-label signal-label--b">DIGITAL</div>
            <div className="signal-label signal-label--c">PRODUCT</div>
          </div>
        </section>

        <section className="home-ticker" aria-label="MUNOP disciplines">
          <span>MUNOP</span><i>µ</i>
          <span>ROBOTICS</span><i>µ</i>
          <span>EMBEDDED SYSTEMS</span><i>µ</i>
          <span>SOFTWARE</span><i>µ</i>
          <span>PRODUCT</span>
        </section>

        <section className="home-about" id="about">
          <aside>
            <span>µNOP</span>
            <p>
              MUNOP
              <br />
              TECHNOLOGY / PRODUCT
            </p>
          </aside>

          <div>
            <p className="kicker">WHAT IS MUNOP</p>
            <h2>
              TECHNOLOGY THAT LEAVES THE CODE AND <em>ENTERS THE REAL WORLD.</em>
            </h2>

            <p className="home-about-copy">
              MUNOP desarrolla tecnología aplicada a productos reales. Diseñamos
              la experiencia completa: desde el control físico y los sistemas
              embebidos hasta el software que conecta cada parte.
            </p>
          </div>
        </section>

        <section className="home-disciplines">
          {disciplines.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <ProductSelector />

        <section className="home-contact">
          <div className="home-contact-mark">µ</div>
          <p className="kicker">MUNOP / CONTACT</p>
          <h2>
            BUILDING THE
            <br />
            <span>NEXT REAL THING.</span>
          </h2>
          <p>
            ¿Tienes una idea, oportunidad o espacio donde una solución MUNOP
            podría tener sentido? Conversemos.
          </p>
          <a href="mailto:contacto@munop.cl">
            contacto@munop.cl <i>→</i>
          </a>
        </section>

        <footer className="home-footer">
          <div className="logo footer-logo">
            <b>µ</b>NOP
          </div>
          <p>ROBOTICS / EMBEDDED SYSTEMS / SOFTWARE</p>
          <a href="mailto:contacto@munop.cl">contacto@munop.cl</a>
          <small>MUNOP — CHILE</small>
        </footer>
      </main>
    </>
  );
}
