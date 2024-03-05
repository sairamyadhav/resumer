import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const navigate = useNavigate();

    const [signinForm, setSigninForm] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setSigninForm((form) => ({...form, [e.target.name]: e.target.value}))
    }

    const handleSubmit = () => {
        console.log(signinForm);
        fetch("http://127.0.0.1:8000/api/signin/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signinForm)
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            navigate('/login');
        }).catch((error) => {
            console.log(error);
            alert(error);
        })
    }

  return (
    <div>
        <form>
            <input placeholder='enter username' name='username'  value={signinForm.username} onChange={(e) => handleChange(e)} />
            <input placeholder='enter email' name='email' type='email'  value={signinForm.email} onChange={(e) => handleChange(e)} />
            <input placeholder='enter password' name='password' type='password'  value={signinForm.password} onChange={(e) => handleChange(e)} />
            <button type='button' onClick={handleSubmit} >submit</button>
        </form>
    </div>
  )
}

export default SignIn;