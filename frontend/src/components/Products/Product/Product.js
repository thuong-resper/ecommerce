import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div className="one-item">
      <div className="item">
        <Link to={`/product/${product._id}`} className="item-link">
          <div className="height-label"></div>
          <img
            data-original="https://cdn.tgdd.vn/Products/Images/7264/200840/citizen-an3610-55l-xanh-400x400.jpg"
            className="item-img"
            alt={product.name}
            // src={product.image}
            src="https://cdn.tgdd.vn/Products/Images/7264/218120/mvw-mp005-01-nam-1-400x400.jpg"
          />
          <h3 className="item-name">{product.name}</h3>
          <div className="pros">
            <span className="dotted lower">30 mm</span>
          </div>
          <div className="price">
            <strong>{product.price}₫</strong>
            <span>{product.priceCompare}₫</span>
            <i>
              {(
                -(
                  (product.priceCompare - product.price) /
                  product.priceCompare
                ) * 100
              ).toFixed() + "%"}
            </i>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
// <Card className="my-3 p-3 rounded">
// <Link to={`/product/${product._id}`}>
//   <Card.Img src={product.image} variant="top" />
// </Link>

// <Card.Body>
//   <Link to={`/product/${product._id}`}>
//     <Card.Title as="div">
//       <strong>{product.name}</strong>
//     </Card.Title>
//   </Link>

//   <Card.Text as="div">
//     <Rating
//       value={product.rating}
//       text={`${product.numReviews} reviews`}
//     />
//   </Card.Text>

//   <Card.Text as="h3">${product.price}</Card.Text>
// </Card.Body>
// </Card>
