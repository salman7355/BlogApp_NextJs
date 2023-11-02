"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const session = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let name;
    let email;
    let message;

    if (session.data) {
      name = session.data.user.name;
      email = session.data.user.email;
      message = Message;
    } else {
      name = Name;
      email = Email;
      message = Message;
    }

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      res.status === 201;
      setName("");
      setEmail("");
      setMessage("");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className="text-5xl font-semibold capitalize text-center mb-10">
        let's keep in touch
      </p>
      <div className="flex gap-24 items-center">
        <div className="flex-1 h-[500px] md:relative hidden md:flex">
          <Image
            src="/contact.png"
            alt="/"
            fill={true}
            className={styles.image}
          />
        </div>
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-12">
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="p-5 bg-transparent focus:outline-none border-2 border-[#bbb]"
          />
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="p-5 bg-transparent focus:outline-none border-2 border-[#bbb]"
          />
          <textarea
            placeholder="message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="7"
            className="p-5 bg-transparent focus:outline-none border-2 border-[#bbb]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#53c28b] px-5 py-2  rounded-lg w-max text-white cursor-pointer mx-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
