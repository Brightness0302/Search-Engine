import React, {Fragment, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';

const Setting = () => {
    const [isGeneral, setisGeneral] = useState(false);
    const [isBusiness, setisBusiness] = useState(false);
    const [isEntertainment, setisEntertainment] = useState(false);
    const [isHealth, setisHealth] = useState(false);
    const [isScience, setisScience] = useState(false);
    const [isSports, setisSports] = useState(false);
    const [isTech, setisTech] = useState(false);

    const { userProfile } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        //initialize checkboxes with values from database
        let data = {
            username: userProfile[0].username
        }
        axios.post('http://localhost:8080/getsetting', data)
        .then(res => {
            setisGeneral(res.data[0])
            setisBusiness(res.data[1])
            setisEntertainment(res.data[2])
            setisHealth(res.data[3])
            setisScience(res.data[4])
            setisSports(res.data[5])
            setisTech(res.data[6])
        });
    },[]);

    const submitCHanges = () => {
        if(!(isGeneral || isBusiness || isEntertainment || isHealth || isScience || isSports || isTech) ){
            alert("At least one setting should be choosed");
            return;
        }
        //update the settings in the database using API implemented on the backend
        let arr = [];
        arr.push(+isGeneral);
        arr.push(+isBusiness);
        arr.push(+isEntertainment);
        arr.push(+isHealth);
        arr.push(+isScience);
        arr.push(+isSports);
        arr.push(+isTech);
        let data = {
          check: arr.toString(),
          username: userProfile[0].username
        };
        axios.post('http://localhost:8080/setting', data)
        .then(res => console.log(res.data));
        navigate('/dashboard');
    }

    const cancelCHanges = () => {
        navigate('/dashboard');
    }

    return (
        <Fragment>
            <button className='settings-btn'>Settings</button>
            <div className='settings'>
                <h4>Choose your area of interest</h4>
                <input type="checkbox" id="general" name="General" value="general" onChange={(e) => setisGeneral(!isGeneral)} checked={isGeneral}
                data-testid="item1"/> 
                <label> General </label>

                <input type="checkbox" id="business" name="Business" value="business" onChange={(e) => setisBusiness(!isBusiness)} checked={isBusiness}
                data-testid="item2"/> 
                <label> Business </label>

                <input type="checkbox" id="entertainment" name="Entertainment" value="entertainment" onChange={(e) => setisEntertainment(!isEntertainment)} checked={isEntertainment}
                data-testid="item3"/> 
                <label> Entertainment </label>

                <input type="checkbox" id="health" name="Health" value="health" onChange={(e) => setisHealth(!isHealth)} checked={isHealth}  
                data-testid="item4"/> 
                <label> Health </label>

                <input type="checkbox" id="science" name="science" value="science" onChange={(e) => setisScience(!isScience)} checked={isScience} 
                data-testid="item5"/> 
                <label> Science </label>

                <input type="checkbox" id="sports" name="sports" value="sports" onChange={(e) => setisSports(!isSports)} checked={isSports}
                  data-testid="item6"/> 
                <label> Sports </label>

                <input type="checkbox" id="tech" name="tech" value="tech" onChange={(e) => setisTech(!isTech)} checked={isTech}
                  data-testid="item7"/> 
                <label> Technology </label>
                <br/>
                <button className='cancel'  onClick={() => cancelCHanges()}>Cancel</button>
                <button className='ok' onClick={() => submitCHanges()}>Ok</button>
            </div>
            
        </Fragment>
         
    )
}

export default Setting