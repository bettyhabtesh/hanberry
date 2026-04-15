import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin/require-admin";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const packageSchema = z.object({
  category_id: z.number().int(),
  name: z.string().min(1),
  type: z.string().min(1),
  description: z.string().min(1),
  price: z.number().int(),
  duration: z.string().min(1),
  optional_note: z.string().nullable().optional(),
  includes: z.array(z.string()).default([]),
  image_url: z.string().nullable().optional(),
  sort_order: z.number().int().default(0),
  active: z.boolean().default(true),
});

export async function GET() {
  const auth = await requireAdmin();
  if (!auth.authorized) return auth.response;

  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase.from("booking_packages").select("*").order("sort_order", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const auth = await requireAdmin();
  if (!auth.authorized) return auth.response;

  const parsed = packageSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const supabase = createSupabaseAdminClient();
  const payload = { ...parsed.data, optional_note: parsed.data.optional_note || null, image_url: parsed.data.image_url || null };
  const { data, error } = await supabase.from("booking_packages").insert(payload).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
