import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
};

// either Static metadata
export const metadata = {
  title: "Blog Page",
  description: "This is the Blog Page",
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-12">
      {data.map((item) => (
        <div className="flex gap-12" key={item._id}>
          <div className="w-[40%] h-[300px] relative">
            <Link href={`/blog/${item._id}`}>
              <Image
                src={item.image}
                alt="/"
                fill={true}
                className="object-cover"
              />
            </Link>
          </div>
          <div className="w-[60%] flex flex-col justify-center items-start gap-4">
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
