import { useNavigate, Link } from "react-router-dom";

import apiCalls from "../../api";
import { useEffect } from "react";

const LoginForm = ()=>{
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;


        apiCalls.login(email, password).then((res)=>{
            navigate("/dashboard");
        }).catch((err) =>{
            alert(err);
            console.log(err);});

    };

    useEffect(()=>{
        document.getElementById("password").addEventListener("keydown", (e)=>{
            if (e.key === 'Enter'){
                handleSubmit();
            }
        });
    });

    return (
        <div className="signInForm">
            <label className="nameLabel">Welcome Back!</label>
            <label className="label">Please enter your details to login</label>
            <label className="formLabel">email:</label>
            <input type="email" name="email" id="email" className="textInput" />
            <label className="formLabel">password:</label>
            <input type="password" name="password" id="password" className="textInput"/>
            <input type="button" value="Login" onClick={handleSubmit} className="goodButton"/>
            <p>Or <Link to="/register">CLICK HERE</Link> to Create an Account</p>
        </div>
    );
};

export default LoginForm;

