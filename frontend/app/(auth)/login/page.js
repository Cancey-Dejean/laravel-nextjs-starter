"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InputError from "@/components/InputError";
import { useAuth } from "@/hooks/auth";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// import AuthSessionStatus from "@/app/(auth)/AuthSessionStatus";

const Login = () => {
  const router = useRouter();

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.reset));
    } else {
      setStatus(null);
    }
  });

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <>
      {/*<AuthSessionStatus className="mb-4" status={status} />*/}
      <form onSubmit={submitForm}>
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold">Login</h1>
        </CardHeader>

        <CardContent className="flex flex-col gap-y-4">
          {/* Email Address */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoFocus
            />

            <InputError messages={errors.email} className="mt-2" />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              value={password}
              className="mt-1 block w-full"
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
            />

            <InputError messages={errors.password} className="mt-2" />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <Input
              id="remember_me"
              type="checkbox"
              name="remember"
              className="size-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(event) => setShouldRemember(event.target.checked)}
            />
            <Label
              htmlFor="remember_me"
              className="text-sm font-medium leading-none text-gray-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </Label>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col justify-center gap-y-2">
          <Button className="w-full">Login</Button>
          <Link
            href="/forgot-password"
            className="text-sm text-gray-600 underline hover:text-gray-900"
          >
            Forgot your password?
          </Link>
        </CardFooter>
      </form>
    </>
  );
};

export default Login;
