import Reveal from "./Reveal";

const SDGS = [
  { num: 1, title: "No Poverty", desc: "Through livelihoods, entrepreneurship and economic empowerment.", color: "#E5243B" },
  { num: 4, title: "Quality Education", desc: "Through education, skills development and cultural learning.", color: "#C5192D" },
  { num: 5, title: "Gender Equality", desc: "Through women and girls' empowerment.", color: "#FF3A21" },
  { num: 8, title: "Decent Work & Economic Growth", desc: "Through entrepreneurship, employability and creative industries.", color: "#A21942" },
  { num: 10, title: "Reduced Inequalities", desc: "Through social inclusion and support for marginalized groups.", color: "#DD1367" },
  { num: 11, title: "Sustainable Cities & Communities", desc: "Through cultural heritage preservation and community development.", color: "#FD9D24" },
  { num: 13, title: "Climate Action", desc: "Through environmental awareness and climate resilience.", color: "#3F7E44" },
  { num: 16, title: "Peace, Justice & Strong Institutions", desc: "Through human rights, peace, good governance and civic participation.", color: "#00689D" },
  { num: 17, title: "Partnerships for the Goals", desc: "Through collaboration with government, development partners, private sector, academia and communities.", color: "#19486A" },
];

export default function SDGs() {
  return (
    <section id="sdgs" className="bg-sand py-24 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow">Global Alignment</span>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.5rem] mt-4">
            Our Commitment to the SDGs
          </h2>
          <p className="text-ink/70 mt-4">
            The Organization&rsquo;s work contributes to several Sustainable
            Development Goals, particularly:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SDGS.map((s, i) => (
            <Reveal
              key={s.num}
              delay={(i % 3) * 80}
              className="bg-paper rounded-xl2 p-6 flex gap-4 items-start"
            >
              <span
                className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-paper"
                style={{ background: s.color }}
              >
                {s.num}
              </span>
              <div>
                <p className="font-display font-semibold">{s.title}</p>
                <p className="text-ink/60 text-sm mt-1">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
