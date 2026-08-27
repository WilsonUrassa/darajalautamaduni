"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Media={id:string;title:string|null;description:string|null;media_type:"image"|"video";media_url:string;thumbnail_url:string|null;alt_text:string|null};

export default function ProgramMedia({programId}:{programId:string}){
  const [items,setItems]=useState<Media[]>([]);
  useEffect(()=>{ if(!supabase)return; supabase.from("gallery_items").select("id,title,description,media_type,media_url,thumbnail_url,alt_text").eq("program_id",programId).eq("published",true).order("created_at",{ascending:false}).limit(6).then(({data})=>setItems(data||[])); },[programId]);
  if(!items.length)return null;
  return <div className="mt-8 border-t border-ink/10 pt-7"><div className="flex items-end justify-between gap-4 mb-4"><div><span className="eyebrow">From the Field</span><h3 className="font-display font-bold text-xl mt-1">This work in pictures</h3></div></div><div className="grid grid-cols-2 md:grid-cols-3 gap-3">{items.map(m=><figure key={m.id} className="overflow-hidden rounded-2xl bg-sand"><div className="aspect-[4/3]">{m.media_type==="video"?<video src={m.media_url} poster={m.thumbnail_url||undefined} controls preload="metadata" className="w-full h-full object-cover"/>:<img src={m.media_url} alt={m.alt_text||m.title||"Daraja la Utamaduni programme activity"} className="w-full h-full object-cover"/>}</div>{(m.title||m.description)&&<figcaption className="p-3 text-xs text-ink/65">{m.title&&<strong className="block text-ink">{m.title}</strong>}{m.description&&<span>{m.description}</span>}</figcaption>}</figure>)}</div></div>;
}
