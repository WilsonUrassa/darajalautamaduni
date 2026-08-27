-- Link field media to the program/project it documents.
-- Run once in Supabase SQL Editor.
alter table public.gallery_items add column if not exists program_id uuid references public.organization_programs(id) on delete set null;
alter table public.gallery_items add column if not exists alt_text text;
create index if not exists gallery_items_program_id_idx on public.gallery_items(program_id);

-- Existing media can remain unassigned and still appear in general story sections.
-- New media should be assigned to a program whenever possible.
