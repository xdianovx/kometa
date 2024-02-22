import { prisma } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.tags.findMany();

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const data = await req.json();

  const tag = await prisma.tags.create({ data: data });
  return NextResponse.json({ tag });
}
