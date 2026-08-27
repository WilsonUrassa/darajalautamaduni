import Header from "@/components/Header";
import Alignment from "@/components/Alignment";
import Footer from "@/components/Footer";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-paper">
      <Header />
      <section className="bg-sand pb-16 pt-36 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-[1180px] px-6 md:px-8">
          <span className="eyebrow">Impact & Accountability</span>
          <h1 className="mt-4 max-w-3xl font-display text-[2.7rem] font-extrabold leading-tight md:text-[4rem]">
            Turning culture, knowledge and inclusion into lasting impact.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            Explore how Daraja la Utamaduni connects cultural heritage, community empowerment, sustainable livelihoods and responsible development.
          </p>
        </div>
      </section>
      <Alignment />
      <Footer />
    </main>
  );
}
