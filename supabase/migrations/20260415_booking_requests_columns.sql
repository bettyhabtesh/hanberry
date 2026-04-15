alter table booking_requests
  add column if not exists person_quantity int not null default 1,
  add column if not exists duration text not null default '';

update booking_requests
set person_quantity = 1
where person_quantity is null;

update booking_requests
set duration = coalesce(duration, '')
where duration is null;
