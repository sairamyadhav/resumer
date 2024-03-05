import { useState, useContext, useEffect } from 'react';
import { authContext } from '../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const { user, login, logout } = useContext(authContext);

    useEffect(() => {
        logout();
    })

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setLoginForm((form) => ({...form, [e.target.name]: e.target.value}))
    }

    const handleSubmit = () => {
        console.log(loginForm);
        fetch("http://127.0.0.1:8000/api/login/", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(loginForm)
        }).then((res) => res.json()).then((data) => {
            const userData = {
                username: loginForm.username,
                isLogin: true,
            }
            login(userData);
            navigate('/');
        }).catch((error) => {
            console.log(error);
            alert(error);
        })
    }

  return (
    <div>
        <form>
            <input placeholder='enter username' name='username' value={loginForm.username} onChange={(e) => handleChange(e)} />
            <input placeholder='enter password' name='password' value={loginForm.password} onChange={(e) => handleChange(e)} type='password' />
            <button type='button' onClick={handleSubmit}>login</button>
        </form>
    </div>
  )
}

export default Login;