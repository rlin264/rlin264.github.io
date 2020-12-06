import { Grid } from "@material-ui/core";
import React from "react";
import Blogs from "../data/projects";
import BlogCard from "../components/BlogCard/BlogCard";
import IntersectFade from "../components/IntersectFade";

function Blog() {
  return (
    <div className="blog">
      <div>WIP</div>
      <Grid container spacing={4}>
        {Object.entries(Blogs).map(([blog, v], i) => {
          const opposite = i >= 3 ? true : false;
          return (
            <Grid item xs={4}>
              <IntersectFade distance="3vh" opposite={opposite}>
                <BlogCard
                  blog={blog}
                  title={v.title}
                  description={v.short}
                  img={v.image}
                />
              </IntersectFade>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Blog;
