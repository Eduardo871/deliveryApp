import {SEARCH_BY_NAME,SEARCH_BY_NAME_SUCCESS,SEARCH_BY_NAME_FAIL} from "../constants/search";
import {HOST_BACK} from "../back_constants/index";
import axios from "axios";

export const searchGet = (payload) => (dispatch) =>{
    dispatch({type:SEARCH_BY_NAME});
    axios(`${HOST_BACK}/product/searchProduct?name=${payload}`)
    .then(
        (resp)=>{dispatch({type:SEARCH_BY_NAME_SUCCESS, payload:resp.data})},
        (err)=>{dispatch({type:SEARCH_BY_NAME_FAIL, payload: err})}
    )
};