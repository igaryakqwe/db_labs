import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const handler = await prisma.user.findMany({})

  return NextResponse.json(handler);
}

export async function POST(request: Request) {
  const handler = await prisma.user.create({
    data: {
      id: Math.ceil(Math.random() * 100),
      ...await request.json()
    }
  })

  return NextResponse.json(handler);
}
