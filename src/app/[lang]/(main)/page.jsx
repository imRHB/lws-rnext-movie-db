import React from "react";

import MovieCard from "@/app/(components)/movie/MovieCard";
import { getMoviesCardData } from "@/lib";
import { getDictionary } from "./movies/dictionaries/dictionaries";

export default async function HomePage({ params: { lang } }) {
    /*
        calling the getMoviesCardData function,
        that returns selected properties for movie card
    */
    const movies = await getMoviesCardData();

    const dictionary = await getDictionary(lang);

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}
