-- Existing contact form schema is preserved.
create table if not exists public.contact_messages (id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), full_name text not null, email text not null, phone text, organization text, subject text not null, message text not null);
alter table public.contact_messages enable row level security;
drop policy if exists "Public can submit contact messages" on public.contact_messages;
create policy "Public can submit contact messages" on public.contact_messages for insert to anon with check (true);

create table if not exists public.project_proposals (id uuid primary key default gen_random_uuid(), title text not null, description text, file_url text not null, file_name text not null, published boolean not null default true, created_at timestamptz not null default now());
alter table public.project_proposals enable row level security;
drop policy if exists "Public can view published proposals" on public.project_proposals;
create policy "Public can view published proposals" on public.project_proposals for select to anon, authenticated using (published = true);

create table if not exists public.gallery_items (id uuid primary key default gen_random_uuid(), title text, description text, media_type text not null check (media_type in ('image','video')), media_url text not null, thumbnail_url text, published boolean not null default true, created_at timestamptz not null default now());
alter table public.gallery_items enable row level security;
drop policy if exists "Public can view published gallery items" on public.gallery_items;
create policy "Public can view published gallery items" on public.gallery_items for select to anon, authenticated using (published = true);

insert into storage.buckets (id,name,public) values ('project-proposals','project-proposals',true) on conflict (id) do update set public=true;
insert into storage.buckets (id,name,public) values ('project-gallery','project-gallery',true) on conflict (id) do update set public=true;
drop policy if exists "Public can read proposal files" on storage.objects;
create policy "Public can read proposal files" on storage.objects for select to anon, authenticated using (bucket_id='project-proposals');
drop policy if exists "Public can read gallery files" on storage.objects;
create policy "Public can read gallery files" on storage.objects for select to anon, authenticated using (bucket_id='project-gallery');