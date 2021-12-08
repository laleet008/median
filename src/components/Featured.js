// import React, { useState } from "react";
import classes from "./Featured.module.css";
import MediaFeatured from "../api/MediaFeatured";

const Featured = () => {
  //   const { featuredData, setFeaturedData } = useState(MediaFeatured);

  return (
    <div className={classes.featured_container}>
      <h1 className={classes.featured_title}>
        <span>Featured on median</span>
      </h1>

      <div className={classes.grid_collection}>
        <div className={classes.first_grid_parent}>
          {/* first grid */}
          {MediaFeatured.map((curElem, index) => {
            const { id, title, description, date, author, image } = curElem;

            if (index === 0) {
              return (
                <div>
                  <div className={classes.first_grid} key={id}>
                    <div className={classes.featured_img}>
                      <img
                        className={classes.left_blog_thumbnail}
                        src={image}
                        alt="image"
                      />
                    </div>
                    <div className={classes.first_grid_content}>
                      <h3 className={classes.blog_title}>{title}</h3>
                      <p className={classes.blog_description}>
                        {description.substring(0, 71)}...
                      </p>
                      <div className={classes.detail}>
                        <h5 className={classes.blog_author}>{author}</h5>
                        <p className={classes.blog_date}>{date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className={classes.second_grid_parent}>
          {/* second grid */}
          {MediaFeatured.map((curElem, index) => {
            const { id, title, date, author, image } = curElem;

            if (index === 1 || index === 2) {
              return (
                <div>
                  <div className={classes.second_grid} key={id}>
                    <div className={classes.featured_img_second_grid}>
                      <img
                        className={classes.left_blog_thumbnail}
                        src={image}
                        alt="image"
                      />
                    </div>
                    <div
                      className={`${classes.blog_contents} ${classes.second_gird_content}`}
                    >
                      <h3 className={classes.blog_title}>{title}</h3>
                      <div className={classes.detail_wrapper}>
                        <h5 className={classes.blog_author}>{author}</h5>
                        <p className={classes.blog_date}>{date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className={classes.third_grid_parent}>
          {/* third grid */}
          {MediaFeatured.map((curElem, index) => {
            const { id, title, date, author, image } = curElem;

            if (index >= 3) {
              return (
                <div>
                  <div className={classes.third_grid} key={id}>
                    <div className={classes.featured_img_third_grid}>
                      <img
                        className={classes.left_blog_thumbnail}
                        src={image}
                        alt="image"
                      />
                    </div>
                    <div className={classes.blog_contents}>
                      <h4 className={classes.blog_title}>{title}</h4>
                      <h6 className={classes.blog_author}>{author}</h6>
                      <p className={classes.blog_date}>{date}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
