import {signIn, fetchGoods} from "../mock";
import * as ActionTypes from './actionTypes'

const loginSuccess = (userData) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        userName: userData.userName,
        email: userData.email,
    }
}

const loginFail = (error) => {
    return {
        type: ActionTypes.LOGIN_FAIL,
        error: error
    }
}


export const login = (email, password) => {
    return (dispatch) => {
        dispatch({type: ActionTypes.LOGIN_START})
        return signIn(email, password).then(userData => {
            dispatch(loginSuccess(userData))
        }).catch((error) => {
            dispatch(loginFail(error))
        })
    }
}

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT
    }
}

export const fetchProducts = (isLogin) => {
    return (dispatch) => {
        dispatch({type: ActionTypes.FETCH_GOODS_START})
        fetchGoods(isLogin).then(data => {
            dispatch({
                type: ActionTypes.FETCH_GOODS_SUCCESS,
                goods: data.goods
            })
        }).catch((error) => {
            dispatch({
                type: ActionTypes.FETCH_GOODS_FAIL,
                error: error
            })
        })
    }
}

