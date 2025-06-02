import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({"Mensagem" : "Testando!!!! 1 2 3"})
}