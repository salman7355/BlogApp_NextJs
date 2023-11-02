import Contact from "@/models/contact";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const newMessage = Contact(body);

  try {
    await connect();
    await newMessage.save();
    return new NextResponse("Your Message Sent successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
