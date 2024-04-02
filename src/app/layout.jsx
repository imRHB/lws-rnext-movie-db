import "./globals.css";

export const metadata = {
    title: "MovieDB | Learn With Sumit",
    description: "A movie collection website by LWS!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
                {children}
            </body>
        </html>
    );
}
