import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase";
import styles from "./projectcard.module.css";

function ProjectCard(props) {
  return (
    <ButtonBase>
      <Card
        className={styles.card}
        component={Link}
        to={"/project/" + props.project}
      >
        <CardMedia
          component="img"
          className={styles.media}
          image={props.img}
          title="Test"
        />
        <CardContent>
          {/* <div className={styles.imgContainer}>
            <img className={styles.media} src={props.img}></img>
          </div> */}
          <div className={styles.cardTitle}>
            <h1>{props.title}</h1>
          </div>
          <div>
            <p>{props.description}</p>
          </div>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

export default ProjectCard;
