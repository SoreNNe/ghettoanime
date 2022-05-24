import React from "react"
import axios from "axios"
import { Link, NavLink } from 'react-router-dom';

export default function LogLoginForm() {
    const [formData, setFormData] = React.useState(
        {name: "", password: ""}
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
            <button className="forms--inputs" onClick={handleLogin}>SIGN IN</button>
            <p>Don't have account yet? <Link to="/SignUp">SIGN UP HERE</Link></p>
        </form>
        
        </>
    )
}
