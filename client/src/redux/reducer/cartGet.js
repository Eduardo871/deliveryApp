import {CART_PUT,CART_PUT_SUCCESS,CART_PUT_FAIL} from "../constants/cartGet";
import {CART_DELETE,CART_DELETE_SUCCESS,CART_DELETE_FAIL} from "../constants/cartGet";
import {CART_POST,CART_POST_SUCCESS,CART_POST_FAIL} from "../constants/cartGet";


const initialState = {
    productsCart:false,
    loading:false,
    error: false,
} 

const reducerProductCart = (state=initialState, action)=>{
    switch (action.type) {
        case CART_POST:
            return { ...state, loading: true }
        case CART_POST_SUCCESS:
            return {...state, productsCart: action.payload, loading: false}
        case CART_POST_FAIL:
            return {...state, error: action.payload, loading: false}
        case CART_PUT:
            return {...state, loading: true}
        case CART_PUT_SUCCESS:
            return {...state, productsCart: action.payload, loading:false}
        case CART_PUT_FAIL:
            return  {...state, error: action.payload, loading: false}
        case CART_DELETE:
            return {...state, loading: true}
        case CART_DELETE_SUCCESS:
            return {...state, productsCart: action.payload, loading:false}
        case CART_DELETE_FAIL:
            return  {...state, error: action.payload, loading: false}
        default:
            return state
    }
}

export default reducerProductCart;