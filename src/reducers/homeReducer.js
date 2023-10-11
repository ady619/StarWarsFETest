import { HOMEPAGE_NEXT, HOMEPAGE_PREVIOUS, UPDATE_VEHICLE_LIST } from "../actions/actionTypes";


const initialState = {
    data: [],
    status: 'idle',
    error: null,
  };
  
const homePageReducer = (state = '', action) => {
    switch (action.type) {
        case HOMEPAGE_NEXT:
            return
        case HOMEPAGE_PREVIOUS:
            return
        case UPDATE_VEHICLE_LIST:
            return
        default:
            return state;
    }
}

export default homePageReducer