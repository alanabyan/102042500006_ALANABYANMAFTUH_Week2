import { skills } from "../data.js";

export default function Skills() {
  return (
    <section className="section wrap" id="skill">
      <h2>Skill</h2>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
