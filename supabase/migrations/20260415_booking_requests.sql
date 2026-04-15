create table if not exists booking_requests (
  id bigint generated always as identity primary key,
  full_name text not null default '',
  email text not null default '',
  phone text not null default '',
  package_name text not null default '',
  preferred_date date,
  notes text,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists booking_requests_created_at_idx on booking_requests (created_at desc);
create index if not exists booking_requests_status_idx on booking_requests (status);

alter table booking_requests enable row level security;

drop policy if exists "public read booking_requests" on booking_requests;
