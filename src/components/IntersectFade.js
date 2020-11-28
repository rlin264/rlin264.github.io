import React, {useEffect} from "react";
import useIntersect from "./useIntersect";
import Fade from "react-reveal/Fade";

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

function IntersectFade(props){
    const [ref, entry] = useIntersect({
        threshold: buildThresholdArray()
    });
    useEffect(() => {
        if(entry.intersectionRatio > 0.7){
            console.log("ASDAS")
        }
    });
    return(
        <div ref={ref} ratio={entry.intersectionRatio}>
            {entry.intersectionRatio}
            <Fade top distance="10vh" when={entry.intersectionRatio>0.6}>
                {props.children}
            </Fade>
        </div>  
    );
}

export default IntersectFade;