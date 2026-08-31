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
import SectionMedia from "@/components/SectionMedia";
import AllSectionMedia from "@/components/AllSectionMedia";
import { ProjectsSection } from "@/components/ProjectsGallerySection";

export default function Home(){return <main className="overflow-hidden bg-paper"><Header/><Hero/><DirectorMessage/><About/><Philosophy/><Programmes/><AllSectionMedia/><section id="field" className="bg-ink py-20 md:py-28"><div className="mx-auto max-w-[1240px] px-6 md:px-8"><div className="mb-10 max-w-2xl"><span className="eyebrow eyebrow-light">From the Field</span><h2 className="mt-4 font-display text-4xl font-bold text-paper md:text-5xl">Real people. Real communities. Real work.</h2><p className="mt-4 text-paper/65 text-lg leading-relaxed">A glimpse of the people, places and activities behind Daraja la Utamaduni&apos;s work.</p></div><SectionMedia sectionKey="field"/></div></section><Beneficiaries/><StrategicApproach/><Partnership/><SDGs/><Alignment/><ProjectsSection/><CallToAction/><ContactForm/><Footer/></main>}
