import Image from "next/image";
import React from "react";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const { id } = params;
  const data = await getData(id);

  return {
    title: data.title,
    description: data.desc,
  };
}

const BlogPost = async ({ params }) => {
  const { id } = params;

  const data = await getData(id);
  return (
    <div>
      <div className="flex gap-12 mb-10">
        <div className="flex-1 flex flex-col gap-5 justify-between">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p>{data.desc}</p>
          <div className="flex gap-4 items-center">
            <Image
              src="/avatar.jpg"
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>{data.username}</span>
          </div>
        </div>
        <div className="flex-1 relative h-[300px]">
          <Image src={data.image} alt="" fill={true} className="object-cover" />
        </div>
      </div>
      <div className="bottom">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
