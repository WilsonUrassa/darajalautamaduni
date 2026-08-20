import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F2438] text-paper/70 pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-paper/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Daraja la Utamaduni logo" width={40} height={40} />
              <strong className="font-display text-paper text-lg">
                DARAJA LA UTAMADUNI
              </strong>
            </div>
            <p className="text-sm max-w-[280px]">
              A Tanzanian NGO bridging culture, communities and sustainable
              development from Moshi, Kilimanjaro.
            </p>
          </div>

          <FooterCol title="Explore">
            <a href="#about">About Us</a>
            <a href="#programmes">Programmes</a>
            <a href="#beneficiaries">Beneficiaries</a>
            <a href="#sdgs">SDGs</a>
          </FooterCol>

          <FooterCol title="Get Involved">
            <a href="#partner">Partner With Us</a>
            <a href="#contact">Volunteer</a>
            <a href="#contact">Donate</a>
            <a href="#contact">Contact Us</a>
          </FooterCol>

          <FooterCol title="Head Office">
            <span>Mtaa wa Sokoni, Njoro Ward</span>
            <span>Moshi District, Kilimanjaro</span>
            <span>P.O. Box 7889, Tanzania</span>
            <span>+255 715 493 625</span>
          </FooterCol>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-3 pt-6 text-[0.8rem]">
          <span>&copy; {new Date().getFullYear()} Daraja la Utamaduni Organization. All rights reserved.</span>
          <span className="font-mono tracking-wide text-gold">
            Bridging Culture, Communities and Sustainable Development
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h5 className="font-mono uppercase text-[0.72rem] tracking-widest text-gold mb-4">
        {title}
      </h5>
      <div className="flex flex-col gap-2.5 text-sm [&>a:hover]:text-paper">
        {children}
      </div>
    </div>
  );
}
