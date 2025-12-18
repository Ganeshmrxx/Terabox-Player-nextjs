export const dynamic = "force-dynamic";

import prisma from "../../../../prisma";

export async function GET() {
  try {
    const count = await prisma.video.count();
    return Response.json({ count });
  } catch (e) {
    // fallback to prevent build crash
    return Response.json({ count: 0 });
  }
}
