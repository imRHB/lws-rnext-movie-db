import { NextResponse } from "next/server";

import { movieList } from "@/data/movies";

export async function GET(_request, { params: { id } }) {
    const movie = movieList.results.find(
        (movie) => movie.id.toString() === id.toString()
    );

    if (!movie)
        return NextResponse.json(
            {
                error: `Movie not found with this id: ${id}`,
            },
            { status: 404 }
        );

    return NextResponse.json(movie, { status: 200 });
}

export async function PATCH(request, { params: { id } }) {
    const movieIdx = movieList.results.findIndex(
        (movie) => movie.id.toString() === id.toString()
    );

    if (movieIdx <= -1)
        return NextResponse.json(
            {
                error: `Movie not found with this id: ${id}`,
            },
            { status: 404 }
        );

    const updatedMovieTitle = await request.json();
    movieList.results[movieIdx].title = updatedMovieTitle.title;

    return NextResponse.json(movieList.results[movieIdx], { status: 200 });
}

export async function DELETE(request, { params: { id } }) {
    const movieIdx = movieList.results.findIndex(
        (movie) => movie.id.toString() === id.toString()
    );

    if (movieIdx <= -1)
        return NextResponse.json(
            {
                error: `Movie not found with this id: ${id}`,
            },
            { status: 404 }
        );

    const movieToDelete = movieList.results[movieIdx];
    movieList.results.splice(movieIdx, 1);

    return NextResponse.json(movieToDelete, { status: 200 });
}
