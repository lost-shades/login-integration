import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    "accessToken": null,
    "refreshToken": null,
    "id": null,
    "username": null,   
    "email": null,
    "firstName": null,
    "lastName": null,
    "gender": null,
    "image": null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setToken: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            localStorage.setItem('adaState', JSON.stringify(state))
        },
        setUserInfo: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.username = action.payload.username
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.gender = action.payload.gender
            state.image = action.payload.image
            localStorage.setItem('adaState', JSON.stringify(state))
        },
        logout: (state) => {
            state = initialState
            console.log(state)
            localStorage.removeItem('adaState')
            return state
        }
    },
})


export const { logout, setUserInfo, setToken } = authSlice.actions
