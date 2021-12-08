import React from "react";
import classes from "./Heading.module.css";
import { FaArrowDown } from "react-icons/fa";

const Headings = () => {
  return (
    <ul className={classes.headings}>
      <li className={`${classes.items} ${classes.home}`}>Home</li>
      <li className={classes.items}>ui/ux design</li>
      <li className={classes.items}>web development</li>
      <li className={classes.items}>typography</li>
      <li className={classes.items}>freelancing</li>
      <li className={classes.items}>lifestyle</li>
      <li className={classes.items}>about page</li>
      <li className={classes.items}>
        more layout <FaArrowDown className={classes.down_arrow} />
      </li>
    </ul>
  );
};

export default Headings;
