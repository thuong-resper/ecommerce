import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import React from "react";
import { Link } from "react-router-dom";
import ProductRating from "../../Rating/Rating";
import ProductLabel from "../ProductLabel/ProductLabel";
import { useStyles } from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Link
            to={`/collections/vendors?q=${product.brand}`}
            className={classes.link}
          >
            <Typography variant="caption" color="textSecondary">
              {product.brand}
            </Typography>
          </Link>
          <Link to={`/product/${product._id}`} className={classes.link}>
            <Typography variant="body2">
              <strong>{product.name}</strong>
            </Typography>
          </Link>
        </CardContent>
        <CardActionArea>
          {product.sale ? <ProductLabel /> : null}
          <Link to={`/product/${product._id}`} className={classes.link}>
            <CardMedia
              className={classes.media}
              image={product.image}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h6"
                component="h2"
                color="secondary"
              >
                <span>${product.price}</span>
                {product.sale ? (
                  <span className={classes.priceCompare}>
                    ${product.priceCompare}
                  </span>
                ) : null}
              </Typography>
              <ProductRating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
          <Button
            color="primary"
            className={classes.button}
            startIcon={<VisibilityOutlinedIcon />}
          >
            Quick View
          </Button>
          <Button
            color="primary"
            className={classes.button}
            startIcon={<FavoriteBorderIcon />}
          >
            Wishlist
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
