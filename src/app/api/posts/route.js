import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const POST = async (request) => {
  const body = await request.json()

  const newpost = Post(body)

  try {
    await connect();
    await newpost.save()
    return new NextResponse("Post added successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};