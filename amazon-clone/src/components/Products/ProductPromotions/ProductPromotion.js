import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useStyles } from "./styles";

const ProductPromotion = ({ product }) => {
  const classes = useStyles();
  const { promotions } = product;
  return (
    <Grid item xs={12} className={classes.table}>
      <Grid item xs={3}>
        Promotions
      </Grid>
      <Grid item xs={9} className={classes.promotionTagItem}>
        <div>
          {promotions.map((variant) => (
            <DropdownButton
              as={ButtonGroup}
              key={variant._id}
              id={`dropdown-variants-${variant}`}
              variant={variant.item.toLowerCase()}
              title={variant.item}
              className={classes.buttonGroup}
            >
              <Dropdown.Item
                eventKey={variant._id}
                as={"div"}
                className={classes.detail}
              >
                <Typography
                  variant="body2"
                  className={classes.item}
                  color="secondary"
                >
                  {variant.item}
                </Typography>
                <Typography variant="body2">{variant.detail}</Typography>
              </Dropdown.Item>
            </DropdownButton>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductPromotion;
