import Image from "next/image";

import { photos } from "@/lib/photos";

export default function PhotoDetailsPage({ params: { lang, id } }) {
    const photo = photos.find((photo) => photo.id.toString() === id.toString());

    return (
        <div>
            <Image
                src={photo.imageSrc}
                height={500}
                width={500}
                alt={photo.name}
            />
        </div>
    );
}
