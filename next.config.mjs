/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // ✅ Helps with debugging
  output: "export", // ✅ Static export since you’re using Brevo from frontend
  distDir: "out", // ✅ Ensures everything is built inside /out
  images: { unoptimized: true }, // ✅ Disables Next.js image optimization for static hosting
  trailingSlash: true, // ✅ Ensures proper URL paths for static export
};

export default nextConfig;