import Image from "next/image";
import { notFound } from "next/navigation";

import { getDictionary } from "@/app/[lang]/(main)/movies/dictionaries/dictionaries";

export default async function MovieDetails({ lang, movieId }) {
    const movieModule = await import("@/data/movies.json");
    const { results: movies } = await movieModule.default;

    const dictionary = await getDictionary(lang);
    const {
        release,
        average_vote,
        total_vote,
        total_popularity,
        hd_stream,
        hd_download,
    } = dictionary;

    const movie = movies.find(
        (movie) => movie.id.toString() === movieId.toString()
    );

    if (!movie) notFound();

    const {
        title,
        backdrop_path,
        poster_path,
        overview,
        release_date,
        popularity,
        vote_average,
        vote_count,
    } = movie || {};

    return (
        <section>
            <Image
                src={backdrop_path}
                height={500}
                width={500}
                className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                alt={title}
            />

            <div className="grid grid-cols-12 gap-8 py-12">
                <div className="col-span-2">
                    <Image
                        src={poster_path}
                        height={300}
                        width={300}
                        alt={title}
                    />
                </div>
                <div className="col-span-8">
                    <h2 className="text-2xl font-bold text-slate-300">
                        {title}
                    </h2>
                    <p className="my-2 italic text-slate-400">{overview}</p>
                    <ul className="my-8 space-y-2 text-slate-300">
                        <li>
                            {release} : {release_date}
                        </li>
                        <li>
                            {average_vote} : {vote_average}
                        </li>
                        <li>
                            {total_vote} : {vote_count}
                        </li>
                        <li>
                            {total_popularity} : {popularity}
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 space-y-4">
                    <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800">
                        {hd_stream}
                    </button>
                    <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800">
                        {hd_download}
                    </button>
                </div>
            </div>
        </section>
    );
}
