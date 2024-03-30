import Image from "next/image";
import Link from "next/link";

import Star from "../Star";

const tagImage = "/assets/tag.svg";

export default function MovieCard() {
    return (
        <figure className="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
            <Image
                src="/assets/movie-1.png"
                height={500}
                width={500}
                className="object-cover w-full"
                alt=""
            />
            <figcaption className="pt-4">
                <h3 className="mb-1 text-xl">Iron Man</h3>
                <p className="text-[#575A6E] text-sm mb-2">
                    Action/Adventure/Sci-fi
                </p>
                <div className="flex items-center mb-5 space-x-1">
                    {[1, 2, 3, 4, 5].map((char) => (
                        <Star key={char} />
                    ))}
                </div>
                <Link
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="/movies/3"
                >
                    <Image src={tagImage} height={14} width={14} alt="Tag" />
                    <span>Details</span>
                </Link>
            </figcaption>
        </figure>
    );
}
