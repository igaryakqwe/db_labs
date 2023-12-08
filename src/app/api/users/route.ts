import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const users = await prisma.user.findMany({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const handler = await prisma.user.create({
      data: {
        id: Math.ceil(Math.random() * 100),
        ...await request.json()
      }
    })
    return NextResponse.json(handler);
  } catch (error) {
    return NextResponse.json(
      { error: 'Incorrect body data' },
      { status: 500 }
    );
  }
}
