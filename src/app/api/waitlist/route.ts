import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentName, email, childAge, experience } = body;

    if (!parentName || !email || !childAge || !experience) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const entry = {
      parentName,
      email,
      childAge,
      experience,
      timestamp: new Date().toISOString(),
    };

    // Store in a JSON file (simple persistence for now)
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "waitlist.json");

    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch {
      // directory may already exist
    }

    let entries = [];
    try {
      const existing = await fs.readFile(filePath, "utf-8");
      entries = JSON.parse(existing);
    } catch {
      // file doesn't exist yet
    }

    entries.push(entry);
    await fs.writeFile(filePath, JSON.stringify(entries, null, 2));

    return NextResponse.json(
      { success: true, message: "Added to waitlist!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "waitlist.json");
    const data = await fs.readFile(filePath, "utf-8");
    const entries = JSON.parse(data);
    return NextResponse.json({ count: entries.length, entries });
  } catch {
    return NextResponse.json({ count: 0, entries: [] });
  }
}
