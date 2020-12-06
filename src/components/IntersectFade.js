import React, { useEffect } from "react";
import useIntersect from "./useIntersect";
import Fade from "react-reveal/Fade";

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

function IntersectFade(props) {
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  });
  return (
    <div ref={ref}>
      <Fade {...props} top when={entry.intersectionRatio > 0.3}>
        {props.children}
      </Fade>
    </div>
  );
}

export default IntersectFade;
