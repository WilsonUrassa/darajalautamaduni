import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DirectorMessage from "@/components/DirectorMessage";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Programmes from "@/components/Programmes";
import Beneficiaries from "@/components/Beneficiaries";
import StrategicApproach from "@/components/StrategicApproach";
import Partnership from "@/components/Partnership";
import SDGs from "@/components/SDGs";
import Alignment from "@/components/Alignment";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsGallerySection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DirectorMessage />
      <About />
      <Philosophy />
      <Programmes />
      <Beneficiaries />
      <StrategicApproach />
      <Partnership />
      <SDGs />
      <Alignment />
      <ProjectsSection />
      <CallToAction />
      <ContactForm />
      <Footer />
    </main>
  );
}
