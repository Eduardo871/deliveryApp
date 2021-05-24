import {REVIEW, REVIEW_SUCCESS, REVIEW_FAIL} from "../constants/review";
import axios from "axios";
import {HOST_BACK} from "../back_constants/index";

export const reviewPost = (payload) => (dispatch)=>{
    dispatch({type:REVIEW});
    axios.post(`${HOST_BACK}/review`,payload).then(
        (resp)=>{dispatch({type:REVIEW_SUCCESS, payload: resp.data})},
        (err)=>{dispatch({type:REVIEW_FAIL, payload: err.data})}
    )
}