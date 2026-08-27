create table if not exists public.section_media (id uuid primary key default gen_random_uuid(), section_key text not null, title text, description text, media_url text not null, media_type text not null default 'image' check (media_type in ('image','video')), published boolean not null default true, sort_order integer not null default 0, created_at timestamptz not null default now());
create index if not exists section_media_key_idx on public.section_media(section_key, sort_order);
alter table public.section_media enable row level security;
drop policy if exists "Public can view published section media" on public.section_media;
create policy "Public can view published section media" on public.section_media for select to anon, authenticated using (published=true);
drop policy if exists "Authenticated users can manage section media" on public.section_media;
create policy "Authenticated users can manage section media" on public.section_media for all to authenticated using (true) with check (true);
