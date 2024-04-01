import Image from "next/image";
import Link from "next/link";

import { photos } from "@/lib/photos";

export default function PhotosPage({ params: { lang } }) {
    return (
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
    );
}
