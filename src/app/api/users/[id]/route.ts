import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export function DELETE (
  request: Request,
  { params }: { params: { id: number }}
) {
  const handler = prisma.user.delete({
    where: {
      id: params.id
    }
  })

  return NextResponse.json(handler);
}
