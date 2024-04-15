import "server-only";

const movies = {
    /*
        return all movies,
        though all of the properties not needed when using this function in the homepage,
        created `moviesCardData` function that returns selected properties for the movie card
    */
    movies: async () => {
        const moviesModule = await import("../data/movies.json");

        return moviesModule.default;
    },
    /*
        get movie by movie id
    */
    movieById: async (movieId) => {
        const moviesModule = await import("../data/movies.json");
        const { results: movies } = await moviesModule;

        return movies.find((movie) => movie.id.toString() === movieId);
    },
    /*
        as every movie properties aren't necessary while calling the `movies` in the homepage,
        created this function that returns only selected movie properties
    */
    moviesCardData: async () => {
        const moviesModule = await import("../data/movies.json");
        const { results: movies } = await moviesModule;

        return movies.map((movie) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            genres: movie.genres,
        }));
    },
};

export const getMovies = async () => movies["movies"]();
export const getMovieById = async (movieId) => movies["movieById"](movieId);
export const getMoviesCardData = async () => movies["moviesCardData"]();
