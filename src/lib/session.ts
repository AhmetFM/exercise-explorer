"use server";
import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.SECRET);

const myCookie = {
  name: "session",
  options: { httpOnly: true, secure: true, path: "/" },
  duration: 24 * 60 * 60 * 1000,
};

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session: any) {
  if (!session || typeof session !== "string") {
    return null;
  }

  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function createSession(userId: string) {
  const expires = new Date(Date.now() + myCookie.duration);
  const session = await encrypt({ userId, expires });

  cookies().set(myCookie.name, session, { ...myCookie.options, expires });
  redirect("/admin/dashboard");
}

export async function verifySession() {
  const cookie = cookies().get(myCookie.name)?.value;
  if (!cookie) {
    redirect("/admin/login");
  }

  const session = await decrypt(cookie);
  if (!session?.userId) {
    redirect("/admin/login");
  }

  return { userId: session.userId };
}

export async function deleteSession() {
  cookies().delete(myCookie.name);
  redirect("/admin/login");
}
