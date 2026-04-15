import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin/auth";

type AuthorizedAdmin = {
  authorized: true;
  session: Awaited<ReturnType<typeof getAdminSession>>;
};

type UnauthorizedAdmin = {
  authorized: false;
  session: null;
  response: NextResponse;
};

export async function requireAdmin(): Promise<AuthorizedAdmin | UnauthorizedAdmin> {
  const session = await getAdminSession();
  if (!session) {
    return {
      authorized: false,
      session: null,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  return {
    authorized: true,
    session,
  };
}
