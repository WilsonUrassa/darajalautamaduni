import Image from "next/image";
import Reveal from "./Reveal";

const PILLARS = [
  "WATU",
  "ELIMU",
  "AFYA",
  "NISHATI",
  "MAJI SAFI",
  "UCHUMI",
  "UBUNIFU",
  "UWAJIBIKAJI",
  "MAZINGIRA",
  "AMANI",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 md:pt-44 bg-sand"
      style={{
        backgroundImage:
          "radial-gradient(circle at 85% 8%, rgba(46,139,158,0.16), transparent 45%), radial-gradient(circle at 6% 30%, rgba(206,154,52,0.18), transparent 40%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center pb-10">
        <Reveal>
          <span className="eyebrow">Tanzanian Non-Governmental Organization</span>
          <h1 className="font-display font-extrabold leading-[1.05] tracking-tight text-[2.6rem] md:text-[3.4rem] lg:text-[4rem] mt-4 mb-6">
            Culture as a <span className="text-forest">Bridge</span> to Sustainable Development
          </h1>
          <p className="text-[1.1rem] text-ink/70 max-w-xl mb-8">
            DARAJA LA UTAMADUNI ORGANIZATION preserves, promotes and harnesses
            Tanzania&rsquo;s cultural heritage, indigenous knowledge and creativity
            as a foundation for community empowerment, social inclusion, peace
            and sustainable development.
          </p>
          <div className="flex flex-wrap gap-4 mb-9">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-paper border-[1.5px] border-ink px-7 py-3.5 font-mono text-[0.82rem] uppercase tracking-wide hover:-translate-y-1 hover:shadow-[0_14px_26px_-10px_rgba(22,50,79,0.55)] transition-all"
            >
              Discover Our Work →
            </a>
            <a
              href="#partner"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-7 py-3.5 font-mono text-[0.82rem] uppercase tracking-wide hover:bg-ink hover:text-paper hover:-translate-y-1 transition-all"
            >
              Partner With Us
            </a>
          </div>
          <p className="font-mono text-[0.82rem] text-ink/70 border-l-2 border-gold pl-4 max-w-md">
            &ldquo;Utamaduni ni Urithi, Daraja ni Maendeleo&rdquo;
            <br />
            <span className="text-ink/50">Culture is Heritage, the Bridge is Development.</span>
          </p>
        </Reveal>

        <Reveal className="flex justify-center order-first lg:order-last" delay={150}>
          <Image
            src="/logo.png"
            alt="Daraja la Utamaduni Organization emblem with sustainable development icons"
            width={380}
            height={380}
            priority
            className="float-emblem w-full max-w-[280px] lg:max-w-[380px] drop-shadow-[0_30px_40px_rgba(22,50,79,0.22)]"
          />
        </Reveal>
      </div>

      <div className="w-full leading-[0]">
        <svg
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          className="w-full h-auto block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="bridge-path"
            d="M0,140 C120,60 220,150 340,90 C420,50 480,120 560,70 C640,20 700,110 780,60 C880,0 960,120 1040,70 C1090,40 1150,90 1200,60"
            fill="none"
            stroke="#16324F"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line x1="0" y1="150" x2="1200" y2="150" stroke="#16324F" strokeOpacity="0.15" />
        </svg>
      </div>
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 pb-8 flex justify-between font-mono text-[0.72rem] md:text-[0.75rem] uppercase tracking-widest text-ink/60">
        <span>&#9666; Utamaduni / Heritage</span>
        <span>Maendeleo / Development &#9656;</span>
      </div>

      <div className="border-y border-sanddeep bg-sand py-4 overflow-hidden">
        <div className="marquee-track font-mono text-[0.82rem] uppercase tracking-wide text-ink">
          {[...PILLARS, ...PILLARS].map((p, i) => (
            <span key={i} className="flex items-center gap-3">
              {p} <span className="text-gold text-[0.6rem]">&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
