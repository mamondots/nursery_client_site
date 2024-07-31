import video from "../../../../assets/videoes/video-01.mp4";
import React from "react";
import "./VideoOne.css";
import { MdClose } from "react-icons/md";
const VideoOne = ({ setIsVideo }) => {
  return (
    <div className="fixed w-full z-50 h-screen bg-[#000000b8] left-0 top-0">
      <div className="video-clip relative">
        <video src={video} autoPlay loop muted controls type="video"></video>
        <p
          onClick={() => setIsVideo(false)}
          className="px-2 py-2 absolute top-[-20px] right-[-20px] bg-[#828E4C] text-white inline-block text-xl rounded-full border border-[#828E4C] cursor-pointer hover:bg-[#262626] duration-300 "
        >
          <MdClose></MdClose>
        </p>
      </div>
    </div>
  );
};

export default VideoOne;
