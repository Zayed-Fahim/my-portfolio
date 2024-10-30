import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const {
  signIn,
  signOut,
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: "/guestbook",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    GitHub,
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
