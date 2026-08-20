-- Run this once in Supabase → SQL Editor → New query → Run.
-- It creates the table that stores every "Contact Us" submission from the website.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  organization text,
  subject text not null,
  message text not null
);

-- Row Level Security: locked down by default, then opened only for the
-- one action the public website needs (inserting a new message).
alter table public.contact_messages enable row level security;

drop policy if exists "Public can submit contact messages" on public.contact_messages;
create policy "Public can submit contact messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- No select/update/delete policy is created for the anon role, so
-- messages can only be read from the Supabase dashboard (Table Editor)
-- or with the service role key — visitors can never read each other's
-- submissions.
