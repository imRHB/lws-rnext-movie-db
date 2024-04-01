import Image from "next/image";

import Modal from "@/app/(components)/Modal";
import { photos } from "@/lib/photos";

export default function PhotoDetailsModal({ params: { lang, id } }) {
    const photo = photos.find((photo) => photo.id.toString() === id.toString());

    return (
        <Modal>
            <Image
                src={photo.imageSrc}
                height={500}
                width={500}
                alt={photo.name}
            />
        </Modal>
    );
}
