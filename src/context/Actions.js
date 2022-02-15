export const LoginStart = () => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE"
})

export const Logout = () => ({
    type: "LOGOUT"
})

export const userUpdate = (user) => ({
    type: "USER_UPDATE",
    payload: user,
})

export const userDelete = () => ({
    type: "USER_DELETE"
})