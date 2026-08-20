import Reveal from "./Reveal";

const VALUES = [
  {
    title: "Integrity",
    desc: "We uphold honesty, ethical conduct, and responsible stewardship.",
  },
  {
    title: "Inclusiveness",
    desc: "We believe every person deserves an opportunity to participate and contribute.",
  },
  {
    title: "Respect for Culture",
    desc: "We value Tanzania's diverse cultural heritage, traditions, languages, arts, and indigenous knowledge.",
  },
  {
    title: "Equality and Human Dignity",
    desc: "We promote equal opportunities and respect for human rights.",
  },
  {
    title: "Community Ownership",
    desc: "We involve communities in identifying problems, developing solutions, and sustaining results.",
  },
  {
    title: "Transparency and Accountability",
    desc: "We are committed to responsible management of resources and open reporting.",
  },
  {
    title: "Innovation and Creativity",
    desc: "We encourage new ideas and practical solutions to development challenges.",
  },
  {
    title: "Partnership",
    desc: "We believe sustainable impact is achieved through collaboration.",
  },
  {
    title: "Sustainability",
    desc: "We promote solutions that generate lasting social, economic, cultural, and environmental benefits.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow">About Us</span>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.5rem] mt-4">
            About Daraja la Utamaduni Organization
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20">
          <Reveal className="space-y-5 text-ink/75 text-[1.02rem] leading-relaxed">
            <p className="text-ink font-medium text-lg">
              DARAJA LA UTAMADUNI ORGANIZATION is a Tanzanian non-governmental
              organization established to preserve, promote, and harness
              culture as a powerful foundation for community empowerment,
              social inclusion, peace, creativity, innovation, and sustainable
              development.
            </p>
            <p>
              The Organization recognizes that culture is more than
              traditions, music, language, arts, and heritage. Culture is a
              powerful bridge that connects generations, strengthens
              identity, promotes social cohesion, creates economic
              opportunities, and provides communities with knowledge and
              solutions for addressing contemporary development challenges.
            </p>
            <p>
              DARAJA LA UTAMADUNI ORGANIZATION therefore uses a
              culture-centred and community-driven approach to address
              social, economic, educational, environmental, and governance
              challenges affecting communities, particularly women, children,
              youth, persons with disabilities, older persons, and other
              vulnerable and marginalized groups.
            </p>
            <p>
              Our work seeks to connect Tanzania&rsquo;s rich cultural
              heritage with modern opportunities, enabling communities to
              protect what is valuable from the past while developing the
              knowledge, skills, creativity, and resilience required for a
              better future.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={100} className="bg-sand rounded-xl2 p-8 border-l-4 border-forest">
              <h3 className="font-display font-bold text-xl mb-3">🌙 Our Vision</h3>
              <p className="text-ink/75">
                A culturally vibrant, inclusive, and sustainable society where
                heritage and creativity drive unity, empowerment, and
                sustainable development.
              </p>
            </Reveal>
            <Reveal delay={180} className="bg-sand rounded-xl2 p-8 border-l-4 border-clay">
              <h3 className="font-display font-bold text-xl mb-3">🌱 Our Mission</h3>
              <p className="text-ink/75">
                To preserve, promote, and harness culture, heritage, arts, and
                indigenous knowledge to empower communities and advance
                sustainable development.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mb-10">
          <span className="eyebrow">What Guides Us</span>
          <h3 className="font-display font-bold text-[1.6rem] md:text-2xl mt-4">
            Our Core Values
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.title}
              delay={(i % 3) * 80}
              className="rounded-xl2 border border-sanddeep p-6 hover:border-clay transition-colors"
            >
              <p className="font-display font-semibold text-lg mb-2">{v.title}</p>
              <p className="text-ink/65 text-sm leading-relaxed">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
