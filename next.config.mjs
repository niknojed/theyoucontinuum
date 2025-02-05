/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Ensures React runs in strict mode for better error detection
    output: "export", // Enables static export mode
  distDir: "out", // Default directory for exported files
  images: { unoptimized: true } // Disables image optimization (needed for static export)
  };
  
  export default nextConfig;