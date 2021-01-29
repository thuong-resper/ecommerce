import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import "./styles.css";

const Product = ({ product }) => {
  const classes = useStyles();

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
// <Card className={classes.root}>
// <CardActionArea>
//   {product.sale ? <ProductLabel /> : null}
//   <Link to={`/product/${product._id}`} className={classes.link}>
//     <CardMedia
//       className={classes.media}
//       image={product.image}
//       title="Contemplative Reptile"
//     />
//     <CardContent className={classes.cardContent}>
//       <Typography
//         gutterBottom
//         variant="h6"
//         component="h2"
//         color="secondary"
//       >
//         <span>${product.price}</span>
//         {product.sale ? (
//           <span className={classes.priceCompare}>
//             ${product.priceCompare}
//           </span>
//         ) : null}
//       </Typography>
//       <ProductRating
//         value={product.rating}
//         text={`${product.numReviews} reviews`}
//       />
//     </CardContent>
//   </Link>
// </CardActionArea>
// <CardActions className={classes.cardAction}>
//   <Button
//     color="primary"
//     className={classes.button}
//     startIcon={<VisibilityOutlinedIcon />}
//   >
//     Quick View
//   </Button>
//   <Button
//     color="primary"
//     className={classes.button}
//     startIcon={<FavoriteBorderIcon />}
//   >
//     Wishlist
//   </Button>
// </CardActions>
// </Card>
