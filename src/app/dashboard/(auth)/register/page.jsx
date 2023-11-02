"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = Name;
    const email = Email;
    const password = Password;

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-12 md:w-1/2 m-auto  text-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl font-semibold capitalize text-center mb-4 text-white">Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
          className="p-5 bg-transparent focus:outline-none border-2   border-[#bbb]"
        />
        <input
          type="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="p-5 bg-transparent focus:outline-none border-2 border-[#bbb]"
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setpassword(e.target.value)}
          className="p-5 bg-transparent focus:outline-none border-2 border-[#bbb]"
        />
        <button
          type="submit"
          className="bg-[#53c28b] px-5 py-2  rounded-lg w-max text-white cursor-pointer mx-auto"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <Link className="text-white p-2 -mt-8" href="/dashboard/login">
          Login in with an existing account
        </Link>
      </form>
      {err && "Something Went Wrong!"}
    </div>
  );
};

export default Register;
