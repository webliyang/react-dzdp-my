import actionType from '../constants/userInfo'

export function login(data){
    return {
        type:actionType.USERINFO_LOGIN,
        data 
    }
}

export function updateCityName(data){
    return {
        type:actionType.UPDATE_CITYNAME,
        data
    }
}
