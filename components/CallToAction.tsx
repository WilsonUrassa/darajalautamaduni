import Reveal from "./Reveal";

const PREFERRED = [
  "Identify genuine community needs",
  "Build local capacity",
  "Strengthen local institutions",
  "Create sustainable opportunities",
  "Protect cultural heritage",
  "Promote inclusion",
  "Generate measurable results",
  "Encourage innovation",
  "Leave lasting benefits beyond the project period",
];

const FUTURE = [
  "Culturally proud",
  "Socially inclusive",
  "Economically empowered",
  "Environmentally responsible",
  "Peaceful and resilient",
  "Ready for the future",
];

export default function CallToAction() {
  return (
    <section className="bg-sand py-24 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <Reveal>
            <span className="eyebrow">Our Vision for Partnership</span>
            <h2 className="font-display font-bold text-[1.8rem] md:text-[2.1rem] mt-4 mb-5">
              We Don&rsquo;t Seek Donors. We Seek Partners.
            </h2>
            <p className="text-ink/70 mb-6">
              We do not seek donors merely to finance activities &mdash; we
              seek partners to build solutions with communities. We welcome
              both financial and non-financial partnerships, including
              technical expertise, training, equipment, research, technology,
              networking, mentorship and institutional strengthening.
            </p>
            <p className="text-ink/70 font-medium mb-3">Our preferred partnerships are those that:</p>
            <ul className="space-y-2">
              {PREFERRED.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-ink/75">
                  <span className="text-forest mt-0.5">&#10003;</span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="bg-ink text-paper rounded-xl2 p-9 md:p-10">
            <span className="eyebrow eyebrow-light">A Call to Partners</span>
            <p className="text-paper/70 mt-4 mb-6 leading-relaxed">
              Tanzania possesses extraordinary cultural wealth, community
              knowledge, creativity and human potential. DARAJA LA UTAMADUNI
              ORGANIZATION believes that culture can become a bridge&mdash;not
              a barrier&mdash;to development. We invite development partners,
              donors, foundations, companies, government institutions,
              academic institutions, civil society organizations and
              philanthropists to join us in building communities that are:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {FUTURE.map((f) => (
                <span
                  key={f}
                  className="text-sm bg-paper/10 rounded-lg px-4 py-3 text-center"
                >
                  {f}
                </span>
              ))}
            </div>
            <p className="font-display font-semibold text-lg text-gold">
              Together, we can turn cultural heritage into opportunity,
              community knowledge into innovation, and partnership into
              lasting transformation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
