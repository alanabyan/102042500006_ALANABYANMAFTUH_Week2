import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data.js";

function Info({ p }) {
  return (
    <div className="proj-info">
      <h3>{p.title}</h3>
      <div className="proj-detail">
        <dl>
          <dt>Fokus</dt>
          <dd>{p.focus}</dd>
          <dt>Hasil</dt>
          <dd>{p.output}</dd>
        </dl>
        <p>{p.desc}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const root = useRef(null);
  const [active, setActive] = useState(0);
  const mounted = useRef(false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // Proyek yang berada di tengah layar menjadi yang aktif.
      gsap.utils.toArray(".proj-item").forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });

      // Gambar bergeser pelan di dalam bingkainya saat scroll.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray(".proj-frame img").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: img.closest(".proj-item"), start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });
      });
    }, root);
    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  // Teks kiri berganti dengan transisi singkat setiap kali proyek aktif berubah.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      root.current.querySelectorAll(".proj-left .proj-info > *"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out", overwrite: true }
    );
  }, [active]);

  const go = (i) =>
    root.current.querySelectorAll(".proj-item")[i].scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <section className="proj" id="proyek" ref={root}>
      <div className="proj-left">
        <div className="proj-sticky">
          <h2>Proyek</h2>
          <Info p={projects[active]} />
          <ol className="proj-nav" style={{ "--n": projects.length }}>
            {projects.map((p, i) => (
              <li key={p.title}>
                <button type="button" aria-current={i === active ? "true" : undefined} onClick={() => go(i)}>
                  <span className="bar" />
                  {p.title}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="proj-right">
        {projects.map((p) => (
          <article className="proj-item" key={p.title}>
            {/* Hanya tampil di layar kecil, karena kolom kiri disembunyikan di sana */}
            <div className="proj-info-m">
              <Info p={p} />
            </div>
            <figure>
              <div className="proj-frame">
                <div className="proj-ph" aria-hidden="true">{p.title}</div>
                {p.image && (
                  <img
                    src={p.image}
                    alt={`Tampilan proyek ${p.title}`}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
              </div>
              <figcaption className="proj-cap">
                <span>{p.stack}</span>
                <span>{p.year}</span>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}