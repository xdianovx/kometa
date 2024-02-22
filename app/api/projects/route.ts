import { prisma } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const project = await prisma.project.create({ data: { ...data } });
  return NextResponse.json({ project });
}

export async function GET() {
  const data = await prisma.project.findMany({ include: { tags: true } });
  return NextResponse.json(data);
}
