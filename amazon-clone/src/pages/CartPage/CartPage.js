import { Button, Grid, TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../../components/Cart/CartList";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import AlertDialogSlide from "../../components/UI/Modal/CustomModal";
import {
  addToCart,
  removeAllCart,
  removeFromCart
} from "../../store/actions/cartActions";
import { useStyles } from "./styles";

const CartPage = ({ match, location, history }) => {
  // const classes = useStyles();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    history.push("/cart");
  };

  const handleDeleteAll = () => {
    dispatch(removeAllCart());
    history.push("/cart");
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  /**cart table */
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [cartItem, setCartItem] = useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = cartItems.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name, row) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    // let newCartItem = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    // for (let i = 0; i < newSelected.length; i++) {
    //   newCartItem = newCartItem.concat(
    //     cartItems.filter((item) => item.name === newSelected[i])
    //   );
    // }
    // setCartItem(newCartItem);
    // console.log(newCartItem);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, cartItems.length - page * rowsPerPage);

  // qtySection

  return (
    <Grid container justify="space-between" alignItems="flex-start" spacing={3}>
      <Grid item xs={8}>
        {/*table*/}

        {cartItems.length === 0 ? (
          <SimpleAlerts
            severity="info"
            message="Your cart is empty"
            title="info"
            to="/"
            titleLink="Go back"
          />
        ) : (
          /* table of cart*/

          <div className={classes.root}>
            <Paper className={classes.paper}>
              <EnhancedTableToolbar
                handleDeleteAll={handleDeleteAll}
                numSelected={selected.length}
              />
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  size={dense ? "small" : "medium"}
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={cartItems.length}
                  />

                  {/*item*/}

                  <TableBody>
                    {stableSort(cartItems, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                          <CartList
                            key={row.product}
                            isItemSelected={isItemSelected}
                            row={row}
                            handleClick={handleClick}
                            handleClickConfirm={() => handleDelete(row.product)}
                            labelId={labelId}
                          />
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{ height: (dense ? 33 : 53) * emptyRows }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={cartItems.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
            <FormControlLabel
              control={<Switch checked={dense} onChange={handleChangeDense} />}
              label="Dense padding"
            />
          </div>
        )}
      </Grid>

      {/*order detail*/}

      <Grid item xs={4} className={classes.orderDetail}>
        <Typography className={classes.locationLabel} gutterBottom>
          Location
        </Typography>
        <div className={classes.location}>
          <RoomOutlinedIcon className={classes.locationIcon} />
          <Typography variant="body2">
            Hồ Chí Minh, Quận Phú Nhuận, Phường 2
          </Typography>
        </div>
        <div className={classes.summary_section}>
          <div className={classes.summary_section_heading}>Order Summary</div>
          <div className={classes.summary_section_content}>
            <div className={classes.checkout_summary}>
              <div className={classes.checkout_rows}>
                <div className={classes.checkout_row}>
                  <div className={classes.checkout_summary_label}>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)} items)
                  </div>
                  <div className={classes.checkout_summary_value}>
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </div>
                </div>
                <div className={classes.checkout_row}>
                  <div className={classes.checkout_summary_label}>
                    Shipping Fee
                  </div>
                  <div className={classes.checkout_summary_value}>
                    $
                    {cartItems.reduce(
                      (acc, item) => acc + item.qty * item.price,
                      0
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.voucher_input}>
              <div className={classes.voucher_input_inner}>
                <div className={classes.voucher_input_col_9}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.voucher_input_type}
                  />
                </div>
                <div className={classes.voucher_input_col_3}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.voucher_input_button}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.checkout_order_total}>
            <div className={classes.checkout_order_row}>
              <div className={classes.checkout_order_total_title}>Total</div>
              <div className={classes.checkout_order_total_fee}>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}
                <small className={classes.checkout_order_total_fee_tip}>
                  VAT included, where applicable
                </small>
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.confirm_cart_button}
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            CONFIRM CART
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default CartPage;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "",
    numeric: false,
    disablePadding: true,
    label: "Select All",
    class: "",
  },
  { id: "name", numeric: false, disablePadding: false, label: "Name" },
  { id: "price", numeric: false, disablePadding: false, label: "Price" },
  { id: "qty", numeric: false, disablePadding: false, label: "Quantity" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  // const handleDelete = (id) => {
  //   // showModal(id);
  //   console.log(id);
  // };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            className={headCell.class}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, handleDeleteAll } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <AlertDialogSlide
          title="Info"
          iconAnchor={<DeleteIcon />}
          component={
            <Typography>Are you sure want to delete all items</Typography>
          }
          confirmButton={
            <div>
              <Button color="primary" onClick={handleDeleteAll}>
                Agree
              </Button>
            </div>
          }
        />
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
