"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const SECTIONS = [
  ["director", "Director’s Message"],
  ["about", "About Daraja"],
  ["culture", "Culture, Heritage & Arts"],
  ["education", "Education, Skills & Youth"],
  ["women", "Women & Girls Empowerment"],
  ["livelihoods", "Sustainable Livelihoods"],
  ["environment", "Environment & Climate"],
  ["rights", "Human Rights & Social Justice"],
  ["peace", "Peace & Good Governance"],
  ["sdg-1", "SDG 1, No Poverty"],
  ["sdg-4", "SDG 4, Quality Education"],
  ["sdg-5", "SDG 5, Gender Equality"],
  ["sdg-8", "SDG 8, Decent Work"],
  ["sdg-10", "SDG 10, Reduced Inequalities"],
  ["sdg-11", "SDG 11, Sustainable Communities"],
  ["sdg-13", "SDG 13, Climate Action"],
  ["sdg-16", "SDG 16, Peace & Justice"],
  ["sdg-17", "SDG 17, Partnerships"],
  ["field", "From the Field"],
] as const;

type MediaItem = {
  id: string;
  section_key: string;
  title: string | null;
  description: string | null;
  media_url: string;
  media_type: string;
};

export default function AllSectionMedia() {
  const [items, setItems] = useState<MediaItem[]>([]);

  useEffect(() => {
    let alive = true;

    (async () => {
      const c = supabase;
      if (!c) return;

      const { data } = await c
        .from("section_media")
        .select("id,section_key,title,description,media_url,media_type")
        .eq("published", true)
        .order("sort_order")
        .order("created_at", { ascending: false });

      if (alive) setItems((data || []) as MediaItem[]);
    })();

    return () => {
      alive = false;
    };
  }, []);

  if (!items.length) return null;

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Programme &amp; Project Media</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Our Work in Pictures
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/65">
            Photos and videos uploaded through the admin dashboard are displayed here in the section where they were assigned.
          </p>
        </div>

        <div className="space-y-14">
          {SECTIONS.map(([key, label]) => {
            const sectionItems = items.filter((item) => item.section_key === key);
            if (!sectionItems.length) return null;

            return (
              <div key={key} id={`media-${key}`}>
                <div className="mb-5">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-forest">
                    {label}
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {sectionItems.map((item) => (
                    <figure key={item.id} className="overflow-hidden rounded-[1.5rem] bg-sand shadow-sm">
                      <div className="relative aspect-[4/3]">
                        {item.media_type === "video" ? (
                          <video
                            src={item.media_url}
                            controls
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Image
                            src={item.media_url}
                            alt={item.title || label}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        )}
                      </div>
                      {(item.title || item.description) && (
                        <figcaption className="p-4">
                          {item.title && <p className="font-display font-semibold">{item.title}</p>}
                          {item.description && (
                            <p className="mt-1 text-sm leading-relaxed text-ink/60">
                              {item.description}
                            </p>
                          )}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
