import { prisma } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const tag = await prisma.tags.create({ data: { title: " test" } });
  return NextResponse.json({ tag });
}
