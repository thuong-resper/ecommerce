import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../../components/Products/Product/Product";

const HomePage = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };
    fetchProducts();
  }, []);

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
