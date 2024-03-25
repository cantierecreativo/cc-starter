"use client";
import dynamic from "next/dynamic";

import { VideoField } from "@/graphql/generated";

import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const VideoEmbedded = ({ video }: { video: VideoField }) => {
  return (
    <MediaPlayer title={video.title} src={video.url}>
      <MediaProvider />
      <DefaultVideoLayout
        thumbnails={video.thumbnailUrl}
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
};

export default VideoEmbedded;
