import Image from "next/image";

const starImage = "/assets/star.svg";

export default function Star() {
    return <Image src={starImage} width={14} height={14} alt="" />;
}
