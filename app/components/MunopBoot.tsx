"use client";

import { useEffect, useState } from "react";

const BOOT_DURATION_MS = 6100;

export default function MunopBoot() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("booting");

    const exitTimer = window.setTimeout(() => setExiting(true), BOOT_DURATION_MS - 500);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("booting");
    }, BOOT_DURATION_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      document.documentElement.classList.remove("booting");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`munop-boot${exiting ? " munop-boot--exit" : ""}`} aria-label="MUNOP" role="status">
      <div className="boot-corner boot-corner--left">
        <span className="boot-rule" />
        <span>ROBOTICS / EMBEDDED</span>
        <span>SOFTWARE / PRODUCT</span>
      </div>

      <div className="boot-corner boot-corner--right">
        <span>MUNOP SYSTEM</span>
        <span>BOOT SEQUENCE</span>
        <span className="boot-rule" />
      </div>

      <div className="boot-center">
        <div className="boot-ring">
          <div className="boot-logo"><span className="boot-mu">µ</span><span>NOP</span></div>
          <div className="boot-tagline">TECNOLOGÍA PARA<br />UN MEJOR FUTURO</div>
        </div>

        <p className="boot-loading">CARGANDO EXPERIENCIA MUNOP...</p>
        <div className="boot-progress" aria-hidden="true"><div className="boot-progress__fill" /></div>

        <div className="boot-systems" aria-hidden="true">
          <span className="boot-system boot-system--1">SISTEMAS</span><i />
          <span className="boot-system boot-system--2">ROBÓTICA</span><i />
          <span className="boot-system boot-system--3">SOFTWARE</span><i />
          <span className="boot-system boot-system--4">PRODUCTO</span>
        </div>

        <div className="boot-ready" aria-hidden="true"><span className="boot-ready__dot" />SYSTEM READY</div>

        <div className="nop-phase" aria-hidden="true">
          <div className="nop-watermark"><span className="nop-watermark__mu">µ</span>NOP</div>
          <div className="nop-lemma">REST FOR A NOP...</div>
        </div>
      </div>

      <div className="boot-domain">MUNOP.CL</div>
    </div>
  );
}
