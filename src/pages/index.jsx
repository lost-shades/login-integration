import {useEffect, useState} from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuthMutation } from '../store/api/apiSlice'
import { setToken, setUserInfo } from '../store/slices/authSlice'



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ login, { isLoading }] = useAuthMutation();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const details = useSelector((state)=>state.auth)
    
    useEffect(() => {
        if (details.username) {
        navigate('/dashboard')
        }
    }, [details, navigate])
  
    
    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'username') {
            setUsername(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault() // I don't what this does
        const payload = {username, password}
        try {
            const res = await login(payload).unwrap()
            console.log(res)
            dispatch(setUserInfo({
                id: res.id,
                username: res.username,
                email: res.email,
                firstName: res.firstName,
                lastName: res.lastName,
                gender: res.gender,
                image: res.image
            }))
            dispatch(setToken({
                accessToken: res.token,
                refreshToken: res.refreshToken
            }))
            // navigate('/dashboard')
        } catch (err) {
            alert(err.data.message)
            console.log(err)
        }

        // login(payload)
        // .unwrap()
        // .then((res) => {
            // dispatch(setUserInfo({
            //     id: res.id,
            //     username: res.username,
            //     email: res.email,
            //     firstName: res.firstName,
            //     lastName: res.lastName,
            //     gender: res.gender,
            //     image: res.image
            // }))
            // dispatch(setToken({
            //     accessToken: res.token,
            //     refreshToken: res.refreshToken
            // }))
        //     navigate('/dashboard')
        // })
        // .catch((err) => {
            // alert(err.data.message)
            // console.log(err)
        // })

    }
  return (
    <div className="wrap">
        <div className="login">
            <h1>Login</h1>
            <form action="/" method='post'>
                <div className="container">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text"
                    value={username} 
                    name="username" 
                    placeholder="Enter username" 
                    onChange={handleChange}
                    required
                    />
                    <label htmlFor="psw">Password</label>
                    <input 
                    type="password"
                    value={password}
                    placeholder='Enter Password'
                    name='password'
                    onChange={handleChange}
                    required 
                    />
                    <button type='submit' onClick={handleClick} disabled={isLoading}>
                        {!isLoading ? 'Login' : 'Loading...'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login