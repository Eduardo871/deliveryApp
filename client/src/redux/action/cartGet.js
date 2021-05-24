// import {CART_GET,CART_GET_SUCCESS,CART_GET_FAIL} from "../constants/cartGet";
import {CART_PUT,CART_PUT_SUCCESS,CART_PUT_FAIL} from "../constants/cartGet";
import {CART_DELETE,CART_DELETE_SUCCESS,CART_DELETE_FAIL} from "../constants/cartGet";
import {CART_POST,CART_POST_SUCCESS,CART_POST_FAIL} from "../constants/cartGet";
import axios from "axios";
import {HOST_BACK} from "../back_constants/index";


// export const getCart = (payload)=>(dispatch)=>{
//     dispatch({type:CART_GET});
//     axios.get(`${HOST_BACK}/cart`)

// };

export const postCart = (payload)=>(dispatch)=>{
    dispatch({type:CART_POST});
    axios.post(`${HOST_BACK}/cart`,payload).then(
        (resp)=>{
            dispatch({type:CART_POST_SUCCESS, payload: resp.data})
        },
        (err)=>{
            dispatch({type:CART_POST_FAIL, payload: err.data})
        }
    )
};
export const putCart = (payload)=>(dispatch)=>{
    dispatch({type:CART_PUT});
    axios.put(`${HOST_BACK}/cart/quantity`,payload).then(
        (resp)=>{
            dispatch({type:CART_PUT_SUCCESS, payload:resp.data})
        },
        (err)=>{
            dispatch({type:CART_PUT_FAIL, payload:err.data})
        }
    )
};
export const deleteCart = (payload)=>(dispatch)=>{
    dispatch({type:CART_DELETE});
    axios.delete(`${HOST_BACK}/cart?productId=${payload.productId}&&cartId=${payload.cartId}`).then(
        (resp)=>{
            dispatch({type:CART_DELETE_SUCCESS, payload: resp.data})
        },
        (err)=>{
            dispatch({type:CART_DELETE_FAIL, payload: err.data})
        }
    )
};