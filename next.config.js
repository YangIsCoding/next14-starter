/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            }
        ]
    },

    env: {
        REACT_APP_LOCAL_HOST: process.env.REACT_APP_LOCAL_HOST
    }
}

module.exports = nextConfig
