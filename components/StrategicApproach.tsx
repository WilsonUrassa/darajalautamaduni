import Reveal from "./Reveal";

const APPROACH = [
  {
    title: "Community Participation",
    desc: "We involve communities in identifying priorities, designing interventions, implementing activities and assessing results.",
  },
  {
    title: "Local Knowledge",
    desc: "We recognize indigenous and community knowledge as an important resource for development.",
  },
  {
    title: "Partnerships",
    desc: "We work with government institutions, local authorities, civil society organizations, private companies, academic institutions, development partners and communities.",
  },
  {
    title: "Evidence and Learning",
    desc: "We promote documentation, monitoring, evaluation, research and learning to improve programme quality.",
  },
  {
    title: "Inclusion",
    desc: "We deliberately seek to include groups that are often excluded from development opportunities.",
  },
  {
    title: "Sustainability",
    desc: "We prioritize interventions that can continue producing benefits beyond the life of a project.",
  },
];

const REASONS = [
  {
    n: "1",
    title: "A locally rooted approach",
    desc: "We understand the importance of community ownership, local realities and cultural context.",
  },
  {
    n: "2",
    title: "An integrated development model",
    desc: "Our work connects culture with education, livelihoods, inclusion, environment, governance, human rights and community well-being.",
  },
  {
    n: "3",
    title: "Focus on vulnerable groups",
    desc: "We prioritize groups that face barriers to opportunities and participation.",
  },
  {
    n: "4",
    title: "Partnership orientation",
    desc: "We welcome collaboration with government, donors, foundations, companies, universities, NGOs and other development actors.",
  },
  {
    n: "5",
    title: "Scalable programmes",
    desc: "Our programme areas can be implemented through pilot projects and expanded according to evidence, resources and community demand.",
  },
  {
    n: "6",
    title: "Commitment to accountability",
    desc: "We recognize that donor and stakeholder confidence depends on responsible stewardship, transparent systems, measurable results and proper reporting.",
  },
];

export default function StrategicApproach() {
  return (
    <>
      <section className="bg-sand py-24 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <Reveal className="max-w-2xl mb-14">
            <span className="eyebrow">How We Work</span>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.5rem] mt-4">
              Our Strategic Approach
            </h2>
            <p className="text-ink/70 mt-4">
              DARAJA LA UTAMADUNI ORGANIZATION applies a community-centred,
              partnership-oriented and results-focused approach.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPROACH.map((a, i) => (
              <Reveal
                key={a.title}
                delay={(i % 3) * 80}
                className="bg-paper rounded-xl2 p-7 border border-sanddeep"
              >
                <h3 className="font-display font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-ink/65 text-sm leading-relaxed">{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="partner" className="bg-ink text-paper py-24 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <Reveal className="max-w-2xl mb-14">
            <span className="eyebrow eyebrow-light">Why Partner With Us</span>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.5rem] mt-4 text-paper">
              Why Partner With Daraja la Utamaduni Organization?
            </h2>
            <p className="text-paper/65 mt-4">
              DARAJA LA UTAMADUNI ORGANIZATION offers partners an opportunity
              to support an organization that places culture at the centre of
              practical community development.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REASONS.map((r, i) => (
              <Reveal
                key={r.n}
                delay={(i % 2) * 100}
                className="flex gap-5 border-b border-paper/10 pb-6"
              >
                <span className="font-mono text-gold text-lg shrink-0">{r.n}</span>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1.5">{r.title}</h3>
                  <p className="text-paper/60 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
