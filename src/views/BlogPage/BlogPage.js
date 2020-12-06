import React, { useState, useEffect } from "react";
import Blogs from "../../data/blogs";
import NotFound from "../NotFound";
import styles from "./BlogPage.module.css";
import Tag from "../../components/Tag/Tag";
import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router-dom";

function BlogPage(props) {
  const [blogText, loadBlogText] = useState("");
  const [blog, setBlog] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (props.match.params.blog in Blogs) {
      setBlog(Blogs[props.match.params.blog]);
    } else {
      // return <NotFound></NotFound>;
      history.push("/notfound")
      return;
    }
    fetch(blog.post)
      .then((response) => response.text())
      .then((text) => {
        loadBlogText(text);
      });
  }, [blog, props.match.params.blog]);

  // let blogSrc = null;
  // if (props.match.params.blog in Blogs) {
  //   blogSrc = Blogs[props.match.params.blog];
  // } else {
  //   return <NotFound></NotFound>;
  // }

  return (
    <div>
      <img className={styles.image} src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      {blog.tags && (
        <>
          {blog.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </>
      )}
      <p>{blog.description}</p>
      <ReactMarkdown source={blogText} />
    </div>
  );
}

export default BlogPage;
