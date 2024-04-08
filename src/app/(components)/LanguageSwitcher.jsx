"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const english = "/assets/icons/english.png";
const bangla = "/assets/icons/bangla.png";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        {
            code: "en",
            language: "English",
            image: english,
        },
        {
            code: "bn",
            language: "Bangla",
            image: bangla,
        },
    ];
    const found = languages.find((lang) => pathname.includes(lang.code));
    const [selectedLanguage, setSelectedLanguage] = useState(
        found ?? languages[0]
    );
    const [showMenu, setShowMenu] = useState(false);

    const handleLanguageChange = (lang) => {
        setSelectedLanguage({
            ...selectedLanguage,
            code: lang,
            language: lang === "en" ? "English" : "Bangla",
        });
        setShowMenu(false);
        router.push(`/${lang}`);
    };

    /* const handleLanguageChange = (lang) => {
        if (lang !== selectedLanguage.code) {
            setSelectedLanguage({
                ...selectedLanguage,
                code: lang,
                language: lang === "en" ? "English" : "Bangla",
            });
            router.replace(
                pathname.replace(`/${selectedLanguage.code}`, `/${lang}`)
            );
            router.refresh();
        }
        setShowMenu(false);
    }; */

    return (
        <div className="flex items-center gap-4">
            <div className="relative">
                <button
                    className="flex items-center gap-2"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <Image
                        className="w-6 mr-2"
                        src={selectedLanguage.image}
                        alt="bangla"
                        height={64}
                        width={64}
                    />
                    {selectedLanguage.language}
                </button>
                {showMenu && (
                    <div className="absolute right-0 z-10 w-40 p-2 mt-2 rounded-md shadow-lg bg-body top-full ring-1 ring-white/10">
                        {languages.map((entry) => (
                            <li
                                key={entry.code}
                                onClick={() => handleLanguageChange(entry.code)}
                                className="flex items-center gap-2 p-3 rounded-md cursor-pointer hover:bg-black"
                            >
                                <Image
                                    className="w-6 mr-2"
                                    src={entry.image}
                                    alt="bangla"
                                    height={64}
                                    width={64}
                                />
                                {entry.language}
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
