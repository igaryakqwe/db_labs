import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE (
  request: Request,
  { params }: { params: { id: number }}
) {
  const handler = await prisma.user.delete({
    where: {
      id: +params.id
    }
  });

  return NextResponse.json(handler);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number }}
) {
  const handler = await prisma.user.update({
    where: {
      id: +params.id
    },
    data: await request.json()
  });

  return NextResponse.json(handler);
}
