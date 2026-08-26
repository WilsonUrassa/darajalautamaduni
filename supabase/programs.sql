-- Program management: current programs, not project proposals
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
