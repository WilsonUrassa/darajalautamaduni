import Reveal from "./Reveal";

export default function DirectorMessage() {
  const paragraphs = [
    "It is my great pleasure to welcome you to DARAJA LA UTAMADUNI ORGANIZATION, an organization established with a clear conviction that culture can be a powerful bridge to community empowerment, social inclusion and sustainable development.",
    "Tanzania is endowed with remarkable cultural heritage, indigenous knowledge, creativity, traditions and diverse communities. Yet, many communities continue to face challenges related to poverty, unemployment, limited access to skills and opportunities, social exclusion, environmental pressures and the gradual loss of valuable cultural knowledge. We believe that these challenges require solutions that are locally rooted, inclusive, innovative and sustainable.",
    "At DARAJA LA UTAMADUNI ORGANIZATION, we therefore seek to connect our cultural heritage with modern opportunities. We work to preserve what is valuable from the past while empowering women, youth, children, persons with disabilities, older persons, cultural practitioners and other communities with knowledge, skills, opportunities and partnerships that can improve their lives.",
  ];

  const closing = [
    "As an organization, we do not see development as something that should be imposed on communities. We believe that communities must be active participants and owners of the development process. Their knowledge, experiences, aspirations and cultural identity must be recognized and respected in designing solutions that affect their lives.",
    "We are therefore committed to working collaboratively with government institutions, local authorities, development partners, donors, foundations, private-sector organizations, academic and research institutions, civil society organizations, cultural practitioners and communities.",
    "I invite all individuals and institutions who share our vision to join us in building a Tanzania where cultural heritage is valued, communities are empowered, diversity is respected, opportunities are accessible, and development is sustainable.",
  ];

  return (
    <section className="bg-paper py-24 md:py-28">
      <div className="max-w-[880px] mx-auto px-6 md:px-8">
        <Reveal>
          <span className="eyebrow">A Message From the Director</span>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.3rem] mt-4 mb-8 leading-tight">
            &ldquo;Culture can become a bridge&mdash;not a barrier&mdash;to development.&rdquo;
          </h2>
        </Reveal>

        <Reveal delay={100} className="space-y-5 text-ink/75 text-[1.02rem] leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="my-8 rounded-xl2 bg-sand border-l-4 border-forest px-6 py-6">
            <p className="font-mono text-sm uppercase tracking-wide text-forest mb-2">
              Our Guiding Philosophy
            </p>
            <p className="font-display font-bold text-xl md:text-2xl text-ink">
              Preserve &rarr; Empower &rarr; Connect &rarr; Innovate &rarr; Transform
            </p>
          </div>

          {closing.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <p>
            Together, we can turn cultural heritage into opportunity, community
            knowledge into innovation, and partnership into lasting
            transformation. Welcome to DARAJA LA UTAMADUNI ORGANIZATION &mdash;
            Bridging Culture, Communities and Sustainable Development.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 pt-8 border-t border-sanddeep">
          <p className="font-display font-bold text-lg">Zuberi Abdallah Kidumo</p>
          <p className="text-ink/60 text-sm">Director, Daraja la Utamaduni Organization</p>
        </Reveal>
      </div>
    </section>
  );
}
