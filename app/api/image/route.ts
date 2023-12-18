import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY']
})


export async function POST(req: Request) {
  try {
    const bodyData = await req.json();
    if (!bodyData) {
      return new NextResponse("Missing input", { status: 400 });
    }
    const { text, amount, resolution } = bodyData;

    const response = await openai.images.generate({
      model:"dall-e-2",
      prompt: text,
      n: parseInt(amount, 10),
      size: resolution
    })
    return NextResponse.json(response.data)
  } catch (error) {
    console.error(error);
  }
}
