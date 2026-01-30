"use client";

import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "ddccpyeht",
  },
});

export default function PromoVideo({videoId}: {videoId?: string}) {
  const video = cld.video(videoId);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()} // disables right-click
      className="overflow-hidden border-2 border-black/20 p-3 h-full w-fit mx-auto"
    >
      <AdvancedVideo
        cldVid={video}
        // controls
        className="w-auto max-h-[30em] min-h-[30em]"
        autoPlay
        muted
        loop    
      />
    </div>
  );
}
