import React from "react"
import axios from "axios"
import { Link, NavLink } from 'react-router-dom';

export default function LoginForm() {
    const [formData, setFormData] = React.useState(
        {name: "", password: "", mail: ""}
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleLogin(event){
        event.preventDefault()
        console.log(formData)
        axios.post("http://localhost:8080/api/v1/user", {
            "name": formData.name,
            "mail": formData.mail,
            "password": formData.password,
            
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem('accessToken', response.accessToken)
          window.location.href = '/';
        });
      }
    
    return (
        <>
        <form className="loginForm--box">
            <input
                className="forms--inputs"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                name="name"
                value={formData.name}
            />
            <input
                className="forms--inputs"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
            <input
                className="forms--inputs"
                type="text"
                placeholder="Mail"
                onChange={handleChange}
                name="mail"
                value={formData.mail}
            />
            <button className="forms--inputs" onClick={handleLogin}>SIGN UP</button>
        </form>
        <p>Already have an account? <Link to="/SignIn">SIGN IN HERE</Link></p>
        </>
    )
}
