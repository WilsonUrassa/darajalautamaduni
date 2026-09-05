import Reveal from "./Reveal";

const GROUPS = [
  {
    title: "Women and Girls",
    desc: "Through skills, entrepreneurship, leadership and economic empowerment.",
  },
  {
    title: "Youth",
    desc: "Through education, employability, entrepreneurship, innovation and leadership.",
  },
  {
    title: "Children",
    desc: "Through inclusive education, cultural learning, protection and community-based support.",
  },
  {
    title: "Persons with Disabilities",
    desc: "Through inclusion, skills development, participation and equal opportunities.",
  },
  {
    title: "Older Persons",
    desc: "Through social inclusion, dignity, intergenerational knowledge transfer and community support.",
  },
  {
    title: "Cultural Practitioners and Creative Communities",
    desc: "Through promotion, capacity building, networking and economic opportunities.",
  },
  {
    title: "Communities",
    desc: "Through integrated initiatives that strengthen livelihoods, culture, social cohesion and resilience.",
  },
];

export default function Beneficiaries() {
  return (
    <section id="beneficiaries" className="bg-paper py-24 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow">Who We Serve</span>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.5rem] mt-4">
            Our Target Beneficiaries
          </h2>
          <p className="text-ink/70 mt-4">
            Our programmes are designed to benefit communities broadly, with
            particular attention to those who face barriers to opportunity.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((g, i) => (
            <Reveal
              key={g.title}
              delay={(i % 3) * 80}
              className="rounded-xl2 bg-sand p-7 hover:-translate-y-1 transition-transform"
            >
              <h3 className="font-display font-bold text-lg mb-2">{g.title}</h3>
              <p className="text-ink/65 text-sm leading-relaxed">{g.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
