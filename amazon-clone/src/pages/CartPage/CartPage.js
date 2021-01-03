import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import Product from "../../components/Products/Product/Product";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { listProducts } from "../../store/actions/productActions";
import { useStyles } from "./styles";

const CartPage = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  //select the part of state (products list)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      alignItems="center"
      justify="center"
    >
      Cart
    </Grid>
  );
};

export default CartPage;