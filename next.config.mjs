/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
            },
            {
                protocol: "https",
                hostname: "unsplash.com",
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com",
            },
        ],
    },
};

export default nextConfig;
