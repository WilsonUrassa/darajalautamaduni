-- Programme-specific field media migration.
-- Safe to run after the existing Daraja schema.

alter table public.gallery_items
  add column if not exists program_id uuid references public.organization_programs(id) on delete set null;
alter table public.gallery_items
  add column if not exists alt_text text;
create index if not exists gallery_items_program_id_idx on public.gallery_items(program_id);

-- Reuse the existing public project-gallery bucket.
insert into storage.buckets (id,name,public)
values ('project-gallery','project-gallery',true)
on conflict (id) do update set public=true;

drop policy if exists "Authenticated users can upload programme media" on storage.objects;
create policy "Authenticated users can upload programme media"
on storage.objects for insert to authenticated
with check (bucket_id='project-gallery');

drop policy if exists "Authenticated users can update programme media" on storage.objects;
create policy "Authenticated users can update programme media"
on storage.objects for update to authenticated
using (bucket_id='project-gallery') with check (bucket_id='project-gallery');

drop policy if exists "Authenticated users can delete programme media" on storage.objects;
create policy "Authenticated users can delete programme media"
on storage.objects for delete to authenticated
using (bucket_id='project-gallery');

drop policy if exists "Public can read programme media" on storage.objects;
create policy "Public can read programme media"
on storage.objects for select to anon, authenticated
using (bucket_id='project-gallery');

-- Authenticated admins can manage media rows; public users can only read published rows.
drop policy if exists "Authenticated users can manage gallery items" on public.gallery_items;
create policy "Authenticated users can manage gallery items"
on public.gallery_items for all to authenticated
using (true) with check (true);

drop policy if exists "Public can view published gallery items" on public.gallery_items;
create policy "Public can view published gallery items"
on public.gallery_items for select to anon, authenticated
using (published = true);
