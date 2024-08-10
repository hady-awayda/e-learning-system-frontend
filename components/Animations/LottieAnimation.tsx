import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/animation.json";

const LottieAnimation = () => {
  return (
    <div style={{ width: "600px", height: "600px" }}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieAnimation;
