import {SEARCH_BY_NAME,SEARCH_BY_NAME_SUCCESS,SEARCH_BY_NAME_FAIL} from "../constants/search";
import {SEARCH_BY_TYPE, SEARCH_BY_TYPE_SUCCESS, SEARCH_BY_TYPE_FAIL} from "../constants/chip";
import {REVIEW, REVIEW_SUCCESS, REVIEW_FAIL} from "../constants/review";

const initialState = {
    product: false,
    error: false,
    loading: false,
}

const reducerProduct = (state=initialState, action)=>{
    switch (action.type) {
        case SEARCH_BY_NAME:
            return {
                ...state, loading: true
            }
        case SEARCH_BY_NAME_SUCCESS:
            return {
                ...state, loading:false, product: action.payload
            }
        case SEARCH_BY_NAME_FAIL:
            return {
                ...state, loading:false, error: action.payload
            }
         case SEARCH_BY_TYPE:
            return {
                ...state, loading: true
            }
        case SEARCH_BY_TYPE_SUCCESS:
            return {
                ...state, loading:false, product: action.payload
            }
        case SEARCH_BY_TYPE_FAIL:
            return {
                ...state, loading:false, error: action.payload
            }
        case REVIEW:
            return{
                ...state, loading: true
            }
        case REVIEW_SUCCESS:
            return{
                ...state, loading:false, product: action.payload
            }
        case REVIEW_FAIL:
            return {
                ...state, loading:false, error: action.payload
            }
        default:
            return state
    }
}
export default reducerProduct;