import React from "react";

import MovieCard from "@/app/(components)/movie/MovieCard";
import { getDictionary } from "./movies/dictionaries/dictionaries";

export default async function HomePage({ params: { lang } }) {
    const movieModule = await import("@/data/movies.json");
    const { results: movies } = await movieModule.default;

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

/* 

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

*/

/* 

<div className="grid grid-cols-1 gap-6 mt-10 auto-rows-max sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo) => (
                <Link
                    key={photo.id}
                    href={`/${lang}/photos/${photo.id}`}
                    className="object-cover w-full aspect-square rounded-xl"
                >
                    <Image
                        src={photo.imageSrc}
                        height={500}
                        width={500}
                        alt={photo.name}
                    />
                </Link>
            ))}
        </div>

*/
