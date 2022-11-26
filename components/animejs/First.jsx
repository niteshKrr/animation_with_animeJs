import React from "react";
import Anime from "react-animejs-wrapper";

// this animation done through ( npm i react-animejs-wrapper )
// import Anime from "react-animejs-wrapper";

const First = () => {
  return (
      <Anime
        style={{
          backgroundColor: "lightgrey",
        width: "150px",
        }}
        config={{
          translateY: [0, 20],
          scale: [0.8, 1],
          loop: true,
          duration: 1500,
        }}
      >
        <div className="flex justify-center">How are you</div>
      </Anime>
  );
};

export default First;
