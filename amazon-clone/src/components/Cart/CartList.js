import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import AlertDialogSlide from "../UI/Modal/CustomModal";
import { useStyles } from "./styles";
import { styles } from "./styles.module.css";

const CartList = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    isItemSelected,
    row,
    handleClick,
    labelId,
    handleClickConfirm,
  } = props;

  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.name}
      className={classes.oneCartItem}
    >
      <TableCell padding="checkbox">
        <Checkbox
          onClick={(event) => handleClick(event, row.name)}
          checked={isItemSelected}
          inputProps={{ "aria-labelledby": labelId }}
        />
      </TableCell>
      <TableCell
        component="th"
        id={labelId}
        scope="row"
        className={classes.tableTh}
      >
        <img alt="d" className={classes.media} src={row.image} />
      </TableCell>
      <TableCell align="left">{row.name}</TableCell>
      <TableCell align="left">
        <div className={classes.price}>
          <Typography variant="h6" color="secondary">
            <abbr
              style={{
                textDecoration: "underline dotted",
              }}
            >
              USD
            </abbr>
            {row.price}
          </Typography>
          <Typography variant="body2">
            {row.sale ? (
              <span>
                <span className={classes.priceCompare}>
                  ${row.priceCompare}
                </span>
                <span>
                  {(
                    -(1 - (row.priceCompare - row.price) / row.price) * 100
                  ).toFixed() + "%"}
                </span>
              </span>
            ) : null}
          </Typography>
          <div className={classes.iconButton}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <AlertDialogSlide
              title="Info"
              iconAnchor={<DeleteOutlineIcon />}
              component={
                <Typography>
                  Are you sure want to delete {row.product}
                </Typography>
              }
              confirmButton={
                <div>
                  <Button color="primary" onClick={handleClickConfirm}>
                    Agree
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </TableCell>
      <TableCell align="left">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Qty</InputLabel>
          <Select
            value={row.qty}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) =>
              dispatch(addToCart(row.product, Number(e.target.value)))
            }
          >
            {[...Array(row.countInStock).keys()].map((x) => (
              <MenuItem key={x + 1} value={x + 1}>
                {x + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </TableCell>
    </TableRow>
  );
};

export default CartList;
