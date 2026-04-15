import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const [contentRes, imagesRes] = await Promise.all([
    supabase.from("gallery_content").select("*").eq("active", true).limit(1).maybeSingle(),
    supabase.from("gallery_images").select("*").eq("active", true).order("sort_order", { ascending: true }),
  ]);

  if (contentRes.error || imagesRes.error) {
    return NextResponse.json({ error: "Failed to load gallery content" }, { status: 500 });
  }

  return NextResponse.json({ content: contentRes.data, images: imagesRes.data });
}
