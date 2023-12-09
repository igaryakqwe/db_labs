import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params } : { params: { id: string }}
) {
  const handler = await prisma.user.findUnique({
    where: {
      id: +params.id
    }
  });
  if (handler === null) {
    return NextResponse.json(
      { error: 'User with such id is not exist' },
      { status: 500 }
    );
  }
  return NextResponse.json(handler);
}

export async function DELETE (
  request: Request,
  { params }: { params: { id: string }}
) {
  try {
    const handler = await prisma.user.delete({
      where: {
        id: +params.id
      }
    });
    return NextResponse.json({
      message: 'User was deleted',
      body: handler
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'User with such id is not exist' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string }}
) {
  try {
    const handler = await prisma.user.update({
      where: {
        id: +params.id
      },
      data: await request.json()
    });

    return NextResponse.json(handler);
  } catch (error) {
    return NextResponse.json(
      { error: 'Incorrect type of body data' },
      { status: 500 }
    );
  }

}
