"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface SessionProps {
  session: Session | null;
  children: React.ReactNode;
}

const Provider = ({ children, session }: SessionProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
