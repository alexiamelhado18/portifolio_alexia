/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = "production"

const nextConfig = {
    basePath:  "",
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        });
        return config;
    },
};

export default nextConfig;
