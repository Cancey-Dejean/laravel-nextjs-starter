"use client";

import { useAuth } from "@/hooks/auth";

export default function DashboardHeader() {
  const { user, logout } = useAuth({ middleware: "guest" });

  return (
    <header>
      {/*<LoginLinks />*/}
      <h1>Welcome {user?.name}</h1>
    </header>
  );
}
