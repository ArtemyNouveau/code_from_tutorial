const idGenerator = (function* () {
    let id = 0
    while (true)
        yield id++
})()

export const signIn = async (email, password) => {
    if (email === "sample@samle.ru" && password === "password")
        return Promise.resolve({userName: "user", email: "sample@samle.ru"});
    return Promise.reject(new Error("email or password is wrong"))
}

export const fetchGoods = async (isLogin) => {
    if (isLogin)
        return Promise.resolve({
            goods: [
                {
                    id: idGenerator.next().value,
                    productName: "Headphones"
                },
                {
                    id: idGenerator.next().value,
                    productName: "smart watch"
                },
                {
                    id: idGenerator.next().value,
                    productName: "piiiizzzzzaaa"
                },
            ]
        });
    return Promise.reject(new Error("user is not signed in"))
}
