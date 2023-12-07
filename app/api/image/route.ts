import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data) {
      return new NextResponse("Missing input", { status: 400 });
    }
    
    const { text, amount, resolution } = data;
    console.log(text, amount, resolution);
   
    return NextResponse.json({text})
  } catch (error) {
    console.error(error);
  }
}
