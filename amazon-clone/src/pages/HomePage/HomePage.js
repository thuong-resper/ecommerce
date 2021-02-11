import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import Product from "../../components/Products/Product/Product";
import ProductBanner from "../../components/Products/ProductBanner/ProductBanner";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { listProducts } from "../../store/actions/productActions";
import "./styles.css";

const HomePage = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  //select the part of state (products list)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Carousel
        autoPlay={false}
        animation="fade"
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
      >
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
      </Carousel>
      {loading ? (
        <SimpleBackdrop click={true} />
      ) : error ? (
        <SimpleAlerts severity="error" message={error} />
      ) : (
        <div className="tab">
          <AppBar position="static" className="app-bar">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Fashion Watches" {...a11yProps(0)} />
              <Tab label="Smart Watches" {...a11yProps(1)} />
              <Tab label="Watch Straps" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className="tab-panel">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="stretch"
              style={{ width: "100%" }}
            >
              {products.map((product) => (
                <Product
                  product={product}
                  key={product._id}
                  loading={loading}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>
      )}
    </div>
  );
};

export default HomePage;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
}));
