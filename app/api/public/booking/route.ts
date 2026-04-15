import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createSupabaseServerClient();

  const [contentRes, categoriesRes, packagesRes] = await Promise.all([
    supabase.from("booking_content").select("*").eq("active", true).limit(1).maybeSingle(),
    supabase.from("booking_categories").select("*").eq("active", true).order("sort_order", { ascending: true }),
    supabase.from("booking_packages").select("*").eq("active", true).order("sort_order", { ascending: true }),
  ]);

  if (contentRes.error || categoriesRes.error || packagesRes.error) {
    return NextResponse.json({ error: "Failed to load booking content" }, { status: 500 });
  }

  return NextResponse.json({
    content: contentRes.data,
    categories: categoriesRes.data,
    packages: packagesRes.data,
  });
}
