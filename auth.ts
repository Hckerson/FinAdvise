import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider  from "next-auth/providers/linkedin";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: { 
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          firstName: profile.given_name,
          lastName: profile.family_name,
          username: profile.username,
          locale: profile.locale,
        };
      },
    }),

    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.id_str as string,
          name: profile.name as string,
          username: profile.screen_name as string,
          email: profile.email as string, // This will only be present if user granted permission
          image: profile.profile_image_url_https as string,
          firstName: "", // Twitter doesn't have this
          lastName: "", // Twitter doesn't have this
          locale: "",
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, profile, account }) {
      if (account && profile) {
        token.provider = account.provider;
        // Google provider — since profile.sub exists
        if (account?.provider === "google") {
          token.firstName = profile.given_name;
          token.lastName = profile.family_name;
          token.locale = profile.locale;
          token.verified = profile.email_verified;
        }

        // Twitter provider — simpler profile object

        if (account.provider === "linkedin") {
          // grab it from the **raw** profile, not the DB user
          token.twitterId =
            (profile as any).id_str ?? (profile as any).data?.id;
          token.username =
            (profile as any).screen_name ?? (profile as any).data?.username;
          token.name = (profile as any).name ?? (profile as any).data?.name;
          token.image =
            (profile as any).profile_image_url_https ??
            (profile as any).data?.profile_image_url;
          token.email = (profile as any).email; // may be undefined
        }
      }
      return token;
    },

    async session({ session, token }) {
      // If Google
      if (token.provider === "google") {
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.locale = token.locale as string;
        session.user.verified = token.verified as boolean;
      }

      if (token.provider === "linkedin") {
        session.user.id       = token.twitterId    as string
        session.user.username = token.username     as string
        session.user.name     = token.name         as string
        session.user.image    = token.image        as string
        session.user.email    = token.email        as string
      }

      return session;
    },
  },
});