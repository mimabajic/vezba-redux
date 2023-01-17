import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../app/store/feature/userSlice';


const Login = () => {

    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const dispatch = useDispatch();

    const submitHendler = (e) => {
        e.preventDefault()
        dispatch(login({email:email, username:username}))
    }

    return (
        <div className="login">
            <form onSubmit={(e)=>submitHendler(e)}>
                <h1>Login here</h1>

                <input
                    type="email"
                    palceholder="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}>
                </input>

                <input
                    type="username"
                    placeholder="username"
                    value={username} onChange={(e) => setUserName(e.target.value)}>
                </input>

                <button type="submit" className="submit_btn">Submit</button>


            </form>

        </div>
    )
}

export default Login
