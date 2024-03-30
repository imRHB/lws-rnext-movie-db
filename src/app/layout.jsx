import "./globals.css";
// import "./tailwind.css";

export const metadata = {
    title: "MovieDB | Learn With Sumit",
    description: "A movie collection website by LWS!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#1D1E28] text-white">
                {/* body className: 'dark:bg-body bg-white font-[Sora] dark:text-white text-dark' */}
                {children}
            </body>
        </html>
    );
}
