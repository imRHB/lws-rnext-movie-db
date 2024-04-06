import Image from "next/image";
import Link from "next/link";

import LanguageSwitcher from "./LanguageSwitcher";

const logo = "/assets/logo.svg";

export default function Navbar() {
    return (
        <nav className="container flex items-center justify-between py-6 mx-auto space-x-10">
            <Link href="/">
                <Image src={logo} width={139} height={26} alt="Logo" />
            </Link>

            <ul className="flex items-center space-x-5">
                <li>
                    <Link
                        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                        href="/"
                    >
                        <Image src={""} width={24} height={24} alt="Alert" />
                    </Link>
                </li>
                <li>
                    <Link
                        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                        href="/"
                    >
                        <Image src={""} width={24} height={24} alt="Sun" />
                    </Link>
                </li>
                <li>
                    <Link
                        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                        href="/"
                    >
                        <Image src={""} width={24} height={24} alt="Cart" />
                    </Link>
                </li>

                <LanguageSwitcher />
            </ul>
        </nav>
    );
}
