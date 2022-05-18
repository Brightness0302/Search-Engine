import React, {useState, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';


const Login = () => {
    const [password, setPdLog] = useState("")
    const [username, setUnLog] = useState("")
    const navigate = useNavigate();
    const {addUser} = useContext(GlobalContext);

    const onSubmit = async e => {
        e.preventDefault();
        const user = {
            username,
            password
        }
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const body = JSON.stringify(user);
        try {
            const res = await axios.post('http://localhost:8080/signin', body, config);
            addUser(user);
            navigate("/dashboard");

            }
            catch (error) {
                alert("Wrong username/password combination!")
            }
        
       
    }

    return (
        <section className="container"> 
            <h1  className="large text-primary">Sign In</h1>
            <p className="lead"> Sign into Your Account</p>

            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input data-testid="usernameEl" type="text" placeholder="username" name="username"
                        onChange={(e) => {
                            setUnLog(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <input data-testid="passwordEl" type="password" placeholder="Password" name="password"
                        onChange={(e) => {
                            setPdLog(e.target.value);
                        }}
                    />
                </div>
                <input data-testid="loginEl" type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link data-testid="signUpEl" to="/register">Sign Up</Link>
            </p>
        </section>    
    );
}

export default Login