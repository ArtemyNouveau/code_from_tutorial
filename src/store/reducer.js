import * as ActionTypes from './actionTypes'

export const initialState = {
    isLoading: false,
    isAuth: false,
    user: {
        userName: "",
        email: "",
    },
    goods: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_START:
        case ActionTypes.FETCH_GOODS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: action.userName,
                    email: action.email
                },
                isAuth: true,
                isLoading: false,
            }
        case ActionTypes.LOGOUT:
            return {
                ...initialState
            }
        case ActionTypes.FETCH_GOODS_SUCCESS:
            return {
                ...state,
                goods: [...state.goods, ...action.goods],
                isLoading: false,
            }
        case ActionTypes.LOGIN_FAIL:
        case ActionTypes.FETCH_GOODS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state
    }
}
