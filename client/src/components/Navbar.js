import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';

const Navbar = () => {
    let {loggedOut} = useContext(GlobalContext);
    let { userProfile } = useContext(GlobalContext);
    let logText

    loggedOut ? logText="Log in" : logText="Log Out"

    const login = () => {
        console.log("logged out should be false");
        loggedOut = false;
        logText = "Log out"
    }
    
    const logout = () => {
        console.log("logged out should be true");
        window.location.reload(false);
        loggedOut = true;
        logText = "Log in"
    }

    return (

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a data-testid="group-name" className="navbar-brand">Donut</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        </div>
            {
                loggedOut ?
                <p /> :
                <a id="team" className="navbar-brand"> Welcome {userProfile[0].username} </a> 
            }
            &nbsp;&nbsp;
            {
                loggedOut ?
                <p /> :
                <button> <Link to="/settings">Setting</Link> </button>  
            }
            &nbsp;&nbsp;
            {
                loggedOut ?
                    <button data-testid="loginBtn" onClick={() => login()}> <Link to="/login">{logText}</Link> </button> :
                    <button onClick={() => logout()}> <Link to="/">{logText}</Link>  </button>
            }
            
            </nav>
    )
}

export default Navbar