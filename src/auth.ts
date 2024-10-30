import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/guestbook/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHub,
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      session.userId = user.id;
      return Promise.resolve(session);
    },
  },
});
