"use client";
import Button from "@/components/button/Button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const router = useRouter();
  const session = useSession();

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn("credentials", {
      email: Email,
      password: Password,
    });
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div>
      <p className="text-5xl font-semibold capitalize text-center mb-10">
        Login
      </p>
      <form
        onSubmit={handleSubmit}
        className="m-auto flex flex-col gap-12 md:w-1/2 text-white"
      >
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
          className="p-5 bg-transparent focus:outline-none border-2 border-[#bbb]"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-5 bg-transparent focus:outline-none border-2 border-[#bbb]"
        />
        <button
          type="submit"
          className="bg-[#53c28b] px-5 py-2  rounded-lg w-max text-white cursor-pointer mx-auto"
        >
          Login In
        </button>

        <Link href="/dashboard/register" className="text-white p-2 -mt-8">
          Don't have an account ? <span className="text-blue-500 underline "> Sign up</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
