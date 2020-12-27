import { Grid } from "@material-ui/core";
import React from "react";
import Product from "../../components/Products/Product/Product";
import products from "../../products";

const HomePage = (props) => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      alignItems="center"
      justify="center"
    >
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </Grid>
  );
};

export default HomePage;
