// "use client";
// import { useRef, useEffect } from "react";
// import Hls from "hls.js";

// export default function VideoPlayer({ src, autoplay = true, ...other }: any) {
//   const ref = useRef<any>();

//   useEffect(() => {
//     var hls = new Hls();
//     hls.attachMedia(ref.current);

//     hls.on(Hls.Events.MEDIA_ATTACHED, function () {
//       hls.loadSource(src);
//       hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
//         if (autoplay) {
//           ref?.current?.play();
//         }
//       });
//     });
//   }, []);

//   return (
//     <div className="flex w-full h-min-[300px] justify-center items-center">
//       <video ref={ref} className="w-full" {...other} />
//     </div>
//   );
// }
