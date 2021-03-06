import React from "react";
import Lottie from "react-lottie";



export default function LottieAnimation({ lottie,width, height }) {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    hover:true,
    animationData: lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};