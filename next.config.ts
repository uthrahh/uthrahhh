import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        // Scoped only to the profile photo: avoid a long-lived cached copy
        // sitting on disk as a mild deterrent against casual reuse. This is
        // not a real access control — anyone who can view the page can
        // still view the image.
        source: "/profilephoto.jpg",
        headers: [
          { key: "Cache-Control", value: "no-store" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
