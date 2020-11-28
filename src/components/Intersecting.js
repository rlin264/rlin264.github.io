import React, {useEffect} from "react";
import useIntersect from "./useIntersect";

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

function Intersecting({children}){
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
            {React.cloneElement(children, { ratio: entry.intersectionRatio })}
        </div>  
    );
}

export default Intersecting;