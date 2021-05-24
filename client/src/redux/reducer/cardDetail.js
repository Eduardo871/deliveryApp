import {POST_CARD_DETAIL} from "../constants/cardDetails";

const initialState = {
    product:false
} 

const reducerCardDetails = (state=initialState, action)=>{
    switch (action.type) {
        case POST_CARD_DETAIL:
            return { ...state, product: action.payload }
        default:
            return state
    }
}

export default reducerCardDetails;