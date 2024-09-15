"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/auth";

export default function LoginLinks() {
  const { user } = useAuth({ middleware: "guest" });

  return (
    <div className="">
      {user && <p>Welcome back, {user.name}!</p>}

      {!user && (
        <>
          <Link href="/login" className="text-sm text-gray-700 underline">
            Login
          </Link>

          <Link
            href="/register"
            className="ml-4 text-sm text-gray-700 underline"
          >
            Register
          </Link>
        </>
      )}
      {/*{user ? (*/}
      {/*  <Link*/}
      {/*    href="/dashboard"*/}
      {/*    className="ml-4 text-sm text-gray-700 underline"*/}
      {/*  >*/}
      {/*    Dashboard*/}
      {/*  </Link>*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    <Link href="/login" className="text-sm text-gray-700 underline">*/}
      {/*      Login*/}
      {/*    </Link>*/}

      {/*    <Link*/}
      {/*      href="/register"*/}
      {/*      className="ml-4 text-sm text-gray-700 underline"*/}
      {/*    >*/}
      {/*      Register*/}
      {/*    </Link>*/}
      {/*  </>*/}
      {/*)}*/}
    </div>
  );
}
