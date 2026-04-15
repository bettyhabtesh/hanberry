## Setup

### Required env vars

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD_HASH`
- `ADMIN_JWT_SECRET`

### Supabase setup

1. Create a Supabase project.
2. Create a public storage bucket named `gallery-images`.
3. Copy project URL and keys into `.env.local`.

### Run SQL migrations

Run files in this order:

1. `supabase/migrations/20260414_admin_content.sql`

### Generate ADMIN_PASSWORD_HASH

Run:

```bash
node -e "const bcrypt=require('bcryptjs'); bcrypt.hash('@only#ham%can$ENTER', 12).then(console.log)"
```

Set:

- `ADMIN_USERNAME=Hamnel'sHanBerry`
- `ADMIN_PASSWORD_HASH=<generated hash>`

### Local testing

1. `npm install`
2. `npm run dev`
3. Visit `/admin/login`
4. Login and manage Booking, Home Works, Gallery
5. Verify public pages at `/` and `/gallery`
