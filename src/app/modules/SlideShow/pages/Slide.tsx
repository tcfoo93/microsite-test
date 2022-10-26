import React, { useLayoutEffect, useState } from "react";
import { ISliderState } from "../SlideShow.interfaces";
import { AnimatePresence } from 'framer-motion';
import ApiRequest from "@src/app/services/ApiRequest.service";
import SlideOne from "../forms/SlideOne";
import SlideTwo from "../forms/SlideTwo";
 
function Slide() {
  const [state, setState] = useState<ISliderState>({
    loaded: false,
    slide: 1
  });

  const onPageLoad = async () => {
    // Consume video by calling api - code commented as getting CORS error, Chrome extension (CORS unblock is required)
    // const backgroudVideo = await fetch(new ApiRequest().getPathConfig().backgroundVideoUrl.url)
    // .then((response) => response.blob())
    // .then(blob => URL.createObjectURL(blob))

    // if (!backgroudVideo) {
    //   return;
    // }

    const backgroudVideo = new ApiRequest().getPathConfig().backgroundVideoUrl.url;

    setState({
      ...state,
      loaded: true,
      backgroudVideo
    });
  };

  useLayoutEffect(() => {
    onPageLoad();
  }, []);

  if (!state.loaded) {
    return null;
  }

  return (
    <React.Fragment>
      <AnimatePresence initial={false} mode="wait">
        <SlideOne key={1} state={state} setState={setState} />
        <SlideTwo key={2} state={state} setState={setState} />
      </AnimatePresence>
    </React.Fragment>
  );
}

export default Slide;
