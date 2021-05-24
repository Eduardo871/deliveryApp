import {SEARCH_BY_TYPE, SEARCH_BY_TYPE_SUCCESS, SEARCH_BY_TYPE_FAIL} from "../constants/chip";
import axios from "axios";
import {HOST_BACK} from "../back_constants/index"


export const chipGet = (payload) =>(dispatch)=>{
    dispatch({type:SEARCH_BY_TYPE});
    axios.get(`${HOST_BACK}/product?type=${payload}`)
    .then(
        (resp)=>{dispatch({type:SEARCH_BY_TYPE_SUCCESS, payload:resp.data})},
        (err)=>{dispatch({type:SEARCH_BY_TYPE_FAIL, payload: err})}
    )
}