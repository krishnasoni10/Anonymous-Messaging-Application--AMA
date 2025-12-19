import connectDB from "@/lib/db";
import Message from "@/models/Message";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET() {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    
    if (!token) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return Response.json({ error: "Invalid token" }, { status: 401 });
    }

    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });
    return Response.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const { content } = await request.json();

    if (!content) {
      return Response.json({ error: "Message cannot be empty" }, { status: 400 });
    }

    const msg = await Message.create({ content });
    return Response.json({ success: true, id: msg._id });
  } catch (error) {
    console.error("Error creating message:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
