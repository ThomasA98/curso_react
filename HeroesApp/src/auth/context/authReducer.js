import { typesAuth } from "../types/types";

const stateDefault = {
    logged: false,
    nameUser: ''
};

const actionDefault = { 
    type: '',
    payload: {
        nameUser: ''
    }
};

export const authReducer = (
    state = stateDefault,
    action = actionDefault
) => {
    
    switch (action.type) {
        case typesAuth.login:
            return {
                ...state,
                ...action.payload,
                logged: true,
            }

        case typesAuth.logout:
            return stateDefault;
    
        default:
            return state;
    }

};