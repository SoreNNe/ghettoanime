import React from "react"

export default function LoginForm() {
    const [formData, setFormData] = React.useState(
        {username: "", password: ""}
    )
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                name="firstName"
                value={formData.username}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="lastName"
                value={formData.password}
            />
        </form>
    )
}
