import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF diutamakan, WebP sebagai fallback untuk browser lama.
    formats: ["image/avif", "image/webp"],
    // Wajib di Next 16 saat memakai quality non-default.
    qualities: [50, 75],
    // Cache aset optimized selama 31 hari.
    minimumCacheTTL: 2678400,
    // Sertakan ukuran kecil untuk ikon/thumbnail (mis. marker 160px).
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 256, 384],
  },
};

export default nextConfig;
