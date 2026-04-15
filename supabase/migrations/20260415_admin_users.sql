-- Admin login: bcrypt hash stored in DB; only the service role should access this table.

create table if not exists admin_users (
  id bigint generated always as identity primary key,
  email text not null,
  password_hash text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists admin_users_email_lower_idx on admin_users (lower(email));

alter table admin_users enable row level security;

-- Seed admin (password plain text is 123456ham — rotate in production)
insert into admin_users (email, password_hash)
select
  'hami0935712362@gmail.com',
  '$2b$10$Ql.Ofjww0OhBV3qAl0n.ZOUJTRX9ovX/Kw2Od5tbyOXACYMUH6RVi'
where not exists (
  select 1 from admin_users where lower(email) = lower('hami0935712362@gmail.com')
);
