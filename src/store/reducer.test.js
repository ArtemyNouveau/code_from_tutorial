import reducer, {initialState} from './reducer.js'
import * as ActionTypes from './actionTypes'

describe('state', () => {
    let state

    beforeEach(() => {
        state = {
            ...initialState,
            user: {
                ...initialState.user
            }
        }
    })

    it('state should init right', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })


    describe('user actions', () => {
        it('login should start', () => {
            const action = {
                type: ActionTypes.LOGIN_START
            }

            state.isLoading = true
            expect(reducer(undefined, action)).toEqual(state)
        })

        it('login success should work right', () => {
            const action = {
                type: ActionTypes.LOGIN_SUCCESS,
                userName: "user",
                email: "email@mail"
            }

            expect(reducer(undefined, action)).toEqual({
                ...state,
                isLoading: false,
                isAuth: true,
                user: {
                    userName: action.userName,
                    email: action.email,
                },
            })
        })

        it('login should fail right', () => {
            const action = {
                type: ActionTypes.LOGIN_FAIL,
                error: new Error('err')
            }

            state.isLoading = true
            expect(reducer(state, action)).toEqual({
                ...state,
                isLoading: false,
                error: action.error
            })
        })

        it('logout', () => {
            const action = {
                type: ActionTypes.LOGOUT,
            }

            state.isAuth = true
            state.user = {
                userName: "action.userName",
                email: "action.email",
            }
            state.goods = [1, 3, 4]
            state.error = "error"

            expect(reducer(state, action)).toEqual(initialState)
        })
    })

    describe('goods actions', () => {
        beforeEach(() => {
            state.user = {
                userName: "username",
                email: "sampe@mail"
            }
            state.isAuth = true
        })

        it('should start fetch', () => {
            const action = {
                type: ActionTypes.FETCH_GOODS_START,
            }

            expect(reducer(state, action).isLoading).toBeTruthy()
        })

        it('fetch should not change user', () => {
            const action = {
                type: ActionTypes.FETCH_GOODS_START,
            }

            expect(reducer(state, action).user).toBe(state.user)
        })

        it('fetch should not change goods', () => {
            const action = {
                type: ActionTypes.FETCH_GOODS_START,
            }

            expect(reducer(state, action).goods).toBe(state.goods)
        })

        it('error should become null', () => {
            const action = {
                type: ActionTypes.FETCH_GOODS_START,
            }

            state.error = new Error()
            expect(reducer(state, action).error).toBeNull()
        })
    })
})
