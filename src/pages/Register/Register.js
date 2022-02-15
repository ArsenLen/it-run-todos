import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from "axios";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase-config'

// из чего должна состоять страница регистрации?
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleRegister = async (e) => {
      e.preventDefault()
      createUserWithEmailAndPassword(
          auth,
          email,
          login,
          age,
          password,
          gender
      )
      setOpen(true);
      setEmail("")
      setLogin("")
      setPassword("")
      setAge("")
      setGender("")
  }

  return (
    <form 
    className="reg-form" 
    onSubmit={handleRegister}
    style={{
        "margin" : "auto",
        "width" : "50%",
        "display" : "flex",
        "flexDirection" : "column",
        "flexWrap" : "wrap"
    }}>
        <h2>Регистрация</h2>
      <TextField
        value={email}
        type={email}
        onChange={(e) => setEmail(e.target.value)}
        id="post-title"
        label="Введите email"
        variant="outlined"
        className="reg-input"
        required
      />
      <TextField
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        id="post-title"
        label="Введите логин"
        variant="outlined"
        className="reg-input"
        required
      />
       <TextField
        value={age}
        onChange={(e) => setAge(e.target.value)}
        id="post-title"
        label="Введите ваш возраст"
        variant="outlined"
        className="reg-input"
      />
      <TextField
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        id="post-title"
        label="Ваш пол"
        variant="outlined"
        className="reg-input"
      />
      <TextField
        value={password}
        type={password}
        onChange={(e) => setPassword(e.target.value)}
        id="post-title"
        label="Придумайте пароль"
        variant="outlined"
        className="reg-input"
        required
      />
    <Button type="submit" variant="contained">Зарегистрироваться</Button>
    <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Stack>
    </form>
  );
};

export default Register;

// <input type="text">
// <input type="p, email">
// <input type="checkbox">
// <input type="radio">
// <input type="sumbit">