// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
import CognitoProvider from 'next-auth/providers/cognito';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';

const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      clientId: "57b8j8pu255e93nbkm209ac3pe",
      clientSecret:"104i1lu4qau8h8uninvsvf4p6ic8moi76hut8op4vdv0spu0le7o",
      issuer:"https://cognito-idp.us-east-1.amazonaws.com/us-east-1_9Gr7YFD54",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();
        
        if (res.ok && user) {
          return user;
        } else {
          throw new Error('Login failed');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.idToken = user.idToken;
      }
      console.log(token);
      
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      console.log({session, token});
      
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
