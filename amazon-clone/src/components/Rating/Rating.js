import { Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import PropTypes from "prop-types";
import React from "react";
import { useStyles } from "./styles";

const ProductRating = ({ value, text }) => {
  const classes = useStyles();
  return (
    <Box
      component="fieldset"
      borderColor="transparent"
      className={classes.rating}
    >
      <Rating
        name="read-only"
        value={value}
        readOnly
        size="small"
        precision={0.5}
      />
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.space}
      >
        {text && text}
      </Typography>
    </Box>
  );
};

ProductRating.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ProductRating;
