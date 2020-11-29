import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase"
import styles from "./projectcard.module.css";

function ProjectCard(props) {
  return (
    <ButtonBase>
      <Card className={styles.card}>
        <CardContent>
          <div>
            <img className={styles.media} src={props.img}></img>
          </div>
          <div className={styles.cardTitle}>
            <h1>{props.title}</h1>
          </div>
          <p>{props.description}</p>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

export default ProjectCard;