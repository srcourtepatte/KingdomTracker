import { useNavigate, Link } from "react-router-dom";

import apiCalls from "../../api";

const Register = ()=>{
    const navigate = useNavigate();

    const handleSubmit = ()=>{
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        apiCalls.register(username, email, password).then((res)=>{
            console.log(document.cookie);
            navigate("/mykingdom");
        }).catch((err)=>{console.log(err);});


    }

    return (
        <div className="signInForm">
            <label className="nameLabel">Welcome!</label>
            <label className="label">Please enter your details to register</label>
            <label className="formLabel">email:</label>
            <input type="email" name="email" id="email" className="textInput" />
            <label className="formLabel">username:</label>
            <input type="text" name="username" id="username" className="textInput" />
            <label className="formLabel">password:</label>
            <input type="password" name="password" id="password" className="textInput"/>
            <input type="button" value="Login" onClick={handleSubmit} className="goodButton"/>
            <p>Or <Link to="/login">CLICK HERE</Link> to Login</p>
        </div>
    );
};

export default Register;