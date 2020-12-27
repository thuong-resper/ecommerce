import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { StyledBreadcrumb } from "./styles";

function handleClick(e) {
  e.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CustomizedBreadcrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      />
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Catalog"
        onClick={handleClick}
      />
      <StyledBreadcrumb
        label="Accessories"
        deleteIcon={<ExpandMoreIcon />}
        onClick={handleClick}
        onDelete={handleClick}
      />
    </Breadcrumbs>
  );
};

export default CustomizedBreadcrumbs;
