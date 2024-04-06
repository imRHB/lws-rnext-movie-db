import Image from "next/image";

const logo = "/vercel.svg";

export default function Star() {
    return <Image src={logo} width={14} height={14} alt="Star" />;
}
