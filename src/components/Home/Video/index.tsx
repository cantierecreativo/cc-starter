"use client";

import SectionTitle from "../../Common/SectionTitle";
import VideoEmbedded from "@/components/Common/VideoEmbedded";
import VideoInternal from "@/components/Common/VideoInternal";
import { VideoField, VideoFileField } from "@/graphql/generated";

import React from "react";

type PropsVideo = {
  videoHeader?: string;
  videoSubheader?: string;
  internalVideo?: VideoFileField | undefined;
  externalVideo?: VideoField | undefined;
};

const Video = ({
  videoHeader,
  videoSubheader,
  internalVideo,
  externalVideo,
}: PropsVideo) => {
  return (
    <section className="py-8 md:py-16 lg:py-28">
      <div className="container lg:w-10/12 mx-auto">
        {videoHeader || videoSubheader ? (
          <SectionTitle title={videoHeader} paragraph={videoSubheader} center />
        ) : null}

        <div className="aspect-video">
          {externalVideo && <VideoEmbedded video={externalVideo} />}
          {internalVideo && <VideoInternal video={internalVideo} />}
        </div>
      </div>
    </section>
  );
};

export default Video;
