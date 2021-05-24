import {HOST_BACK} from "../back_constants/index";
import {POST_CARD_DETAIL} from "../constants/cardDetails";

 export const postCardDetail = (payload)=>(dispatch)=>{
    dispatch({type: POST_CARD_DETAIL, payload})
}