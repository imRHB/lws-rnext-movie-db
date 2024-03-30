import MovieCard from "./MovieCard";

export default function MovieList() {
    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
}
