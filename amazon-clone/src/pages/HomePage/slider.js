import React from "react";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Products/Product/Product";

const CustomSlider = () => {
  const dispatch = useDispatch();
  //select the part of state (products list)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  return (
    <Carousel itemsToShow={5}>
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </Carousel>
  );
};

export default CustomSlider;
