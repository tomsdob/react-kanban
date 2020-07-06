import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.SITE,
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGO_URI,
  // Custom pages
  pages: {
    signin: "/auth/login",
  },
};

export default (req, res) => NextAuth(req, res, options);
