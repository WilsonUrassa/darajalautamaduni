"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const AREAS = [
  {
    code: "6.1",
    title: "Culture, Heritage, Arts and Indigenous Knowledge",
    intro:
      "We promote the preservation and appreciation of Tanzania's diverse cultural heritage through:",
    items: [
      "Cultural heritage preservation initiatives",
      "Documentation of indigenous knowledge",
      "Promotion of traditional arts and crafts",
      "Cultural festivals and community events",
      "Promotion of traditional languages and cultural expressions",
      "Intergenerational knowledge transfer",
      "Cultural education and awareness",
      "Support for artists, cultural practitioners and creative communities",
      "Promotion of responsible cultural tourism",
      "Research and documentation of local cultural heritage",
    ],
    outro:
      "We seek to ensure that valuable cultural knowledge is not lost between generations but becomes a resource for education, identity, innovation and sustainable development.",
  },
  {
    code: "6.2",
    title: "Education, Skills and Youth Empowerment",
    intro:
      "We believe education and practical skills are essential pathways to dignity, employment and economic independence. Our interventions may include:",
    items: [
      "Skills development programmes",
      "Entrepreneurship education",
      "Leadership development",
      "Career guidance and mentorship",
      "Digital and creative skills",
      "Vocational and practical training",
      "Innovation and creativity programmes",
      "Youth leadership and civic participation",
      "Cultural education",
      "Employability and life skills development",
    ],
    outro:
      "Particular attention is given to young people who face barriers to education, employment and meaningful participation in society.",
  },
  {
    code: "6.3",
    title: "Women and Girls Empowerment",
    intro:
      "DARAJA LA UTAMADUNI ORGANIZATION seeks to strengthen the social and economic position of women and girls through:",
    items: [
      "Entrepreneurship and business skills",
      "Vocational and livelihood skills",
      "Leadership and confidence development",
      "Financial literacy",
      "Access to economic opportunities",
      "Cultural and creative enterprises",
      "Awareness of rights and social inclusion",
      "Mentorship and community support",
    ],
    outro:
      "We believe that empowering women contributes directly to stronger families, stronger communities and stronger economies.",
  },
  {
    code: "6.4",
    title: "Inclusive Development and Social Protection",
    intro:
      "We work toward a society in which vulnerable and marginalized people are not left behind. Our programmes may support:",
    items: [
      "Children",
      "Youth",
      "Women and girls",
      "Persons with disabilities",
      "Older persons",
      "Economically disadvantaged households",
      "Marginalized communities",
      "Other groups experiencing social exclusion",
    ],
    outro:
      "Our interventions promote participation, dignity, equal opportunity, access to information, skills development and community inclusion.",
  },
  {
    code: "6.5",
    title: "Sustainable Livelihoods and Entrepreneurship",
    intro:
      "We seek to transform knowledge and skills into sustainable economic opportunities. Our livelihood initiatives may include:",
    items: [
      "Entrepreneurship development",
      "Small and micro-enterprise support",
      "Skills training",
      "Business development services",
      "Creative and cultural enterprises",
      "Community-based economic initiatives",
      "Youth employment initiatives",
      "Women-led enterprises",
      "Market linkages",
      "Mentorship and business coaching",
    ],
    outro:
      "Our goal is to help communities move from vulnerability toward self-reliance, productivity and economic resilience.",
  },
  {
    code: "6.6",
    title: "Environment and Climate Resilience",
    intro:
      "Culture and environmental sustainability are closely connected. Indigenous communities possess valuable knowledge concerning natural resources, conservation and adaptation. DARAJA LA UTAMADUNI ORGANIZATION promotes:",
    items: [
      "Environmental awareness",
      "Climate change education",
      "Community conservation",
      "Sustainable use of natural resources",
      "Climate-resilient livelihoods",
      "Tree planting and restoration initiatives",
      "Waste management awareness",
      "Community participation in environmental protection",
      "Documentation and promotion of indigenous environmental knowledge",
    ],
  },
  {
    code: "6.7",
    title: "Human Rights, Gender Equality and Social Justice",
    intro: "We promote awareness and community action around:",
    items: [
      "Human rights",
      "Gender equality",
      "Social justice",
      "Protection of vulnerable groups",
      "Peace and social cohesion",
      "Equality and non-discrimination",
      "Civic participation",
      "Good governance",
      "Community accountability",
    ],
    outro:
      "Our approach emphasizes education, dialogue, community participation and constructive partnerships.",
  },
  {
    code: "6.8",
    title: "Peace, Good Governance and Civic Participation",
    intro:
      "DARAJA LA UTAMADUNI ORGANIZATION recognizes culture as an important instrument for promoting peace, tolerance, unity and responsible citizenship. We support initiatives that encourage:",
    items: [
      "Peacebuilding",
      "Community dialogue",
      "Social cohesion",
      "Civic awareness",
      "Responsible citizenship",
      "Good governance",
      "Transparency and accountability",
      "Youth participation",
      "Community engagement in development processes",
    ],
  },
];

export default function Programmes() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="programmes" className="bg-sand py-24 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow">Our Key Programme Areas</span>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.5rem] mt-4">
            Eight Programme Areas, One Bridge
          </h2>
          <p className="text-ink/70 mt-4">
            Our programmes are designed to benefit communities broadly &mdash;
            select an area to see how we work.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {AREAS.map((area, i) => (
              <button
                key={area.code}
                onClick={() => setOpenIndex(i)}
                className={`text-left shrink-0 lg:shrink w-full rounded-xl2 px-5 py-4 transition-colors border ${
                  openIndex === i
                    ? "bg-ink text-paper border-ink"
                    : "bg-paper text-ink border-sanddeep hover:border-forest"
                }`}
              >
                <span className="font-mono text-xs opacity-60">{area.code}</span>
                <p className="font-display font-semibold text-sm md:text-base mt-1 whitespace-normal">
                  {area.title}
                </p>
              </button>
            ))}
          </div>

          <div className="bg-paper rounded-xl2 p-8 md:p-10 min-h-[420px]">
            <span className="font-mono text-xs text-forest uppercase tracking-widest">
              Programme {AREAS[openIndex].code}
            </span>
            <h3 className="font-display font-bold text-2xl mt-2 mb-5">
              {AREAS[openIndex].title}
            </h3>
            <p className="text-ink/70 mb-5">{AREAS[openIndex].intro}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
              {AREAS[openIndex].items.map((item) => (
                <li key={item} className="flex gap-3 text-ink/75 text-sm">
                  <span className="text-clay mt-1.5 shrink-0">&#9670;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {AREAS[openIndex].outro && (
              <p className="text-ink/60 text-sm italic border-t border-sanddeep pt-5">
                {AREAS[openIndex].outro}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
