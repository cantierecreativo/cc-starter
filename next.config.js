const { withNextVideo } = require("next-video/process");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["localhost", "www.datocms-assets.com", "image.mux.com"],
  },
};

module.exports = withBundleAnalyzer(withNextVideo(nextConfig));
