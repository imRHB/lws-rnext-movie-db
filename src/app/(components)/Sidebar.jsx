import Image from "next/image";
import Link from "next/link";
import React from "react";

const SIDEBAR_ITEMS = [
    {
        id: 1,
        label: "Trending",
        icon: "",
        icon: "/assets/icons/trending.svg",
        href: "/",
        active: true,
    },
    {
        id: 2,
        label: "New Releases",
        icon: "",
        icon: "/assets/icons/newRelease.svg",
        href: "/",
        active: false,
    },
    {
        id: 3,
        label: "Coming Soon",
        icon: "",
        icon: "/assets/icons/commingSoon.svg",
        href: "/",
        active: false,
    },
    {
        id: 4,
        label: "Favourites",
        icon: "",
        icon: "/assets/icons/favourite.svg",
        href: "/",
        active: false,
    },
    {
        id: 5,
        label: "Watch Later",
        icon: "",
        icon: "/assets/icons/watchLater.svg",
        href: "/",
        active: false,
    },
];

export default function Sidebar({ lang }) {
    return (
        <div>
            <aside className="sticky top-[88px]">
                <ul className="space-y-2">
                    {SIDEBAR_ITEMS.map((item) => (
                        <SidebarItem key={item.id} item={item} lang={lang} />
                    ))}
                </ul>
            </aside>
        </div>
    );
}

function SidebarItem({ item, lang }) {
    const children = (
        <React.Fragment>
            <Image src={item.icon} width={24} height={24} alt={item.label} />
            <span className={`${!item.active && "cursor-default"}`}>
                {item.label}
            </span>
        </React.Fragment>
    );

    return (
        <li>
            {item.active ? (
                <Link
                    className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                    href={`${item.href}${lang}`}
                >
                    {children}
                </Link>
            ) : (
                <div className="flex items-center space-x-2 px-5 py-3.5 opacity-75">
                    {children}
                </div>
            )}
        </li>
    );
}
