"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const AREAS = [
  { code: "6.1", title: "Culture, Heritage, Arts and Indigenous Knowledge", intro: "We promote the preservation and appreciation of Tanzania's diverse cultural heritage through:", items: ["Cultural heritage preservation initiatives","Documentation of indigenous knowledge","Promotion of traditional arts and crafts","Cultural festivals and community events","Promotion of traditional languages and cultural expressions","Intergenerational knowledge transfer","Cultural education and awareness","Support for artists, cultural practitioners and creative communities","Promotion of responsible cultural tourism","Research and documentation of local cultural heritage"], outro: "We seek to ensure that valuable cultural knowledge is not lost between generations but becomes a resource for education, identity, innovation and sustainable development." },
  { code: "6.2", title: "Education, Skills and Youth Empowerment", intro: "We believe education and practical skills are essential pathways to dignity, employment and economic independence. Our interventions may include:", items: ["Skills development programmes","Entrepreneurship education","Leadership development","Career guidance and mentorship","Digital and creative skills","Vocational and practical training","Innovation and creativity programmes","Youth leadership and civic participation","Cultural education","Employability and life skills development"], outro: "Particular attention is given to young people who face barriers to education, employment and meaningful participation in society." },
  { code: "6.3", title: "Women and Girls Empowerment", intro: "DARAJA LA UTAMADUNI ORGANIZATION seeks to strengthen the social and economic position of women and girls through:", items: ["Entrepreneurship and business skills","Vocational and livelihood skills","Leadership and confidence development","Financial literacy","Access to economic opportunities","Cultural and creative enterprises","Awareness of rights and social inclusion","Mentorship and community support"], outro: "We believe that empowering women contributes directly to stronger families, stronger communities and stronger economies." },
  { code: "6.4", title: "Inclusive Development and Social Protection", intro: "We work toward a society in which vulnerable and marginalized people are not left behind. Our programmes may support:", items: ["Children","Youth","Women and girls","Persons with disabilities","Older persons","Economically disadvantaged households","Marginalized communities","Other groups experiencing social exclusion"], outro: "Our interventions promote participation, dignity, equal opportunity, access to information, skills development and community inclusion." },
  { code: "6.5", title: "Sustainable Livelihoods and Entrepreneurship", intro: "We seek to transform knowledge and skills into sustainable economic opportunities. Our livelihood initiatives may include:", items: ["Entrepreneurship development","Small and micro-enterprise support","Skills training","Business development services","Creative and cultural enterprises","Community-based economic initiatives","Youth employment initiatives","Women-led enterprises","Market linkages","Mentorship and business coaching"], outro: "Our goal is to help communities move from vulnerability toward self-reliance, productivity and economic resilience." },
  { code: "6.6", title: "Environment and Climate Resilience", intro: "Culture and environmental sustainability are closely connected. Indigenous communities possess valuable knowledge concerning natural resources, conservation and adaptation. DARAJA LA UTAMADUNI ORGANIZATION promotes:", items: ["Environmental awareness","Climate change education","Community conservation","Sustainable use of natural resources","Climate-resilient livelihoods","Tree planting and restoration initiatives","Waste management awareness","Community participation in environmental protection","Documentation and promotion of indigenous environmental knowledge"] },
  { code: "6.7", title: "Human Rights, Gender Equality and Social Justice", intro: "We promote awareness and community action around:", items: ["Human rights","Gender equality","Social justice","Protection of vulnerable groups","Peace and social cohesion","Equality and non-discrimination","Civic participation","Good governance","Community accountability"], outro: "Our approach emphasizes education, dialogue, community participation and constructive partnerships." },
  { code: "6.8", title: "Peace, Good Governance and Civic Participation", intro: "DARAJA LA UTAMADUNI ORGANIZATION recognizes culture as an important instrument for promoting peace, tolerance, unity and responsible citizenship. We support initiatives that encourage:", items: ["Peacebuilding","Community dialogue","Social cohesion","Civic awareness","Responsible citizenship","Good governance","Transparency and accountability","Youth participation","Community engagement in development processes"] },
];

export default function Programmes() {
  const [openIndex, setOpenIndex] = useState(0);
  const current = AREAS[openIndex];
  return (
    <section id="programmes" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <Reveal className="mb-12 max-w-3xl">
          <span className="eyebrow">Our Key Programme Areas</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">Eight Programme Areas, One Bridge</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/65">Our programmes are designed to benefit communities broadly — select an area to see how we work.</p>
        </Reveal>

        <Reveal className="grid gap-6 lg:grid-cols-[370px_1fr] lg:items-start">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {AREAS.map((area, i) => (
              <button key={area.code} onClick={() => setOpenIndex(i)} className={`group rounded-2xl border p-4 text-left transition-all ${openIndex === i ? "border-ink bg-ink text-paper shadow-lg" : "border-sanddeep bg-paper text-ink hover:-translate-y-0.5 hover:border-forest hover:shadow-md"}`}>
                <div className="flex items-center justify-between gap-3"><span className="font-mono text-xs opacity-50">{area.code}</span><span className={`text-xs ${openIndex === i ? "text-gold" : "text-forest opacity-0 group-hover:opacity-100"}`}>VIEW →</span></div>
                <p className="mt-2 font-display text-sm font-semibold leading-snug md:text-base">{area.title}</p>
              </button>
            ))}
          </div>

          <div className="sticky top-24 rounded-[2rem] bg-paper p-7 shadow-sm md:p-10">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-forest">Programme {current.code}</span>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">{current.title}</h3>
            <p className="mt-5 leading-relaxed text-ink/70">{current.intro}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {current.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/75"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />{item}</li>)}
            </ul>
            {current.outro && <p className="mt-7 border-t border-sanddeep pt-6 text-sm italic leading-relaxed text-ink/60">{current.outro}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
