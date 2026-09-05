import Image from "next/image";
import Reveal from "./Reveal";

const PILLARS = ["WATU", "ELIMU", "AFYA", "NISHATI", "MAJI SAFI", "UCHUMI", "UBUNIFU", "UWAJIBIKAJI", "MAZINGIRA", "AMANI"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 text-paper md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(206,154,52,0.20),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(44,110,73,0.28),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 pb-16 md:px-8 md:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-24">
        <Reveal>
          <span className="eyebrow eyebrow-light">Tanzanian Non Governmental Organization</span>
          <h1 className="mt-5 max-w-3xl font-display text-[2.65rem] font-extrabold leading-[1.02] tracking-tight md:text-[4rem] lg:text-[4.7rem]">Culture as a <span className="text-gold">Bridge</span> to Sustainable Development</h1>
          <p className="mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-paper/75 md:text-[1.12rem]">DARAJA LA UTAMADUNI ORGANIZATION preserves, promotes and harnesses Tanzania&rsquo;s cultural heritage, indigenous knowledge and creativity as a foundation for community empowerment, social inclusion, peace and sustainable development.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#about" className="inline-flex rounded-full bg-gold px-7 py-3.5 font-mono text-[0.78rem] font-semibold uppercase tracking-wide text-ink transition hover:-translate-y-1 hover:shadow-lg">Discover Our Work</a>
            <a href="/partner" className="inline-flex rounded-full border border-paper/40 px-7 py-3.5 font-mono text-[0.78rem] uppercase tracking-wide text-paper transition hover:-translate-y-1 hover:border-gold hover:text-gold">Partner With Us</a>
          </div>
          <p className="mt-9 border-l-2 border-gold pl-4 font-mono text-[0.78rem] uppercase tracking-wide text-paper/70">&ldquo;Utamaduni ni Urithi, Daraja ni Maendeleo&rdquo;<br /><span className="normal-case tracking-normal text-paper/45">Culture is Heritage, the Bridge is Development.</span></p>
        </Reveal>
        <Reveal className="relative order-first lg:order-last" delay={150}>
          <div className="relative mx-auto max-w-[480px] rounded-[2rem] border border-paper/15 bg-paper/[0.06] p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <div className="absolute -right-3 -top-3 rounded-full bg-gold px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-ink">Heritage, Community and Development</div>
            <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-paper p-8 md:p-12"><Image src="/logo.png" alt="Daraja la Utamaduni Organization emblem" width={420} height={420} priority className="float-emblem h-auto w-full max-w-[360px] object-contain" /></div>
            <div className="mt-5 grid grid-cols-2 gap-3 font-mono text-[0.68rem] uppercase tracking-wider text-paper/60"><div className="rounded-xl border border-paper/10 px-4 py-3">Community led</div><div className="rounded-xl border border-paper/10 px-4 py-3">Culture centred</div></div>
          </div>
        </Reveal>
      </div>
      <div className="relative border-y border-paper/10 bg-black/10 py-4 overflow-hidden"><div className="marquee-track font-mono text-[0.78rem] uppercase tracking-wide text-paper/65">{[...PILLARS, ...PILLARS].map((p, i) => <span key={i} className="flex items-center gap-3">{p}</span>)}</div></div>
    </section>
  );
}
