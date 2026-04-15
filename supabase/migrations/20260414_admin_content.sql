create extension if not exists "pgcrypto";

create table if not exists booking_content (
  id bigint generated always as identity primary key,
  heading text not null,
  subheading text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists booking_categories (
  id bigint generated always as identity primary key,
  name text not null,
  sort_order int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists booking_packages (
  id bigint generated always as identity primary key,
  category_id bigint not null references booking_categories(id) on delete cascade,
  name text not null,
  type text not null,
  description text not null,
  price int not null,
  duration text not null,
  optional_note text,
  includes text[] not null default '{}',
  image_url text,
  sort_order int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists home_works_content (
  id bigint generated always as identity primary key,
  title text not null,
  subtitle text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists home_works_images (
  id bigint generated always as identity primary key,
  image_url text not null,
  height int not null,
  type text not null default '',
  sort_order int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists gallery_content (
  id bigint generated always as identity primary key,
  title text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists gallery_images (
  id bigint generated always as identity primary key,
  image_url text not null,
  height int not null,
  type text not null default '',
  sort_order int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table booking_content enable row level security;
alter table booking_categories enable row level security;
alter table booking_packages enable row level security;
alter table home_works_content enable row level security;
alter table home_works_images enable row level security;
alter table gallery_content enable row level security;
alter table gallery_images enable row level security;

drop policy if exists "public read booking_content" on booking_content;
create policy "public read booking_content" on booking_content for select using (true);
drop policy if exists "public read booking_categories" on booking_categories;
create policy "public read booking_categories" on booking_categories for select using (true);
drop policy if exists "public read booking_packages" on booking_packages;
create policy "public read booking_packages" on booking_packages for select using (true);
drop policy if exists "public read home_works_content" on home_works_content;
create policy "public read home_works_content" on home_works_content for select using (true);
drop policy if exists "public read home_works_images" on home_works_images;
create policy "public read home_works_images" on home_works_images for select using (true);
drop policy if exists "public read gallery_content" on gallery_content;
create policy "public read gallery_content" on gallery_content for select using (true);
drop policy if exists "public read gallery_images" on gallery_images;
create policy "public read gallery_images" on gallery_images for select using (true);

insert into booking_content (heading, subheading, active)
select 'Packages & Prices', 'Because being beautiful should never harm you', true
where not exists (select 1 from booking_content);

insert into home_works_content (title, subtitle, active)
select 'Elegant & Luxury Makeup Works', 'Explore a curated selection of makeup looks, each crafted to enhance natural beauty and personal style.', true
where not exists (select 1 from home_works_content);

insert into gallery_content (title, active)
select 'Gallery', true
where not exists (select 1 from gallery_content);
