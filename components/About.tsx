import Reveal from "./Reveal";

const VALUES = [
  { title: "Integrity", desc: "We uphold honesty, ethical conduct, and responsible stewardship." },
  { title: "Inclusiveness", desc: "We believe every person deserves an opportunity to participate and contribute." },
  { title: "Respect for Culture", desc: "We value Tanzania's diverse cultural heritage, traditions, languages, arts, and indigenous knowledge." },
  { title: "Equality and Human Dignity", desc: "We promote equal opportunities and respect for human rights." },
  { title: "Community Ownership", desc: "We involve communities in identifying problems, developing solutions, and sustaining results." },
  { title: "Transparency and Accountability", desc: "We are committed to responsible management of resources and open reporting." },
  { title: "Innovation and Creativity", desc: "We encourage new ideas and practical solutions to development challenges." },
  { title: "Partnership", desc: "We believe sustainable impact is achieved through collaboration." },
  { title: "Sustainability", desc: "We promote solutions that generate lasting social, economic, cultural, and environmental benefits." },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <Reveal className="mb-12 max-w-3xl">
          <span className="eyebrow">About Us</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">About Daraja la Utamaduni Organization</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">A culture centred organization connecting Tanzania&apos;s heritage, people and creativity with opportunities for inclusive and sustainable development.</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="rounded-[2rem] bg-sand p-7 shadow-sm md:p-10">
            <div className="space-y-5 text-[1.03rem] leading-relaxed text-ink/75">
              <p className="text-lg font-medium text-ink">DARAJA LA UTAMADUNI ORGANIZATION is a Tanzanian non governmental organization established to preserve, promote, and harness culture as a powerful foundation for community empowerment, social inclusion, peace, creativity, innovation, and sustainable development.</p>
              <p>The Organization recognizes that culture is more than traditions, music, language, arts, and heritage. Culture is a powerful bridge that connects generations, strengthens identity, promotes social cohesion, creates economic opportunities, and provides communities with knowledge and solutions for addressing contemporary development challenges.</p>
              <p>DARAJA LA UTAMADUNI ORGANIZATION therefore uses a culture centred and community driven approach to address social, economic, educational, environmental, and governance challenges affecting communities, particularly women, children, youth, persons with disabilities, older persons, and other vulnerable and marginalized groups.</p>
              <p>Our work seeks to connect Tanzania&apos;s rich cultural heritage with modern opportunities, enabling communities to protect what is valuable from the past while developing the knowledge, skills, creativity, and resilience required for a better future.</p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={100} className="rounded-[2rem] bg-ink p-8 text-paper shadow-lg md:p-10">
              <span className="eyebrow eyebrow-light">Our Vision</span>
              <h3 className="mt-4 font-display text-2xl font-bold">A culturally vibrant, inclusive, and sustainable society.</h3>
              <p className="mt-4 leading-relaxed text-paper/70">A culturally vibrant, inclusive, and sustainable society where heritage and creativity drive unity, empowerment, and sustainable development.</p>
            </Reveal>
            <Reveal delay={180} className="rounded-[2rem] border border-sanddeep bg-white p-8 shadow-sm md:p-10">
              <span className="eyebrow">Our Mission</span>
              <h3 className="mt-4 font-display text-2xl font-bold">Culture, heritage and indigenous knowledge for empowerment.</h3>
              <p className="mt-4 leading-relaxed text-ink/70">To preserve, promote, and harness culture, heritage, arts, and indigenous knowledge to empower communities and advance sustainable development.</p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-24 mb-10">
          <span className="eyebrow">What Guides Us</span>
          <h3 className="mt-4 font-display text-3xl font-bold md:text-4xl">Our Core Values</h3>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 70} className="group rounded-2xl border border-sanddeep bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-forest/10 font-mono text-sm text-forest">{String(i + 1).padStart(2, "0")}</div>
              <p className="font-display text-lg font-semibold">{v.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
