import {API} from "../API/api";

const GET_DATA = 'CUST/GET-DATA';
const SELECT_THING = 'CUST/SELECT_THING';

let initState = {
    selectThings: {
        helmets: {id: null}
    }
};

export const customizationReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_DATA: return {
            ...state,
            ...action.data
        };

        case SELECT_THING: return {
            ...state,
            selectThings: {...state.selectThings, [action.thingName]: {...action.selectThing}}
        };
        default:
            return state;
    }
};

export const getDataSuccess = (data) => ({type: GET_DATA, data});
export const pushSelectThings = (selectThing, thingName) => ({type: SELECT_THING, selectThing, thingName});

export const getCustomizationData = () => async dispatch => {
    let data = await API.getCustomizationData();
    dispatch( getDataSuccess(data) ) ;
};