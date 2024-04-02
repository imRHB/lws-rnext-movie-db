import Image from "next/image";
import Link from "next/link";

const SIDEBAR_ITEMS = [
    {
        id: 1,
        label: "Trending",
        icon: "",
        // icon: "/assets/icons/trending.svg",
        href: "/",
        active: true,
    },
    {
        id: 2,
        label: "New Releases",
        icon: "",
        // icon: "/assets/icons/newRelease.svg",
        href: "/",
        active: false,
    },
    {
        id: 3,
        label: "Coming Soon",
        icon: "",
        // icon: "/assets/icons/commingSoon.svg",
        href: "/",
        active: false,
    },
    {
        id: 4,
        label: "Favourites",
        icon: "",
        // icon: "/assets/icons/favourite.svg",
        href: "/",
        active: false,
    },
    {
        id: 5,
        label: "Watch Later",
        icon: "",
        // icon: "/assets/icons/watchLater.svg",
        href: "/",
        active: false,
    },
];

export default function Sidebar() {
    return (
        <div>
            <aside className="sticky top-[88px]">
                <ul className="space-y-2">
                    {SIDEBAR_ITEMS.map((item) => (
                        <SidebarItem key={item.id} item={item} />
                    ))}
                </ul>
            </aside>
        </div>
    );
}

function SidebarItem({ item }) {
    return (
        <li>
            <Link
                className={`flex items-center space-x-2 px-5 py-3.5 ${
                    item.active ? "rounded-lg bg-primary text-black" : ""
                }`}
                href={item.href}
            >
                <Image
                    src={item.icon}
                    width={24}
                    height={24}
                    alt={item.label}
                />
                <span>{item.label}</span>
            </Link>
        </li>
    );
}
