import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Preserve",
    desc: "Protect cultural heritage, traditions, languages, arts and indigenous knowledge.",
  },
  {
    n: "02",
    title: "Empower",
    desc: "Equip communities, particularly vulnerable groups, with knowledge, skills, opportunities and resources.",
  },
  {
    n: "03",
    title: "Connect",
    desc: "Build bridges between communities, government, private sector, academia, development partners and civil society.",
  },
  {
    n: "04",
    title: "Innovate",
    desc: "Transform cultural knowledge and creativity into practical solutions and economic opportunities.",
  },
  {
    n: "05",
    title: "Transform",
    desc: "Contribute to inclusive, resilient, peaceful and sustainable communities.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-ink text-paper py-24 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-2xl mb-16">
          <span className="eyebrow eyebrow-light">Our Development Philosophy</span>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.5rem] mt-4 text-paper">
            Culture as a Bridge to Development
          </h2>
          <p className="text-paper/65 mt-4">
            DARAJA LA UTAMADUNI ORGANIZATION believes that sustainable
            development becomes more meaningful and effective when it
            recognizes the identity, knowledge, traditions, creativity, and
            aspirations of local communities.
          </p>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-teal to-clay" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center font-mono text-sm mb-5 bg-ink relative z-10">
                  {s.n}
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-paper/60 text-sm leading-relaxed">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
