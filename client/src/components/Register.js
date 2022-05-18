import React, {useState, useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PasswordChecklist from "react-password-checklist";
import { GlobalContext } from '../Context/GlobalState';

const Register = () => {
    const [password, setPd] = useState("")
    const [passwordAgain, setPdAgain] = useState("")
    const [username, setUn] = useState("")
    const navigate = useNavigate();

    const {addUser} = useContext(GlobalContext);


    const onSubmit = async e => {
        e.preventDefault();
        const newUser = {
            username,
            password
        }
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify(newUser);

        try{    
            const res = await axios.post('http://localhost:8080/signup', body, config);

            axios.interceptors.response.use(response => {

            }, error => {
                if (error.response.status === 400) {
                    alert("Duplicate username!")
                }
                return Promise.reject(error);
            });

            if (res.status === 200) {
                addUser(newUser);
                navigate('/Login');
            }
        } catch (err) {
        }
    }

    return (
        <section className="container">
            <h1 className="large text-danger">Register</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="username" name="username" 
                        onChange={(e) => {
                            setUn(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password"
                        onChange={(e) => {
                            setPd(e.target.value);
                        }}
                        required
                    />
                    <br></br>
                    <input type="password" placeholder="Password" name="passwordAgain"
                        onChange={(e) => {
                            setPdAgain(e.target.value);
                        }}
                        required
                    />
            <PasswordChecklist
				rules={["minLength","specialChar","number","capital","lowercase","match"]}
				minLength={8}
				value={password}
                valueAgain={passwordAgain}
				onChange={(isValid) => {}}
			/>  
                </div>

                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login"> Sign In</Link>
            </p>
        </section>
    )
}

export default Register