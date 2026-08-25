-- Run after supabase/schema.sql in Supabase SQL Editor.
-- This allows authenticated dashboard users to manage proposal/gallery records and upload files.

drop policy if exists "Authenticated can insert proposals" on public.project_proposals;
create policy "Authenticated can insert proposals" on public.project_proposals for insert to authenticated with check (true);
drop policy if exists "Authenticated can update proposals" on public.project_proposals;
create policy "Authenticated can update proposals" on public.project_proposals for update to authenticated using (true) with check (true);
drop policy if exists "Authenticated can delete proposals" on public.project_proposals;
create policy "Authenticated can delete proposals" on public.project_proposals for delete to authenticated using (true);

drop policy if exists "Authenticated can insert gallery items" on public.gallery_items;
create policy "Authenticated can insert gallery items" on public.gallery_items for insert to authenticated with check (true);
drop policy if exists "Authenticated can update gallery items" on public.gallery_items;
create policy "Authenticated can update gallery items" on public.gallery_items for update to authenticated using (true) with check (true);
drop policy if exists "Authenticated can delete gallery items" on public.gallery_items;
create policy "Authenticated can delete gallery items" on public.gallery_items for delete to authenticated using (true);

drop policy if exists "Authenticated can upload proposal files" on storage.objects;
create policy "Authenticated can upload proposal files" on storage.objects for insert to authenticated with check (bucket_id='project-proposals');
drop policy if exists "Authenticated can update proposal files" on storage.objects;
create policy "Authenticated can update proposal files" on storage.objects for update to authenticated using (bucket_id='project-proposals') with check (bucket_id='project-proposals');
drop policy if exists "Authenticated can delete proposal files" on storage.objects;
create policy "Authenticated can delete proposal files" on storage.objects for delete to authenticated using (bucket_id='project-proposals');

drop policy if exists "Authenticated can upload gallery files" on storage.objects;
create policy "Authenticated can upload gallery files" on storage.objects for insert to authenticated with check (bucket_id='project-gallery');
drop policy if exists "Authenticated can update gallery files" on storage.objects;
create policy "Authenticated can update gallery files" on storage.objects for update to authenticated using (bucket_id='project-gallery') with check (bucket_id='project-gallery');
drop policy if exists "Authenticated can delete gallery files" on storage.objects;
create policy "Authenticated can delete gallery files" on storage.objects for delete to authenticated using (bucket_id='project-gallery');
