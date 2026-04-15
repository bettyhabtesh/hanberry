import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/admin/require-admin";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const updateSchema = z.object({
  category_id: z.number().int(),
  name: z.string().min(1),
  type: z.string().min(1),
  description: z.string().min(1),
  price: z.number().int(),
  duration: z.string().min(1),
  optional_note: z.string().nullable().optional(),
  includes: z.array(z.string()),
  image_url: z.string().nullable().optional(),
  sort_order: z.number().int(),
  active: z.boolean(),
});

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin();
  if (!auth.authorized) return auth.response;
  const { id } = await context.params;

  const parsed = updateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const supabase = createSupabaseAdminClient();
  const payload = { ...parsed.data, optional_note: parsed.data.optional_note || null, image_url: parsed.data.image_url || null };
  const { data, error } = await supabase.from("booking_packages").update(payload).eq("id", id).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin();
  if (!auth.authorized) return auth.response;
  const { id } = await context.params;

  const supabase = createSupabaseAdminClient();
  const { error } = await supabase.from("booking_packages").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
