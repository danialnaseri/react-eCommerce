import actiontypes from "../actiontypes";
import jwt from "jsonwebtoken";
const secretKey = "d8ba1c9c-1e08-442c-a185-ec15379e033c";

const initState = {
  shoppingCart: [],
  shoppingCartCountItem: 0,
  shoppingCartTotal: 0,
};

export default (state = initState, action) => {
  let itemIndex;

  switch (action.type) {
    case actiontypes().cart.add:
      try {
        itemIndex = state.shoppingCart.findIndex(
          (product) => product._id === action.product._id
        );

        itemIndex < 0
          ? (state.shoppingCart = [...state.shoppingCart, action.product])
          : (state.shoppingCart[itemIndex].quantity += 1);

        state.shoppingCartCountItem = getshoppingCartCountItem(
          state.shoppingCart
        );
        state.shoppingCartTotal = getshoppingCartTotal(state.shoppingCart);

        localStorage.setItem(
          "d8ba1c9c-1e08-442c-a185-ec15379e033c",
          jwt.sign(state, secretKey)
        );
      } catch {}

      return state;

    case actiontypes().cart.deleteProductFromCart:
      itemIndex = state.shoppingCart.findIndex(
        (product) => product._id === action.id
      );
      state.shoppingCart[itemIndex].quantity = 1;

      state.shoppingCart = state.shoppingCart.filter(
        (product) => product._id !== action.id
      );
      state.shoppingCartCountItem = getshoppingCartCountItem(
        state.shoppingCart
      );
      state.shoppingCartTotal = getshoppingCartTotal(state.shoppingCart);
      localStorage.setItem(
        "d8ba1c9c-1e08-442c-a185-ec15379e033c",
        jwt.sign(state, secretKey)
      );

      return state;

    case actiontypes().cart.remove:
      try {
        itemIndex = state.shoppingCart.findIndex(
          (product) => product._id === action.id
        );

        state.shoppingCart[itemIndex].quantity === 1
          ? (state.shoppingCart = state.shoppingCart.filter(
              (item) => item._id !== action.id
            ))
          : (state.shoppingCart[itemIndex].quantity -= 1);

        state.shoppingCartCountItem = getshoppingCartCountItem(
          state.shoppingCart
        );
        state.shoppingCartTotal = getshoppingCartTotal(state.shoppingCart);

        localStorage.setItem(
          "d8ba1c9c-1e08-442c-a185-ec15379e033c",
          jwt.sign(state, secretKey)
        );
      } catch {}

      return state;

    case actiontypes().cart.clear:
      try {
        state.shoppingCart.forEach((product) => {
          product.quantity = 1;
        });

        state.shoppingCart = [];
        state.shoppingCartCountItem = 0;
        state.shoppingCartTotal = 0;

        localStorage.removeItem("d8ba1c9c-1e08-442c-a185-ec15379e033c");
      } catch {}

      return state;

    default:
      let cart = jwt.decode(
        localStorage.getItem("d8ba1c9c-1e08-442c-a185-ec15379e033c")
      );

      if (cart) state = cart;

      return state;
  }
};

const getshoppingCartCountItem = (items) => {
  let total = 0;

  items.forEach((product) => {
    total += product.quantity;
  });

  return total;
};

const getshoppingCartTotal = (items) => {
  let total = 0;

  items.forEach((product) => {
    total += product.price * product.quantity;
  });

  return total;
};
