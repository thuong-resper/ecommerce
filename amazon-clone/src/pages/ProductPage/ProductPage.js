import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomizedBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductColor from "../../components/Products/ProductColor/ProductColor";
import ProductPromotion from "../../components/Products/ProductPromotions/ProductPromotion";
import ProductRating from "../../components/Rating/Rating";
import { useStyles } from "./styles";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

const ProductPage = ({ match }) => {
  const classes = useStyles();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  console.log(product.rating);
  return (
    <Grid container spacing={1} direction="row">
      <Grid item xs={12}>
        <CustomizedBreadcrumbs />
      </Grid>

      <Grid item xs={4}>
        product image preview
      </Grid>

      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.rating}>
            <ProductRating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <div>
              <IconButton aria-label="share" color="primary">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="favorite" color="primary">
                <FavoriteBorderIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.productBrand}>
            <span>Brand:</span>
            <Link
              to={`/collections/vendors?q=${product.brand}`}
              className={classes.brandLink}
            >
              {product.brand}
            </Link>
            <div className={classes.brandDivider}></div>
            <Link
              to={`/collections/vendors?q=${product.brand}`}
              className={classes.brandLink}
            >
              More options {product.brand}
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.priceDetail}>
            <Typography variant="h4" color="secondary">
              <abbr style={{ textDecoration: "underline dotted" }}>USD</abbr>
              {product.price}
            </Typography>
            <Typography variant="body2">
              {product.sale ? (
                <span className={classes.priceCompare}>
                  ${product.priceCompare}
                </span>
              ) : null}
              {product.sale
                ? (
                    -((product.price - product.priceCompare) / product.price) *
                    100
                  ).toFixed() + "%"
                : null}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/*promotions */}
            {product.promotions ? <ProductPromotion product={product} /> : null}

            {/*product color*/}
            {product.colors ? <ProductColor product={product} /> : null}

            {/*product size*/}

            {/*product quantity*/}

            {/*product add to card*/}
            <Grid item xs={12} className={classes.button}>
              <Button
                variant="contained"
                className={classes.orderButton}
                disabled={product.countInStock === 0}
              >
                Buy Now
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.orderButton}
                disabled={product.countInStock === 0}
              >
                Add To Card
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        delivery
      </Grid>
    </Grid>
  );
};

export default ProductPage;

// show promotion
