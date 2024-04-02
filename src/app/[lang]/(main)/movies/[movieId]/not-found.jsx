"use client";

import { usePathname } from "next/navigation";

export const metadata = {
    title: "MovieDB | Not found",
    description: "A movie collection website by LWS!",
};

export default function MovieNotFound() {
    const pathname = usePathname();
    const movieId = pathname.split("/")[3];

    return (
        <div className="flex flex-col items-center justify-center h-[60vh] gap-2">
            <h2 className="text-3xl font-extrabold md:text-5xl text-violet-400">
                404
            </h2>
            <h4 className="text-lg font-bold md:text-xl">Movie not found!</h4>
            <p className="font-semibold">
                This movie with{" "}
                <span className="font-bold text-red-600">{movieId}</span> id was
                not found!
            </p>
        </div>
    );
}
