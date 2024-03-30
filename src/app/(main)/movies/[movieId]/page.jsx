import Image from 'next/image';

export default function MovieDetailsPage({ params: { movieId } }) {
    return (
        <section>
            <div>
                <Image
                    src="https://image.tmdb.org/t/p/original/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg"
                    height={500}
                        width={500}
                    className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                    alt=""
                />
            </div>

            <div className="grid grid-cols-12 gap-8 py-12">
                <div className="col-span-2">
                    <Image
                        src="https://image.tmdb.org/t/p/original/phmjv93zEwitWLJEOvlXPhtK58o.jpg"
                        height={500}
                        width={500}
                        alt=""
                    />
                </div>
                <div className="col-span-8">
                    <h2 className="text-2xl font-bold text-slate-300">
                        Godzilla x Kong: The New Empire
                    </h2>
                    <p className="my-2 italic text-slate-400">
                        Following their explosive showdown, Godzilla and Kong
                        must reunite against a colossal undiscovered threat
                        hidden within our world, challenging their very
                        existence – and our own.
                    </p>
                    <ul className="my-8 space-y-2 text-slate-300">
                        <li>Release Date : 2024-03-27</li>
                        <li>Average Vote : 7.5</li>
                        <li>Vote Count : 81</li>
                        <li>Popularity : 2461.857</li>
                    </ul>
                </div>
                <div className="col-span-2 space-y-4">
                    <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800">
                        Stream In HD
                    </button>
                    <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800">
                        Download In HD
                    </button>
                </div>
            </div>
        </section>
    );
}
