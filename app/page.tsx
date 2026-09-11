import MunopBoot from "./components/MunopBoot";

const capabilities = [
  ["AUTOMATION", "Operación física automatizada"],
  ["ROBOTICS", "Mecánica y electrónica"],
  ["SOFTWARE", "Control y servicios digitales"],
  ["PRODUCT", "Diseñado para un uso real"],
];

const steps = [
  ["01", "SELECCIÓN", "El cliente selecciona una opción disponible."],
  ["02", "PROCESO", "La plataforma coordina la operación."],
  ["03", "DISPENSACIÓN", "El sistema entrega la porción de alimento."],
];

export default function Home() {
  return (
    <>
      <MunopBoot />

      <main>
        <header>
          <a className="logo" href="#top" aria-label="MUNOP inicio">
            <b>µ</b>NOP
          </a>

          <div className="header-code">
            MUNOP / CL
            <br />
            ROBOTICS + SOFTWARE
          </div>

          <nav>
            <a href="#platform">PLATFORM</a>
            <a href="#pilot">PILOT</a>
            <a className="contact" href="mailto:contacto@munop.cl">
              CONTACTO ↗
            </a>
          </nav>
        </header>

        <section className="hero" id="top">
          <div className="hero-watermark">µ</div>

          <div className="hero-main">
            <div className="system-line">
              <span>PRODUCT / 001</span>
              <span>STATUS: COMMERCIAL VALIDATION</span>
            </div>

            <p className="kicker">PET FOOD PLATFORM</p>

            <h1>
              ROBOTICS
              <br />
              <span>MEETS</span>
              <br />
              PET RETAIL.
            </h1>

            <p className="lead">
              Una nueva forma de conectar tecnología, mascotas y pet shops
              mediante una plataforma robótica de dispensación de alimento.
            </p>

            <div className="actions">
              <a className="primary" href="#platform">
                CONOCER EL PROYECTO <i>→</i>
              </a>
              <a
                className="secondary"
                href="mailto:contacto@munop.cl?subject=Pet%20Food%20Platform%20-%20Piloto"
              >
                HABLEMOS DE UN PILOTO
              </a>
            </div>
          </div>

          <div className="product-stage">
            <div className="stage-label">
              <span>MUNOP / CONCEPT VISUAL</span>
              <span>PRODUCT / 001</span>
            </div>

            <div className="machine">
              <div className="machine-brand">
                <b>µ</b>NOP
              </div>

              <div className="screen">
                <small>PET FOOD</small>
                <strong>READY</strong>
                <span>START</span>
              </div>

              <div className="slot" />
              <div className="bowl" />
            </div>

            <div className="stage-foot">
              <span>DESIGN STUDY / V0</span>
              <span>NOT FINAL HARDWARE</span>
            </div>
          </div>
        </section>

        <section className="ticker">
          <span>MUNOP</span><i>µ</i>
          <span>ROBOTICS</span><i>µ</i>
          <span>SOFTWARE</span><i>µ</i>
          <span>PRODUCT</span><i>µ</i>
          <span>PET FOOD PLATFORM</span>
        </section>

        <section className="manifesto" id="platform">
          <aside>
            <span>001</span>
            <p>
              MUNOP
              <br />
              PET FOOD PLATFORM
            </p>
          </aside>

          <div>
            <p className="kicker">WHAT WE ARE BUILDING</p>
            <h2>
              TECNOLOGÍA QUE SALE DEL CÓDIGO Y <em>ENTRA AL MUNDO REAL.</em>
            </h2>

            <p className="manifesto-copy">
              Pet Food Platform es nuestro primer producto en validación: una
              plataforma donde robótica y software trabajan juntos para explorar
              nuevas experiencias dentro del pet shop.
            </p>
          </div>
        </section>

        <section className="capabilities">
          {capabilities.map(([name, text], i) => (
            <article key={name}>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="operation">
          <div className="operation-title">
            <p className="kicker">HOW IT WORKS / V1</p>
            <h2>
              SIMPLE
              <br />
              OUTSIDE.
              <br />
              <span>ENGINEERING</span>
              <br />
              INSIDE.
            </h2>
          </div>

          <div className="steps">
            {steps.map(([n, title, text]) => (
              <article key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="prototype">
          <div className="prototype-code">
            <span>PROTOTYPE_STATUS</span>
            <strong>FUNCTIONAL</strong>
            <span>ENCLOSURE_STATUS</span>
            <strong>IN DEVELOPMENT</strong>
            <span>COMMERCIAL_STATUS</span>
            <strong>VALIDATION</strong>
          </div>

          <div>
            <p className="kicker">REAL PROTOTYPE / CURRENT STATE</p>
            <h2>
              THE MACHINE
              <br />
              ALREADY <span>EXISTS.</span>
            </h2>

            <p>
              El prototipo funcional valida mecánica, electrónica, software y
              flujo de operación. La envolvente comercial definitiva todavía
              está en desarrollo.
            </p>
          </div>
        </section>

        <section className="pilot" id="pilot">
          <div className="pilot-mark">µ</div>

          <p className="kicker">PILOT PROGRAM / PET SHOPS</p>

          <h2>
            BUSCAMOS EL
            <br />
            <span>PRIMER LUGAR</span>
            <br />
            DONDE PROBARLO.
          </h2>

          <p>
            Estamos conversando con pet shops interesados en conocer el proyecto
            y explorar una futura experiencia piloto.
          </p>

          <a href="mailto:contacto@munop.cl?subject=Pet%20Food%20Platform%20-%20Interés%20en%20piloto">
            ME INTERESA EL PILOTO <i>→</i>
          </a>
        </section>

        <footer>
          <div className="logo footer-logo">
            <b>µ</b>NOP
          </div>
          <p>ROBOTICS / SOFTWARE / PRODUCT</p>
          <a href="mailto:contacto@munop.cl">contacto@munop.cl</a>
          <small>PET FOOD PLATFORM — PROTOTYPE & COMMERCIAL VALIDATION</small>
        </footer>
      </main>
    </>
  );
}
