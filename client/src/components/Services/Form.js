import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateExchange, updateYoutubeStatus, updateActivity, updateAge} from "../../actions/user.actions";
import { updateWeather } from "../../actions/user.actions";
import { updateCity } from "../../actions/user.actions";

const Form = () => {
    const userData = useSelector((state) => state.userReducer);
    const [value, setValue] = useState("");
    const weather = true;
    const exchange = true;
    const youtubeStatus = true;
    const activity = true;
    const age = true;

    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    
    const handle = (e) => {
        console.log(value);
        if (value === 'weather') {
            dispatch(updateCity(userData._id, city));
            return dispatch(updateWeather(userData._id, weather));
        }
        else if (value === 'exchange')
            return dispatch(updateExchange(userData._id, exchange));
        else if (value === 'youtube') {
            return dispatch(updateYoutubeStatus(userData._id, youtubeStatus));
        }
        else if (value === 'activity') {
            return dispatch(updateActivity(userData._id, activity));
        }
        else if (value === 'age') {
            return dispatch(updateAge(userData._id, age));
        }
        else return;
    };

    return (
        <div class="serviceFormdiv">
            <form action="" class="serviceForm" onSubmit={ handle } id="sign-up-form">
                <label htmlFor="services" class="labelform">Choose a Service :</label>
                <br/>
                <select value={value} onChange={ (e) => setValue(e.target.value)}>
                    <option value="">--Please choose an option--</option>
                    <option value="weather">Weather</option>
                    <option value="exchange">Exchange</option>
                    <option value="youtube">Bitcoin rate</option>
                    <option value="activity">Activity to do today</option>
                    <option value="age">Predict age with a name</option>
                </select>
                {value==="weather" ?(
                    <div>
                        <label htmlFor="services" class="labelform">Choose a city :</label>
                        <br/>
                        <input type="text" name="cityname" onChange={(e) => setCity(e.target.value)} value={city}></input>
                    </div>
                    ) : <div></div>
                }
                <input type="submit" value="Ajouter" class/>
            </form>
        </div>
    );
};

export default Form;