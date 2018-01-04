import userInfoActionTypes from '../constants/userInfo'

const initialState = {
  
}

export default function userinfo(state=initialState,action){
    switch (action.type){
        case userInfoActionTypes.USERINFO_LOGIN:
            return action.data
        case userInfoActionTypes.UPDATE_CITYNAME:
             return action.data
        default:
             return state
    }
}