"use server";
import { signIn, signOut } from "@/libs/auth";

export async function handleSignIn(provider: string) {
  await signIn(provider);
}
export async function handleLogOut() {
  await signOut();
}
