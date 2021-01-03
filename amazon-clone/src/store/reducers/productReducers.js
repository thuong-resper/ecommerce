import {
  FETCH_PRODUCT_DETAILS_FAIL,
  FETCH_PRODUCT_DETAILS_START,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_LIST_FAIL,
  FETCH_PRODUCT_LIST_START,
  FETCH_PRODUCT_LIST_SUCCESS
} from "../../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST_START:
      return { loading: true, products: [] };
    case FETCH_PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case FETCH_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { review: [] } },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS_START:
      return { loading: true, ...state };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case FETCH_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
