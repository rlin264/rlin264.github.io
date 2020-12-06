import React from "react";
import Projects from "../../data/projects";
import NotFound from "../NotFound";
import styles from "./ProjectPage.module.css";
import Tag from "../../components/Tag/Tag";
import ReactMarkdown from "react-markdown";

function ProjectPage(props) {
  let project = null;
  if (props.match.params.project in Projects) {
    project = Projects[props.match.params.project];
  } else {
    return <NotFound></NotFound>;
  }

  return (
    <div>
      <img className={styles.image} src={project.image} alt={project.title} />
      <h1>{project.title}</h1>
      {project.tags && (
        <>
          {project.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </>
      )}
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectPage;
