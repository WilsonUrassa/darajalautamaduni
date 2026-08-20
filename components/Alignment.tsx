import Reveal from "./Reveal";

const PRIORITIES = [
  "Inclusive economic growth",
  "Human capital development",
  "Youth empowerment",
  "Women's empowerment",
  "Cultural identity",
  "Innovation",
  "Environmental sustainability",
  "Social inclusion",
  "Good governance",
  "Peace and national unity",
];

const GOVERNANCE = [
  "General Meeting",
  "Board of Directors",
  "Executive Director",
  "Executive Secretary",
  "Treasurer",
  "Other committees established as necessary",
];

const SYSTEMS = [
  "Financial management",
  "Internal controls",
  "Documentation and record keeping",
  "Programme monitoring",
  "Reporting",
  "Accountability to beneficiaries and partners",
  "Compliance with applicable laws and regulations",
  "Responsible management of donor resources",
];

const MEAL = [
  "Number of beneficiaries reached",
  "Skills acquired",
  "Livelihoods created or strengthened",
  "Women and youth empowered",
  "Cultural assets documented or preserved",
  "Communities participating in programmes",
  "Partnerships established",
  "Environmental outcomes",
  "Changes in knowledge and attitudes",
  "Sustainability of programme results",
];

export default function Alignment() {
  return (
    <>
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal>
            <span className="eyebrow">National &amp; Continental Alignment</span>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.3rem] mt-4 mb-5">
              Aligned With Tanzania and African Development Priorities
            </h2>
            <p className="text-ink/70 mb-6">
              DARAJA LA UTAMADUNI ORGANIZATION seeks to contribute to national
              and continental development priorities, including Tanzania
              Development Vision 2050 and African Union Agenda 2063.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {PRIORITIES.map((p) => (
                <span
                  key={p}
                  className="text-sm bg-sand rounded-full px-4 py-2 text-ink/80"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">Governance &amp; Accountability</span>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.3rem] mt-4 mb-5">
              Governance and Accountability
            </h2>
            <p className="text-ink/70 mb-6">
              DARAJA LA UTAMADUNI ORGANIZATION is governed through its
              constitutional structures, including:
            </p>
            <ul className="grid grid-cols-2 gap-2 mb-6 text-sm text-ink/75">
              {GOVERNANCE.map((g) => (
                <li key={g} className="flex gap-2">
                  <span className="text-clay">&#9670;</span>
                  {g}
                </li>
              ))}
            </ul>
            <p className="text-ink/70 mb-4 text-sm">
              The Organization is committed to maintaining appropriate
              systems for:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-ink/75">
              {SYSTEMS.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-forest">&#9670;</span>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-paper py-24 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16">
          <Reveal>
            <span className="eyebrow eyebrow-light">Monitoring, Evaluation &amp; Learning</span>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.2rem] mt-4 mb-5 text-paper">
              What We Measure
            </h2>
            <p className="text-paper/65 mb-6">
              We are committed to measuring not only what activities are
              implemented, but also the difference those activities make in
              people&rsquo;s lives. Where resources permit, we establish
              appropriate Monitoring, Evaluation, Accountability and Learning
              (MEAL) systems for every programme.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-paper/75">
              {MEAL.map((m) => (
                <li key={m} className="flex gap-2">
                  <span className="text-gold">&#9670;</span>
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="bg-paper/5 rounded-xl2 p-8 border border-paper/15">
            <span className="eyebrow eyebrow-light">Our Theory of Change</span>
            <p className="text-paper/70 mt-4 mb-6">
              When communities are empowered to value and preserve their
              cultural heritage, access knowledge and skills, participate in
              decision-making, develop sustainable livelihoods and protect
              their environment, they become more resilient, inclusive and
              capable of driving their own sustainable development.
            </p>
            <div className="space-y-3 font-display font-semibold text-lg">
              <p className="bg-paper/10 rounded-lg px-5 py-4">
                Cultural Heritage + Knowledge + Skills + Inclusion +
                Partnerships = <span className="text-gold">Empowered Communities</span>
              </p>
              <p className="bg-paper/10 rounded-lg px-5 py-4">
                Empowered Communities ={" "}
                <span className="text-gold">
                  Resilient, Peaceful and Sustainable Society
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
