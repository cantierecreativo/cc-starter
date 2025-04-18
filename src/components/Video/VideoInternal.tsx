"use client";
import { VideoFileField } from "@/graphql/generated";
import Image from "next/image";
import Video from "next-video";

const VideoInternal = ({ video }: { video: VideoFileField }) => {
  return (
    <Video src={video.video.streamingUrl}>
      <Image
        slot="poster"
        src={video.video.thumbnailUrl}
        alt={video.title}
        width={600}
        height={400}
      />
    </Video>
  );
};
export default VideoInternal;
