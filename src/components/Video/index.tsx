"use client";

import SectionTitle from "@/components/Blocks/SectionTitle";
import VideoEmbedded from "@/components/Video/VideoEmbedded";
import VideoInternal from "@/components/Video/VideoInternal";
import { motion, Variants } from "framer-motion";
import { VideoField, VideoFileField } from "@/graphql/generated";

import React from "react";

type PropsVideo = {
  videoHeader?: string;
  videoSubheader?: string;
  internalVideo?: VideoFileField | undefined;
  externalVideo?: VideoField | undefined;
};

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
};

const Video = ({
  videoHeader,
  videoSubheader,
  internalVideo,
  externalVideo,
}: PropsVideo) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      <div className="container standard-vertical-m">
        {videoHeader || videoSubheader ? (
          <SectionTitle title={videoHeader} paragraph={videoSubheader} center />
        ) : null}

        {externalVideo && (
          <div className="w-full h-auto mt-12">
            <VideoEmbedded video={externalVideo} />
          </div>
        )}
        {internalVideo && (
          <div className="aspect-video mt-12">
            <VideoInternal video={internalVideo} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Video;
