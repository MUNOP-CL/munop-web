import Link from "next/link";

const products = [
  {
    number: "001",
    status: "COMMERCIAL VALIDATION",
    name: "PET FOOD PLATFORM",
    headline: "ROBOTICS MEETS PET RETAIL.",
    description:
      "Una plataforma robótica de dispensación de alimento para mascotas, diseñada para explorar nuevas experiencias de compra dentro del pet shop.",
    href: "/products/pet-food-platform",
  },
];

export default function ProductSelector() {
  return (
    <section className="product-selector" id="products">
      <div className="product-selector-head">
        <div>
          <p className="kicker">MUNOP / PRODUCTS</p>
          <h2>WHAT WE ARE BUILDING.</h2>
        </div>
        <div className="selector-count">01 / {String(products.length).padStart(2, "0")}</div>
      </div>

      <div className="product-track">
        {products.map((product) => (
          <article className="product-slide" key={product.number}>
            <div className="product-slide-meta">
              <span>PRODUCT / {product.number}</span>
              <span>STATUS: {product.status}</span>
            </div>

            <div className="product-slide-body">
              <div className="product-slide-copy">
                <p className="product-name">{product.name}</p>
                <h3>{product.headline}</h3>
                <p className="product-description">{product.description}</p>

                <Link className="product-open" href={product.href}>
                  EXPLORAR PRODUCT / {product.number} <i>→</i>
                </Link>
              </div>

              <div className="product-visual" aria-label="Pet Food Platform visual conceptual">
                <span className="product-visual-code">MUNOP / PRODUCT {product.number}</span>
                <div className="selector-machine">
                  <div className="selector-machine-brand"><b>µ</b>NOP</div>
                  <div className="selector-screen">
                    <small>PET FOOD</small>
                    <strong>READY</strong>
                    <span>START</span>
                  </div>
                  <div className="selector-slot" />
                  <div className="selector-bowl" />
                </div>
                <span className="product-visual-status">CONCEPT VISUAL / NOT FINAL HARDWARE</span>
              </div>
            </div>

            <div className="product-slide-foot">
              <span>01</span>
              <div className="product-position"><i /></div>
              <span>{String(products.length).padStart(2, "0")}</span>
              <span className="future-note">SLIDER READY FOR NEXT MUNOP PRODUCT</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
