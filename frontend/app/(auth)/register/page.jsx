"use client";

import { useState } from "react";
import Link from "next/link";
import InputError from "@/components/InputError";
import { useAuth } from "@/hooks/auth";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Page = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <CardHeader className="text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
      </CardHeader>

      <CardContent className="flex flex-col gap-y-4">
        {/* Name */}
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="name">Name</Label>

          <Input
            id="name"
            type="text"
            value={name}
            className="block w-full"
            onChange={(event) => setName(event.target.value)}
            required
            autoFocus
          />

          <InputError messages={errors.name} className="mt-2" />
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            value={email}
            className="mt-1 block w-full"
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <InputError messages={errors.email} className="mt-2" />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            value={password}
            className="block w-full"
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="new-password"
          />

          <InputError messages={errors.password} className="mt-2" />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="passwordConfirmation">Confirm Password</Label>

          <Input
            id="passwordConfirmation"
            type="password"
            value={passwordConfirmation}
            className="block w-full"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            required
          />

          <InputError messages={errors.password_confirmation} />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col justify-center gap-y-2">
        <Button className="w-full">Register</Button>
        <Link
          href="/login"
          className="text-sm text-gray-600 underline hover:text-gray-900"
        >
          Already registered?
        </Link>
      </CardFooter>
    </form>
  );
};

export default Page;
