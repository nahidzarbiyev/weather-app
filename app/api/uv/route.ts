import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // const apiKey = process.env.OPENWEATHERMAP_API_KEY;

    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

    const res = await fetch(url, { next: { revalidate: 900 } });
    const uvData = await res.json();
    return NextResponse.json(uvData);
  } catch (error) {
    console.log("error in getting uv data", error);
    return new Response("error fething uv data", { status: 500 });
  }
}
