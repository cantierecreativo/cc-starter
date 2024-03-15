"use client";
import dynamic from "next/dynamic";

import { VideoField } from "@/graphql/generated";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoEmbedded = ({ video }: { video: VideoField }) => {
  return (
    <ReactPlayer
      autoPlay={false}
      playing={false}
      width="100%"
      height="100%"
      url={video.url}
      controls={true}
      className="react-player-custom"
    />
  );
};

export default VideoEmbedded;
