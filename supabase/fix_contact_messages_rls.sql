-- Fix public contact-form submissions.
-- The website intentionally sends contact messages as an anonymous visitor,
-- so anon must have INSERT permission on this table. No public SELECT/UPDATE/DELETE is granted.
alter table public.contact_messages enable row level security;
drop policy if exists "Public can submit contact messages" on public.contact_messages;
create policy "Public can submit contact messages"
on public.contact_messages
for insert
to anon, authenticated
with check (true);
