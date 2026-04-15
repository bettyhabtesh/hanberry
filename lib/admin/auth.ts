import bcrypt from "bcryptjs";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const ADMIN_COOKIE_NAME = "hb_admin_session";

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env variable: ${key}`);
  }
  return value;
};

const secretKey = () => new TextEncoder().encode(getEnv("ADMIN_JWT_SECRET"));

interface AdminJwtPayload extends JWTPayload {
  username: string;
}

export async function verifyAdminCredentials(
  emailOrUsername: string,
  password: string,
): Promise<boolean> {
  const email = emailOrUsername.trim().toLowerCase();
  if (!email || !password) {
    return false;
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("verifyAdminCredentials: Supabase env not configured");
    return false;
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("admin_users")
      .select("password_hash")
      .eq("email", email)
      .maybeSingle();

    if (error || !data?.password_hash) {
      return false;
    }

    return bcrypt.compare(password, data.password_hash);
  } catch {
    return false;
  }
}

export async function signAdminToken(payload: AdminJwtPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey());
}

export async function verifyAdminToken(token: string): Promise<AdminJwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey());
    if (typeof payload.username !== "string") {
      return null;
    }

    return { username: payload.username };
  } catch {
    return null;
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  return verifyAdminToken(token);
}
