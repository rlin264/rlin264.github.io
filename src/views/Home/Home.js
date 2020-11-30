import React, { useRef, useState } from "react";
import styles from "./home.module.css";
import { ArrowBackIos, ArrowForwardIos, ExpandMore } from "@material-ui/icons";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import Intersecting from "../../components/Intersecting";
import IntersectFade from "../../components/IntersectFade";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Home() {
  const [entry, updateEntry] = useState({});
  // const observer = new window.IntersectionObserver(([entry]) => updateEntry(entry))
  const ref = useRef(null);
  const projRef = useRef(null);
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

  const projScroll = () => projRef.current.scrollIntoView({ behavior: 'smooth'});

  return (
    <div className={styles.home}>
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
          <span className={styles.scrollDown}>
            <p className={styles.expandText}>Some of what I've been up to</p>
            <ExpandMore
              id={styles.expand}
              className={styles.scrollArrow}
              onClick={projScroll}
            />
          </span>
        </section>
      </IntersectFade>
      <div ref={projRef}>
        <IntersectFade opposite>
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
          <section className={styles.container}>
            <div className={styles.projectGallery} ref={ref}>
              <div className={styles.project}>
                <ProjectCard
                  project="pineparkhealth"
                  title="Pine Park Health"
                  description="Software Engineering Intern"
                  img="/assets/images/pph.webp"
                />
              </div>
              <div className={styles.project}>
                <ProjectCard />
              </div>
              <div className={styles.project}>
                <ProjectCard />
              </div>
              <div className={styles.project}>
                <ProjectCard
                  project="pineparkhealth"
                  title="Pine Park Health"
                  description="Software Engineering Intern"
                  img="/assets/images/pph.webp"
                />
              </div>
              <div className={styles.project}>
                <ProjectCard
                  project="pineparkhealth"
                  title="Pine Park Health"
                  description="Software Engineering Intern"
                  img="/assets/images/pph.webp"
                />
              </div>
            </div>
          </section>
        </IntersectFade>
      </div>
    </div>
  );
}

export default Home;
