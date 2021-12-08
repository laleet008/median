import React from "react";
import classes from "./AttractiveContainer.module.css";
import Tree from "../assets/tree.png";

const AttractiveContainer = () => {
  return (
    <div className={classes.attractive_container}>
      <div className={classes.text_div}>
        <h1 className={classes.main_heading}>
          Welcome to Median, a WordPress theme.
        </h1>
        <p className={classes.main_para}>
          The theme has amazing layouts, practical built-in features, great
          bones and lightning load speed. Download it now!
        </p>
        <div className={classes.button_wrapper}>
          <button className={classes.learn_more}>Learn More</button>
          <button className={classes.create_account_btn}>
            Create a account
          </button>
        </div>
      </div>

      <div className={classes.image_div}>
        <div className={classes.img_div}>
          <img className={classes.img} src={Tree} alt="tree" />
        </div>
      </div>
    </div>
  );
};

export default AttractiveContainer;
