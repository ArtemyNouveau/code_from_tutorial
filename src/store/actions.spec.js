import * as Actions from './actions'
import * as ActionTypes from "./actionTypes";


describe('action creators', () => {
    let dispatch;

    beforeEach(() => {
        dispatch = jest.fn(action => action)
    })

    describe('login action creators', () => {
        it('login should be called', () => {
            Actions.login("sample@samle.ru", "password")(dispatch)

            expect(dispatch).toBeCalled()
        })

        it('dispatch should be called 2 times', function () {
            return Actions
                .login("sample@samle.ru", "password")(dispatch)
                .then(() => {
                    expect(dispatch).toBeCalledTimes(2)
                })
        });

        it('dispatch should receive userData', () => {
            return Actions
                .login("sample@samle.ru", "password")(dispatch)
                .then(() => {
                    expect(dispatch.mock.results[1].value).toEqual({
                        type: ActionTypes.LOGIN_SUCCESS,
                        userName: "user",
                        email: "sample@samle.ru",
                    })
                })
        })
    })
})
