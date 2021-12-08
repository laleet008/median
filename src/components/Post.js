import React from "react";
import "./Post.css";
import LatestPost from "../api/LatestPost";
import PopularPost from "../api/Popular/Popular";

const Post = () => {
  return (
    <>
      <div className="grid_container">
        {/* latest post  */}
        <div className="latest_post">
          {/* heading */}
          <h1 className="latest_title">
            <span>Latest Post</span>
          </h1>

          {/* grid pard */}
          <div className="grid_wrapper">
            <div className="row_item">
              <div className="column_item">
                <div className="first_item">
                  {LatestPost.map((curElem, index) => {
                    const {
                      id,
                      title,
                      description,
                      author,
                      date,
                      profile,
                      image,
                    } = curElem;
                    if (index === 0) {
                      return (
                        <div>
                          <div className="blog_grid" key={id}>
                            <div className="featured_img">
                              <img
                                className="thumbnail"
                                src={image}
                                alt="image"
                              />
                            </div>
                            <div className="content">
                              <h3 className="blog_title">{title}</h3>
                              <p className="blog_description">{description}</p>
                              <div className="profile_img_container">
                                <img
                                  className="profile_img"
                                  src={profile}
                                  alt=""
                                />
                                <div className="detail">
                                  <h5 className="blog_author">{author}</h5>
                                  <p className="blog_date">{date}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="column_item right_item ">
                <div className="second_item ">
                  {LatestPost.map((curElem, index) => {
                    const {
                      id,
                      title,
                      description,
                      author,
                      date,
                      profile,
                      image,
                    } = curElem;
                    if (index === 2) {
                      return (
                        <div>
                          <div className="blog_grid" key={id}>
                            <div className="featured_img">
                              <img
                                className="thumbnail"
                                src={image}
                                alt="image"
                              />
                            </div>
                            <div className="content">
                              <h3 className="blog_title">{title}</h3>
                              <p className="blog_description">{description}</p>
                              <div className="profile_img_container">
                                <img
                                  className="profile_img"
                                  src={profile}
                                  alt=""
                                />
                                <div className="detail">
                                  <h5 className="blog_author">{author}</h5>
                                  <p className="blog_date">{date}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>

            <div className="row_item second_row">
              <div className="column_item ">
                <div className="first_item">
                  {LatestPost.map((curElem, index) => {
                    const {
                      id,
                      title,
                      description,
                      author,
                      date,
                      profile,
                      image,
                    } = curElem;
                    if (index === 1) {
                      return (
                        <div>
                          <div className="blog_grid" key={id}>
                            <div className="featured_img">
                              <img
                                className="thumbnail"
                                src={image}
                                alt="image"
                              />
                            </div>
                            <div className="content">
                              <h3 className="blog_title">{title}</h3>
                              <p className="blog_description">{description}</p>
                              <div className="profile_img_container">
                                <img
                                  className="profile_img"
                                  src={profile}
                                  alt=""
                                />
                                <div className="detail">
                                  <h5 className="blog_author">{author}</h5>
                                  <p className="blog_date">{date}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="column_item right_item ">
                <div className="second_item ">
                  {LatestPost.map((curElem, index) => {
                    const {
                      id,
                      title,
                      description,
                      author,
                      date,
                      profile,
                      image,
                    } = curElem;
                    if (index === 3) {
                      return (
                        <div>
                          <div className="blog_grid" key={id}>
                            <div className="featured_img">
                              <img
                                className="thumbnail"
                                src={image}
                                alt="image"
                              />
                            </div>
                            <div className="content">
                              <h3 className="blog_title">{title}</h3>
                              <p className="blog_description">{description}</p>
                              <div className="profile_img_container">
                                <img
                                  className="profile_img"
                                  src={profile}
                                  alt=""
                                />
                                <div className="detail">
                                  <h5 className="blog_author">{author}</h5>
                                  <p className="blog_date">{date}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* popular po st */}
        <div className="popular_post">
          <h1 className="popular_title">
            <span>Popular post</span>
          </h1>
          <div className="popular_posts">
            {PopularPost.map((curElem) => {
              const { id, title, dec, date } = curElem;
              return (
                <div className="post_wrapper">
                  <div className="id_wrapper">
                    <h3 className="popular_id">0{id}</h3>
                  </div>
                  <div className="content_wrapper">
                    <h3 className="popular_post_title">{title}</h3>
                    <p className="popular_post_dec">{dec}</p>
                    <p className="popular_post_date">{date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
