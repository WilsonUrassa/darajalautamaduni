-- Daraja la Utamaduni: complete admin publishing/storage permissions
-- Run this ONCE in Supabase SQL Editor while logged into the project.
-- It is safe to run repeatedly.

-- =========================
-- PROGRAMS
-- =========================
create table if not exists public.organization_programs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text,
  description text,
  objective text,
  target_community text,
  location text,
  activities text,
  impact text,
  image_url text,
  document_url text,
  document_name text,
  sort_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.organization_programs enable row level security;
drop policy if exists "Public can view published programs" on public.organization_programs;
create policy "Public can view published programs" on public.organization_programs for select to anon, authenticated using (published = true);
drop policy if exists "Authenticated admins manage programs" on public.organization_programs;
create policy "Authenticated admins manage programs" on public.organization_programs for all to authenticated using (true) with check (true);

insert into storage.buckets (id,name,public) values ('program-media','program-media',true) on conflict (id) do update set public=true;
insert into storage.buckets (id,name,public) values ('program-documents','program-documents',true) on conflict (id) do update set public=true;
drop policy if exists "Public can read program media" on storage.objects;
create policy "Public can read program media" on storage.objects for select to anon, authenticated using (bucket_id='program-media');
drop policy if exists "Public can read program documents" on storage.objects;
create policy "Public can read program documents" on storage.objects for select to anon, authenticated using (bucket_id='program-documents');
drop policy if exists "Authenticated can upload program media" on storage.objects;
create policy "Authenticated can upload program media" on storage.objects for insert to authenticated with check (bucket_id='program-media');
drop policy if exists "Authenticated can update program media" on storage.objects;
create policy "Authenticated can update program media" on storage.objects for update to authenticated using (bucket_id='program-media') with check (bucket_id='program-media');
drop policy if exists "Authenticated can delete program media" on storage.objects;
create policy "Authenticated can delete program media" on storage.objects for delete to authenticated using (bucket_id='program-media');
drop policy if exists "Authenticated can upload program documents" on storage.objects;
create policy "Authenticated can upload program documents" on storage.objects for insert to authenticated with check (bucket_id='program-documents');
drop policy if exists "Authenticated can update program documents" on storage.objects;
create policy "Authenticated can update program documents" on storage.objects for update to authenticated using (bucket_id='program-documents') with check (bucket_id='program-documents');
drop policy if exists "Authenticated can delete program documents" on storage.objects;
create policy "Authenticated can delete program documents" on storage.objects for delete to authenticated using (bucket_id='program-documents');

-- =========================
-- PROPOSALS + GALLERY
-- =========================
create table if not exists public.project_proposals (id uuid primary key default gen_random_uuid(), title text not null, description text, file_url text not null, file_name text not null, published boolean not null default true, created_at timestamptz not null default now());
alter table public.project_proposals enable row level security;
drop policy if exists "Public can view published proposals" on public.project_proposals;
create policy "Public can view published proposals" on public.project_proposals for select to anon, authenticated using (published = true);
drop policy if exists "Authenticated can manage proposals" on public.project_proposals;
create policy "Authenticated can manage proposals" on public.project_proposals for all to authenticated using (true) with check (true);

create table if not exists public.gallery_items (id uuid primary key default gen_random_uuid(), title text, description text, media_type text not null check (media_type in ('image','video')), media_url text not null, thumbnail_url text, published boolean not null default true, created_at timestamptz not null default now());
alter table public.gallery_items enable row level security;
drop policy if exists "Public can view published gallery items" on public.gallery_items;
create policy "Public can view published gallery items" on public.gallery_items for select to anon, authenticated using (published = true);
drop policy if exists "Authenticated can manage gallery items" on public.gallery_items;
create policy "Authenticated can manage gallery items" on public.gallery_items for all to authenticated using (true) with check (true);

insert into storage.buckets (id,name,public) values ('project-proposals','project-proposals',true) on conflict (id) do update set public=true;
insert into storage.buckets (id,name,public) values ('project-gallery','project-gallery',true) on conflict (id) do update set public=true;
drop policy if exists "Public can read proposal files" on storage.objects;
create policy "Public can read proposal files" on storage.objects for select to anon, authenticated using (bucket_id='project-proposals');
drop policy if exists "Public can read gallery files" on storage.objects;
create policy "Public can read gallery files" on storage.objects for select to anon, authenticated using (bucket_id='project-gallery');
drop policy if exists "Authenticated can manage proposal files" on storage.objects;
create policy "Authenticated can manage proposal files" on storage.objects for all to authenticated using (bucket_id='project-proposals') with check (bucket_id='project-proposals');
drop policy if exists "Authenticated can manage gallery files" on storage.objects;
create policy "Authenticated can manage gallery files" on storage.objects for all to authenticated using (bucket_id='project-gallery') with check (bucket_id='project-gallery');

-- =========================
-- ORGANIZATION CMS
-- =========================
create table if not exists public.organization_leaders (id uuid primary key default gen_random_uuid(), name text not null, role text not null, bio text, photo_url text not null, sort_order integer not null default 0, published boolean not null default true, created_at timestamptz not null default now());
alter table public.organization_leaders enable row level security;
drop policy if exists "Public can view published leaders" on public.organization_leaders;
create policy "Public can view published leaders" on public.organization_leaders for select to anon, authenticated using (published=true);
drop policy if exists "Authenticated manage leaders" on public.organization_leaders;
create policy "Authenticated manage leaders" on public.organization_leaders for all to authenticated using(true) with check(true);

create table if not exists public.organization_content (id uuid primary key default gen_random_uuid(), section text not null check(section in ('identity','impact','governance','safeguarding','accountability')), title text not null, body text, metric_value text, metric_label text, image_url text, document_url text, document_name text, sort_order integer not null default 0, published boolean not null default true, created_at timestamptz not null default now());
alter table public.organization_content enable row level security;
drop policy if exists "Public can view published organization content" on public.organization_content;
create policy "Public can view published organization content" on public.organization_content for select to anon, authenticated using(published=true);
drop policy if exists "Authenticated manage organization content" on public.organization_content;
create policy "Authenticated manage organization content" on public.organization_content for all to authenticated using(true) with check(true);

insert into storage.buckets(id,name,public) values('organization-media','organization-media',true) on conflict(id) do update set public=true;
insert into storage.buckets(id,name,public) values('organization-documents','organization-documents',true) on conflict(id) do update set public=true;
drop policy if exists "Public can read organization media" on storage.objects;
create policy "Public can read organization media" on storage.objects for select to anon, authenticated using(bucket_id='organization-media');
drop policy if exists "Public can read organization documents" on storage.objects;
create policy "Public can read organization documents" on storage.objects for select to anon, authenticated using(bucket_id='organization-documents');
drop policy if exists "Authenticated manage organization media" on storage.objects;
create policy "Authenticated manage organization media" on storage.objects for all to authenticated using(bucket_id='organization-media') with check(bucket_id='organization-media');
drop policy if exists "Authenticated manage organization documents" on storage.objects;
create policy "Authenticated manage organization documents" on storage.objects for all to authenticated using(bucket_id='organization-documents') with check(bucket_id='organization-documents');

-- Verification queries: these should return rows after the script succeeds.
select id, name, public from storage.buckets where id in ('program-media','program-documents','project-proposals','project-gallery','organization-media','organization-documents') order by id;
