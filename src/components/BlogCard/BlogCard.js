import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase";
import styles from "./BlogCard.module.css";

function BlogCard(props) {
  return (
    <ButtonBase>
      <Card
        className={styles.card}
        component={Link}
        to={"/blog/" + props.blog}
      >
        <CardMedia
          component="img"
          className={styles.media}
          image={props.img}
          title="Test"
        />
        <CardContent>
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

export default BlogCard;
