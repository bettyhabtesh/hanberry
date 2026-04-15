import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createSupabaseAdminClient();

  const [bookingCountRes, activePackagesRes] = await Promise.all([
    supabase
      .from("booking_requests")
      .select("*", { count: "exact", head: true }),
    supabase
      .from("booking_packages")
      .select("*", { count: "exact", head: true })
      .eq("active", true),
  ]);

  if (bookingCountRes.error || activePackagesRes.error) {
    return NextResponse.json({ error: "Failed to load dashboard metrics" }, { status: 500 });
  }

  return NextResponse.json({
    bookings: bookingCountRes.count ?? 0,
    activePackages: activePackagesRes.count ?? 0,
  });
}
