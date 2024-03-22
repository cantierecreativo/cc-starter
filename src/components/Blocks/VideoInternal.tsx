"use client";
import dynamic from "next/dynamic";

import { VideoFileField } from "@/graphql/generated";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoInternal = ({ video }: { video: VideoFileField }) => {
  return (
    <>
      <ReactPlayer
        playing={true}
        autoPlay={false}
        width="100%"
        height="100%"
        light={video.video.thumbnailUrl}
        url={video.video.streamingUrl}
        controls={true}
        playIcon={
          <button>
            <div className="bg-secondary rounded-full centered px-4 py-2 flex gap-2 items-center justify-between">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5652 10.7254C17.4783 11.2838 17.4783 12.7162 16.5652 13.2746L8.73914 18.0607C7.91302 18.5659 6.75 17.9803 6.75 16.7861L6.75 7.2139C6.75 6.01965 7.91302 5.43408 8.73914 5.9393L16.5652 10.7254Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="text-sm uppercase">Play</div>
            </div>
          </button>
        }
      />
    </>
  );
};

export default VideoInternal;
