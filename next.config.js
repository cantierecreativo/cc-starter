const { withNextVideo } = require("next-video/process");
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost", "www.datocms-assets.com", "image.mux.com"],
  },
};

module.exports = withNextVideo(nextConfig);
