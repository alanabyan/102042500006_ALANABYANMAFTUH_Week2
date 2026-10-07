import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "../data.js";

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Saat halaman dibuka: huruf nama naik satu per satu.
        gsap.from(".ch", { yPercent: 115, rotate: 5, duration: 1.2, ease: "expo.out", stagger: 0.08 });
        gsap.from(".hero-foot", { opacity: 0, duration: 1, delay: 0.9 });

        // 2. Saat scroll: .sheet naik menimpa hero, hero mengecil dan meredup di bawahnya.
        gsap.to(".hero-in", {
          scale: 0.92,
          yPercent: -6,
          opacity: 0.3,
          ease: "none",
          transformOrigin: "50% 100%",
          scrollTrigger: {
            trigger: document.querySelector(".sheet"),
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, root);
    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <header className="hero" ref={root} id="atas">
      <div className="hero-in wrap">
        <h1 className="hero-name" aria-label={profile.name}>
          {profile.name.split("").map((c, i) => (
            <span className="mask" key={i} aria-hidden="true">
              <span className="ch">{c}</span>
            </span>
          ))}
        </h1>
        <div className="hero-foot">
          <p>{profile.intro}</p>
          <nav aria-label="Navigasi halaman">
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
            <a href="#kontak">Kontak</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
