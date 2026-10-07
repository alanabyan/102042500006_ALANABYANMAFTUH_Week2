import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "../data.js";

export default function Contact() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Teks email membesar perlahan saat mendekati tengah layar.
        gsap.fromTo(
          ".mail",
          { scale: 0.82, transformOrigin: "0 50%" },
          { scale: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 85%", end: "center 60%", scrub: true } }
        );
      });
    }, root);
    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section className="section wrap contact" id="kontak" ref={root}>
      <h2>Kontak</h2>
      <a className="mail" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <footer>
        <span>{new Date().getFullYear()} {profile.name}</span>
        <a href="#atas">Kembali ke atas</a>
      </footer>
    </section>
  );
}
