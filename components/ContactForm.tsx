"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

const SUBJECTS = [
  "I would like to volunteer",
  "I would like to donate / fund a programme",
  "Institutional or corporate partnership",
  "Research or academic collaboration",
  "Media / press enquiry",
  "General enquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      full_name: String(data.get("full_name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim() || null,
      organization: String(data.get("organization") || "").trim() || null,
      subject: String(data.get("subject") || SUBJECTS[5]),
      message: String(data.get("message") || "").trim(),
    };

    if (!supabase) {
      setStatus("error");
      setErrorMsg(
        "The contact form isn't connected yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment variables."
      );
      return;
    }

    const { error } = await supabase.from("contact_messages").insert([payload]);

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <section id="contact" className="bg-ink text-paper py-24 md:py-28">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow eyebrow-light">Get in Touch</span>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.5rem] mt-4 text-paper">
            Tell Us How You&rsquo;d Like to Join the Bridge
          </h2>
          <p className="text-paper/65 mt-4">
            Send us a message about volunteering, funding, or partnership.
            Our team will get back to you as soon as possible.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal className="flex flex-col gap-7">
            <InfoItem title="Head Office">
              Mtaa wa Sokoni, near Ofisi ya Mtaa wa Sokoni
              <br />
              Njoro Ward, Moshi District
              <br />
              Kilimanjaro Region, Tanzania
              <br />
              P.O. Box 7889
            </InfoItem>
            <InfoItem title="Email">
              darajalautamaduniorganization@gmail.com
            </InfoItem>
            <InfoItem title="Telephone">
              +255 715 493 625
            </InfoItem>
            <InfoItem title="Our Motto">
              &ldquo;Bridging Culture, Communities and Sustainable
              Development.&rdquo;
              <br />
              <span className="text-paper/50 text-sm">
                Culture, Inclusion, Empowerment, Innovation, Sustainability and Partnership
              </span>
            </InfoItem>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="full_name" required placeholder="Your full name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Phone (optional)" name="phone" placeholder="+255 ..." />
                <Field
                  label="Organization (optional)"
                  name="organization"
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label className="block font-mono text-[0.7rem] uppercase tracking-widest text-paper/60 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  defaultValue={SUBJECTS[5]}
                  className="w-full bg-paper/5 border border-paper/25 rounded-lg px-4 py-3 text-paper focus:outline-none focus:border-gold"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s} className="text-ink">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-mono text-[0.7rem] uppercase tracking-widest text-paper/60 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full bg-paper/5 border border-paper/25 rounded-lg px-4 py-3 text-paper placeholder:text-paper/35 focus:outline-none focus:border-gold resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="self-start inline-flex items-center gap-2 rounded-full bg-gold text-ink border-[1.5px] border-gold px-7 py-3.5 font-mono text-[0.82rem] uppercase tracking-wide hover:-translate-y-1 hover:shadow-[0_14px_26px_-10px_rgba(206,154,52,0.55)] transition-all disabled:opacity-60 disabled:translate-y-0"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              {status === "success" && (
                <p className="font-mono text-sm text-gold">
                  Thank you! Your message has been received. We will get back
                  to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-sm text-clay">
                  Something went wrong: {errorMsg}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div>
        <h4 className="font-display font-semibold mb-1">{title}</h4>
        <p className="text-paper/65 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[0.7rem] uppercase tracking-widest text-paper/60 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-paper/5 border border-paper/25 rounded-lg px-4 py-3 text-paper placeholder:text-paper/35 focus:outline-none focus:border-gold"
      />
    </div>
  );
}
