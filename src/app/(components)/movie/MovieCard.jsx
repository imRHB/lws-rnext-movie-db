import Image from "next/image";
import Link from "next/link";

import Star from "../Star";

const tagImage = "/assets/tag.svg";

export default function MovieCard({ movie, lang, label }) {
    const { id, title, poster_path, genres } = movie || {};

    return (
        <figure className="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
            <Image
                src={poster_path}
                height={300}
                width={300}
                className="object-cover w-full rounded"
                alt={title}
            />
            <figcaption className="pt-4">
                <h3 className="mb-1 text-xl truncate" title={title}>
                    {title}
                </h3>
                <p className="text-[#575A6E] text-sm mb-2">
                    {genres.join(" / ")}
                </p>
                <div className="flex items-center mb-5 space-x-1">
                    {[1, 2, 3, 4, 5].map((char) => (
                        <Star key={char} />
                    ))}
                </div>
                <Link
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href={`/${lang}/movies/${id}`}
                >
                    <Image src={tagImage} height={14} width={14} alt="Tag" />
                    <span>{label}</span>
                </Link>
            </figcaption>
        </figure>
    );
}
