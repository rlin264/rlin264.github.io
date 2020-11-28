import React, { useRef, useState } from "react";
import styles from "./home.module.css";

function Home() {
  const [leftPressed, setLeftPressed] = useState(false)
  const ref = useRef(null);
  const scrollStep = 2;
  var scrollHandle = 0;

  function startScrolling(modifier, step) {
    if (scrollHandle === 0) {
        scrollHandle = setInterval(function () {
            // var newOffset = ref.current.scrollLeft() + (scrollStep * modifier);

            // ref.current.scrollLeft(newOffset);
            ref.current.scrollLeft += scrollStep * modifier
        }, 2);
    }
  }

  function stopScrolling() {
    clearInterval(scrollHandle);
    scrollHandle = 0;
  }

  function hover(direction){
    startScrolling(direction, scrollStep);
  }

  return (
    <div>
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
      <section className={styles.container}>
        <span
          id={styles.left}
          onMouseEnter={() => hover(-1)}
          onMouseLeave={() => stopScrolling()}
          className={styles.scrollArrow}
        >
          Slide left
        </span>
        <span 
          id={styles.right}
          onMouseEnter={() => hover(1)}
          onMouseLeave={() => stopScrolling()}
          className={styles.scrollArrow}
        >
          Slide right
        </span>
        <div className={styles.projectGallery} ref={ref}>
          <div>
            <img className={styles.project} src="/assets/images/profile.jpg" />
          </div>
          <div>
            <img className={styles.project} src="/assets/images/profile.jpg" />
          </div>
          <div>
            <img className={styles.project} src="/assets/images/profile.jpg" />
          </div>
          <div>
            <img className={styles.project} src="/assets/images/profile.jpg" />
          </div>
          <div>
            <img className={styles.project} src="/assets/images/profile.jpg" />
          </div>
          <div>
            <img className={styles.project} src="/assets/images/profile.jpg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
