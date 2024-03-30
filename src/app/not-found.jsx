import Link from "next/link";

export const metadata = {
    title: "MovieDB | Not found",
    description: "A movie collection website by LWS!",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-2">
            <h2 className="text-3xl font-extrabold md:text-5xl text-violet-400">
                404
            </h2>
            <p className="font-semibold">Could not find requested resource</p>
            <Link
                href="/"
                className="font-semibold text-violet-400 hover:underline underline-offset-2"
            >
                Return Home
            </Link>
        </div>
    );
}
