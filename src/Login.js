import { useState } from "react";

const Login = () => {
    const[email] = useState('');
    const[password] = useState('');

    return ( 
        <div className="login">
            <h1>Login to Account</h1>
            <form>
                <label>E-Mail:</label>
                <input 
                type="text"
                required
                value={email}
                />
                <label>Password:</label>
                <input 
                type="text"
                required
                value={password}
                />
                <div className="button">
                    <button className="Submit">Login</button>
                </div>
            </form>
        </div>
    );
}
 
export default Login;