import React, { useRef, useState } from "react";
import styles from "./home.module.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import Intersecting from "../../components/Intersecting";
import IntersectFade from "../../components/IntersectFade";

function Home() {
  const [entry, updateEntry] = useState({});
  // const observer = new window.IntersectionObserver(([entry]) => updateEntry(entry))
  const ref = useRef(null);
  const scrollStep = 2;
  var scrollHandle = 0;

  function startScrolling(modifier, step) {
    if (scrollHandle === 0) {
      scrollHandle = setInterval(function () {
        ref.current.scrollLeft += scrollStep * modifier;
      }, 2);
    }
  }

  function stopScrolling() {
    clearInterval(scrollHandle);
    scrollHandle = 0;
  }

  function hover(direction) {
    startScrolling(direction, scrollStep);
  }

  return (
    <div>
      <IntersectFade>
        <section className={styles.introContainer}>
          <div className={styles.intro}>
            <h1>Hi I'm Raymond</h1>
            <p>
              I'm a student at Duke University, but right now I'm taking a gap
              year
            </p>
          </div>
          <div className={styles.image}>
            <img
              className={styles.profile}
              src="/assets/images/profile.jpg"
              alt="pic of me"
            ></img>
          </div>
        </section>
      </IntersectFade>
      <IntersectFade opposite>
        <section className={styles.container}>
          <span
            id={styles.left}
            onMouseEnter={() => hover(-1)}
            onMouseLeave={() => stopScrolling()}
            className={styles.scrollArrow}
          >
            <ArrowBackIos></ArrowBackIos>
          </span>
          <span
            id={styles.right}
            onMouseEnter={() => hover(1)}
            onMouseLeave={() => stopScrolling()}
            className={styles.scrollArrow}
          >
            <ArrowForwardIos></ArrowForwardIos>
          </span>
          <div className={styles.projectGallery} ref={ref}>
            <img className={styles.project} src="/assets/images/profile.jpg" />
            <img className={styles.project} src="/assets/images/profile.jpg" />
            <img className={styles.project} src="/assets/images/profile.jpg" />
            <img className={styles.project} src="/assets/images/profile.jpg" />
            <img className={styles.project} src="/assets/images/profile.jpg" />
            <img className={styles.project} src="/assets/images/profile.jpg" />
          </div>
        </section>
      </IntersectFade>
    </div>
  );
}

export default Home;
