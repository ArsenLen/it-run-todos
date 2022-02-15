import React, { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from "axios";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase-config";
// http://localhost:3004/login/
// post
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {dispatch, user} = useContext(Context)

  const handleLogin = async (e) => {
      e.preventDefault()
      dispatch({type: "LOGIN_START"})
      try {
        const data = await signInWithEmailAndPassword(auth, email, password)
        console.log(data)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data.user})
        setEmail("")
        setPassword("")
      } 
      catch (error) {
        console.log(error)
        dispatch({type: "LOGIN_FAILURE"})
      }
  }

  return (
    <div>
        <h2>Авторизоваться</h2>
    <form 
    onSubmit={handleLogin}
    style={{
        "margin" : "auto",
        "width" : "50%",
        "display" : "flex",
        "flexDirection" : "column",
        "flexWrap" : "wrap"
    }}
    >
      <TextField
        value={email}
        type={email}
        onChange={(e) => setEmail(e.target.value)}
        id="post-title"
        label="Введите email"
        variant="outlined"
        className="reg-input"
        required
        style={{
            
        }}
      />
      <TextField
        value={password}
        type={password}
        onChange={(e) => setPassword(e.target.value)}
        id="post-title"
        label="Введите пароль"
        variant="outlined"
        className="reg-input"
        style={{
        }}
        required
      />
       <Button type="submit" variant="contained">Войти</Button>
       <p>Еще не зарегистрированы?</p>
       <Link to="/register" 
       style={{
           "backgroundColor" : "#1976d2",
           "borderRadius" : "5px",
           "height": "40px",
           "color": "white",
           "textDecoration" : "none"
       }}
       >Зарегистрироваться</Link>
    </form>
    {/* <h1>Логин: {user.username}</h1>
    <p>Возраст: {user.age}</p> */}
    </div>
  );
};

export default Login;
