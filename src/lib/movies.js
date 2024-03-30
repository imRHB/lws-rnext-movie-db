export async function getMovies() {
    const module = await import("@/data/movies.json");
    return module.default;
}

export async function getMovieById(movieId) {
    const module = await import("@/data/movies.json");
    const movies = await module.default;
    return movies;
}
