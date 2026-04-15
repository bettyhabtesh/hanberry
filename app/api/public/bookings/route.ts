import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const bookingSchema = z.object({
  fullname: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email().optional().nullable(),
  date: z.string().optional().nullable(),
  quantity: z.number().int().min(1).default(1),
  packageName: z.string().min(1),
  duration: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  const parsed = bookingSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const supabase = createSupabaseAdminClient();
  const payload = {
    full_name: parsed.data.fullname.trim(),
    phone: parsed.data.phone.trim(),
    email: parsed.data.email?.trim() ?? "",
    package_name: parsed.data.packageName.trim(),
    duration: parsed.data.duration?.trim() ?? "",
    person_quantity: parsed.data.quantity,
    preferred_date: parsed.data.date || null,
    notes: parsed.data.notes?.trim() ?? null,
    status: "pending",
  };

  const { data, error } = await supabase.from("booking_requests").insert(payload).select("*").single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
