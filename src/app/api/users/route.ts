import { NextResponse } from "next/server";
import connectDataBase from "@/lib/mondodb";
import { user } from "@/models/user";

export async function GET() {
  await connectDataBase();
  const users = await user.find();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  await connectDataBase();
  const body = await req.json();
  const newUser = await user.create({
    name: body.name,
    email: body.email,
    numberPhone: body.numberPhone,
  });
  return NextResponse.json(newUser, { status: 201 });
}

export async function DELETE() {
  await connectDataBase();
  await user.deleteMany({});
  return NextResponse.json({ message: "Rodos os usuarios foram deletados" });
}
