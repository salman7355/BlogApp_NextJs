"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";

const Dashboard = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Img, setImage] = useState("");
  const [Content, setContent] = useState("");

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = Title;
    const desc = Desc;
    const image = Img;
    const content = Content;

    try {
      // await connect()
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();

      setTitle("");
      setContent("");
      setDesc("");
      setImage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex gap-24">
        <div className=" flex-1">
          {data &&
            data.map((post) => (
              <div
                className="flex items-center justify-between my-12 mx-0"
                key={post._id}
              >
                <div className="w-[200px] h-[100px] relative">
                  <Image
                    className="object-cover"
                    src={post.image}
                    alt="/"
                    fill={true}
                  />
                </div>
                <h2>{post.title}</h2>
                <span
                  onClick={() => handleDelete(post._id)}
                  className="cursor-pointer text-red-700"
                >
                  x
                </span>
              </div>
            ))}
        </div>
        <form
          className=" flex-1 text-black flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white text-4xl font-semibold -mb-5">
            Add New Post
          </h1>
          <input
            type="text"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            className="p-[10px] bg-transparent border-2 border-[#bbb] rounded text-[#bbb] text-xl font-bold"
          />
          <input
            type="text"
            placeholder="description"
            onChange={(e) => setDesc(e.target.value)}
            className="p-[10px] bg-transparent border-2 border-[#bbb] rounded text-[#bbb] text-xl font-bold"
          />
          <input
            type="text"
            placeholder="imageUrl"
            onChange={(e) => setImage(e.target.value)}
            className="p-[10px] bg-transparent border-2 border-[#bbb] rounded text-[#bbb] text-xl font-bold"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            className="p-[10px] bg-transparent border-2 border-[#bbb] rounded text-[#bbb] text-xl font-bold"
          ></textarea>
          <button
            type="submit"
            className="bg-[#53c28b] px-5 py-2 rounded-lg text-white cursor-pointer "
          >
            Add Post
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
