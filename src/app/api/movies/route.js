import { NextResponse } from "next/server";

import { movieList } from "@/data/movies";

export async function GET() {
    if (!movieList.results)
        return NextResponse.json(
            { error: "No movies found!" },
            { status: 404 }
        );

    return NextResponse.json(movieList.results, { status: 200 });
}
