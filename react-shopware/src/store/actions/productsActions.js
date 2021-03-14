import actiontypes from "../actiontypes";
import axios from "axios";



export const getProducts = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:9191/api/products/");
    if (res !== null) {
      dispatch(setProducts(res.data));
    }
  };
};



export const getProduct = (id) => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:9191/api/products/" + id);
    if (res !== null) {
      dispatch(setProduct(res.data));
    }
  };
};

export const setProducts = (products) => {
  return {
    type: actiontypes().products.set,
    payload: products
  };
};

export const setProduct = (product) => {
  return {
    type: actiontypes().product.set,
    payload: product
  };
};
