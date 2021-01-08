import { Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RemoveIcon from "@material-ui/icons/Remove";
import ShareIcon from "@material-ui/icons/Share";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import CustomizedBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductColor from "../../components/Products/ProductColor/ProductColor";
import ProductPromotion from "../../components/Products/ProductPromotions/ProductPromotion";
import ProductRating from "../../components/Rating/Rating";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { listProductDetails } from "../../store/actions/productActions";
import { useStyles } from "./styles";
import styles from "./styles.module.css";

const ProductPage = ({ history, match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  console.log(product);
  const max = product.countInStock;
  const [qty, setQty] = useState(1);

  const handleChange = (e) => {
    console.log(e.target.value);
    const base = Math.abs(e.target.value);

    if (base >= max) {
      setQty(qty - qty + parseInt(max));
    } else {
      setQty(qty - qty + parseInt(base));
    }
  };
  const increment = () => {
    if (qty < max) {
      setQty(qty + 1);
    }
  };
  const decrement = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <SimpleBackdrop click={true} />
      ) : error ? (
        <SimpleAlerts severity="error" message={error} />
      ) : (
        <Grid container spacing={3} direction="row">
          <Grid item xs={12}>
            <CustomizedBreadcrumbs />
          </Grid>

          <Grid item xs={4}>
            <img alt="d" className={classes.media} src={product.image} />
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
                  <abbr style={{ textDecoration: "underline dotted" }}>
                    USD
                  </abbr>
                  {product.price}
                </Typography>
                <Typography variant="body2">
                  {product.sale ? (
                    <span>
                      <span className={classes.priceCompare}>
                        ${product.priceCompare}
                      </span>
                      <span>
                        {(
                          -(
                            (product.priceCompare - product.price) /
                            product.price
                          ) * 100
                        ).toFixed() + "%"}
                      </span>
                    </span>
                  ) : null}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {/*promotions */}
                {product.promotions ? (
                  <ProductPromotion product={product} />
                ) : null}

                {/*select quantity */}
                {
                  <Grid item xs={12} className={classes.table}>
                    <Grid item xs={3}>
                      Quantity
                    </Grid>
                    <Grid item xs={9} className={classes.root}>
                      <IconButton
                        onClick={decrement}
                        disabled={qty === 1 || qty === 0}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <TextField
                        type="number"
                        value={qty}
                        className={styles.inputField}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <IconButton onClick={increment} disabled={qty === max}>
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                }

                {/*product color*/}
                {product.colors ? <ProductColor product={product} /> : null}

                {/*product size*/}

                {/*product quantity*/}

                {/*product add to cart*/}
                <Grid item xs={12} className={classes.button}>
                  <Button
                    variant="contained"
                    className={classes.orderButton}
                    disabled={product.countInStock === 0}
                  >
                    Buy Now
                  </Button>
                  <Button
                    onClick={addToCartHandler}
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
      )}
    </div>
  );
};

export default ProductPage;

// show promotion
