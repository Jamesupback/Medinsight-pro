import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Animinsight = () => {
  return (
     <div style={{ width: "100%", height: "auto" }}>
      <DotLottieReact
        src="/assets/animdoc.lottie"
        style={{ width: '100%', height: '100%' }}
        loop
        autoplay
      />
    </div>
  );
};
export default Animinsight;