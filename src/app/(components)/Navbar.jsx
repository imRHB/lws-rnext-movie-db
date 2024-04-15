import Image from "next/image";
import Link from "next/link";

import LanguageSwitcher from "./LanguageSwitcher";

const logo = "/assets/logo.svg";
const ring = "/assets/ring.svg";
const sun = "/assets/icons/sun.svg";
const cart = "/assets/shopping-cart.svg";

export default function Navbar({ lang }) {
    return (
        <nav className="container flex items-center justify-between py-6 mx-auto space-x-10">
            <Link href={`/${lang}`}>
                <Image src={logo} width={139} height={26} alt="Logo" />
            </Link>

            <ul className="flex items-center space-x-5">
                <li>
                    <div className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                        <Image src={ring} width={24} height={24} alt="Alert" />
                    </div>
                </li>
                <li>
                    <div className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                        <Image src={sun} width={24} height={24} alt="Sun" />
                    </div>
                </li>
                <li>
                    <div className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
                        <Image src={cart} width={24} height={24} alt="Cart" />
                    </div>
                </li>

                <LanguageSwitcher />
            </ul>
        </nav>
    );
}
