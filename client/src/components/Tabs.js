import React, {  useContext }  from 'react';
import {Nav} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';

const Tabs = () => {
    const navigate = useNavigate();
    let { userProfile } = useContext(GlobalContext);
    return (
        <Nav className="tabs" justify variant="pills" defaultActiveKey="link-0">
            <Nav.Item>
                <Nav.Link onClick={() => {
                    if(Object.keys(userProfile).length == 0){
                        navigate("/")
                    }
                    else{
                        navigate("/Dashboard")
                    }
                }} eventKey="link-0">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => navigate("/General")} eventKey="link-1">General</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => navigate("/Business")} eventKey="link-2">Business</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => navigate("/Entertainment")} eventKey="link-3">Entertainment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => navigate("/Health")} eventKey="link-4">Health</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => navigate("/Science")} eventKey="link-5">Science</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => navigate("/Sports")} eventKey="link-6">Sports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => navigate("/Tech")} eventKey="link-7">Technology</Nav.Link>
            </Nav.Item>
      </Nav>
    )
}

export default Tabs;