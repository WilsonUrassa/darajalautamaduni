"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Work" },
  { href: "/gallery", label: "Stories & Gallery" },
  { href: "/impact", label: "Impact" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${scrolled ? "bg-paper/95 py-3 shadow-[0_8px_30px_-18px_rgba(22,50,79,0.5)] backdrop-blur-md" : "bg-transparent py-5"}`}>
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 md:px-8">
        <a href="/#top" className="flex min-w-0 items-center gap-3" aria-label="Daraja la Utamaduni home">
          <Image src="/logo.png" alt="Daraja la Utamaduni Organization logo" width={48} height={48} className={`object-contain transition-all duration-300 ${scrolled ? "h-10 w-10" : "h-12 w-12"}`} />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-[0.92rem] font-bold md:text-[1.04rem]">DARAJA LA UTAMADUNI</span>
            <small className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-forest">Kwa Maendeleo Endelevu</small>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="text-[0.82rem] font-medium transition-colors hover:text-clay">{link.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/#contact" className="hidden rounded-full bg-ink px-5 py-2.5 font-mono text-[0.76rem] uppercase tracking-wide text-paper transition hover:-translate-y-0.5 md:inline-flex">Get in Touch</a>
          <button aria-label="Toggle navigation menu" aria-expanded={open} className="flex flex-col gap-1.5 p-2 lg:hidden" onClick={() => setOpen((value) => !value)}>
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <div className={`fixed right-0 top-0 z-[99] flex h-screen w-[84%] max-w-sm flex-col justify-center gap-7 bg-ink px-10 text-paper transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        {NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="text-lg font-medium" onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="/#contact" className="mt-3 inline-flex w-fit rounded-full border border-gold px-5 py-2.5 font-mono text-sm uppercase tracking-wide text-gold" onClick={() => setOpen(false)}>Get in Touch</a>
      </div>
    </header>
  );
}
