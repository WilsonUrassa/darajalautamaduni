import Reveal from "./Reveal";

const OPPORTUNITIES = [
  "Programme and project funding",
  "Institutional support",
  "Technical assistance",
  "Capacity building",
  "Research partnerships",
  "Equipment and material support",
  "Skills development",
  "Community development projects",
  "Cultural preservation initiatives",
  "Youth empowerment",
  "Women and girls' empowerment",
  "Environmental and climate initiatives",
  "Creative industries",
  "Education",
  "Entrepreneurship and livelihoods",
  "Digital innovation",
  "Monitoring, evaluation and learning",
];

const STAKEHOLDERS = [
  {
    title: "Development Partners",
    desc: "To co-design and finance programmes aligned with shared development priorities.",
  },
  {
    title: "Foundations & Grant-Making Institutions",
    desc: "To invest in innovative, community based interventions.",
  },
  {
    title: "Corporate Partners",
    desc: "To support communities through Corporate Social Responsibility and shared-value initiatives.",
  },
  {
    title: "Government Institutions",
    desc: "To collaborate in implementing community development, cultural, educational, environmental and social programmes.",
  },
  {
    title: "Academic & Research Institutions",
    desc: "To conduct research, documentation, innovation and knowledge-generation initiatives.",
  },
  {
    title: "International NGOs & Networks",
    desc: "To develop joint programmes, consortiums and knowledge-sharing partnerships.",
  },
  {
    title: "Individual Philanthropists",
    desc: "To support targeted community initiatives and vulnerable groups.",
  },
];

const FLAGSHIP = [
  {
    title: "Daraja Cultural Heritage Programme",
    desc: "Preserving cultural heritage, indigenous knowledge, arts, languages and traditions while creating opportunities for communities and cultural practitioners.",
  },
  {
    title: "Daraja Youth Empowerment Programme",
    desc: "Providing young people with practical skills, entrepreneurship, leadership, innovation and employability opportunities.",
  },
  {
    title: "Daraja Women's Economic Empowerment Programme",
    desc: "Supporting women and girls with skills, entrepreneurship, financial literacy, leadership and livelihood opportunities.",
  },
  {
    title: "Daraja Culture & Climate Resilience Programme",
    desc: "Combining indigenous environmental knowledge with modern approaches to environmental conservation and climate resilience.",
  },
  {
    title: "Daraja Creative Economy Programme",
    desc: "Supporting artists, artisans, cultural entrepreneurs and creative communities to transform creativity into sustainable livelihoods.",
  },
  {
    title: "Daraja Inclusive Community Development Programme",
    desc: "Promoting participation, dignity and opportunities for persons with disabilities, children, older persons and other vulnerable groups.",
  },
];

export default function Partnership() {
  return (
    <>
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16">
          <Reveal>
            <span className="eyebrow">Partnership Opportunities</span>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.4rem] mt-4 mb-6">
              Ways to Partner With Us
            </h2>
            <p className="text-ink/70 mb-8">
              We are particularly interested in long term strategic
              partnerships that can move beyond short term interventions and
              generate sustainable community impact.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {OPPORTUNITIES.map((o) => (
                <span
                  key={o}
                  className="text-sm bg-sand rounded-full px-4 py-2 text-ink/80"
                >
                  {o}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">Donor &amp; Stakeholder Engagement</span>
            <h3 className="font-display font-bold text-2xl mt-4 mb-6">We Invite</h3>
            <div className="space-y-4">
              {STAKEHOLDERS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl2 bg-sand p-5 border-l-4 border-teal"
                >
                  <p className="font-display font-semibold">{s.title}</p>
                  <p className="text-ink/65 text-sm mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest text-paper py-24 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <Reveal className="max-w-2xl mb-14">
            <span className="eyebrow eyebrow-light">Looking Ahead</span>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.5rem] mt-4 text-paper">
              Potential Flagship Programmes
            </h2>
            <p className="text-paper/70 mt-4">
              To translate our mission into measurable impact, DARAJA LA
              UTAMADUNI ORGANIZATION intends to develop programmes such as:
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FLAGSHIP.map((f, i) => (
              <Reveal
                key={f.title}
                delay={(i % 3) * 90}
                className="bg-paper/10 rounded-xl2 p-6 border border-paper/15"
              >
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-paper/70 text-sm leading-relaxed">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
