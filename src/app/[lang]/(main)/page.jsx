import MovieCard from "@/app/(components)/movie/MovieCard";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function HomePage({ params: { lang } }) {
    const movieModule = await import("@/data/movies.json");
    const { results: movies } = await movieModule.default;

    const dictionary = await getDictionary(lang);

    return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    lang={lang}
                    label={dictionary.card_label}
                />
            ))}
        </div>
    );
}
