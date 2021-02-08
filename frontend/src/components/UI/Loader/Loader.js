import { Alert, Spin } from "antd";
import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.spin}>
      <Spin tip="Loading..."></Spin>
    </div>
  );
};

export default Loader;
