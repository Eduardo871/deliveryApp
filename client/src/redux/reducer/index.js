import reducerCardDetails from "./cardDetail";
import reducerProduct from "./product";
import reducerProductCart from"./cartGet";

function combineReducer(state = {}, action) {
    return {
      product: reducerProduct(state.product,action),
      productDetails:reducerCardDetails(state.productDetails, action),
      productCart: reducerProductCart (state.productCart, action)
    };
  }
  
  export default combineReducer;