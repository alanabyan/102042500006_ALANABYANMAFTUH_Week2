import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { profile, projects } from "../data.js";

export default function About() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Kata-kata menyala mengikuti posisi scroll.
        gsap.fromTo(
          ".w",
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: ".about-text", start: "top 80%", end: "bottom 55%", scrub: true },
          }
        );

        // Foto bergeser pelan di dalam bingkainya (parallax), bingkai tetap diam.
        gsap.fromTo(
          ".about-photo img",
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: ".about-photo", start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    }, root);
    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section className="section wrap about" id="tentang" ref={root}>
      <figure className="about-photo">
        <img src={profile.photo} alt={`Foto ${profile.name}`} loading="lazy" />
      </figure>

      <div className="about-main">
        <h2>Tentang</h2>
        <p className="about-text">
          {profile.about.split(" ").map((w, i) => (
            <span className="w" key={i}>
              {w}{" "}
            </span>
          ))}
        </p>
        <p className="about-body">{profile.aboutBody}</p>

        <div className="about-foot">
          <div className="stat">
            <span className="stat-n">{projects.length}</span>
            <span>Proyek di portofolio ini</span>
          </div>
          <div className="about-links">
            <a href="#proyek">Lihat proyek</a>
            <a href={profile.cv} download>Unduh CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}