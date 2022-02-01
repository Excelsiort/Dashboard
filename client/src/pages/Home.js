import React, { useContext, useState, useEffect } from 'react';
import { UidContext } from "../components/AppContext";
import Profil from "./Profil";
import Form from "../components/Services/Form";
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { useSelector } from "react-redux";
import { DataController } from "../components/Services/react-currency-converter/src/components/DataController";
import Geocode from "react-geocode";
import Btc1 from '../components/Btc1';
import Act from '../components/Activities';
import PredictAge from '../components/PredictAge';

const API_KEY  = "5825ee5b731d4b5fed847cafc5a68d78"
const API_ACCESS_KEY = "c45058304c299e348c62b3e8376b183d";
export const API_URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_ACCESS_KEY}`;

const Home = () => {
    const userData = useSelector((state) => state.userReducer);
    const uid = useContext(UidContext);
    const [show, setShow] = useState(false);
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    Geocode.setApiKey('AIzaSyC8x_F0Dp1uKajEn4Q6X18avMG29YrZrvI')

    const addService = () => {
        if (show)
            setShow(false);
        else setShow(true)
    }
    useEffect(() => {
        Geocode.fromAddress(userData.city).then(
            (response) => {
                setLat(response.results[0].geometry.location.lat);
                setLong(response.results[0].geometry.location.lng);
                console.log(long, lat);
            },
            (error) => {
              console.error(error);
            }
        )}
    );
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: API_KEY,
        lat: String(lat),
        lon: String(long),
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });
    const customStyles = {
        fontFamily:  'Helvetica, sans-serif',
        gradientStart:  '#0181C2',
        gradientMid:  '#04A7F9',
        gradientEnd:  '#4BC4F7',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#B5DEF4',
        todayRangeFontColor:  '#B5DEF4',
        todayDescFontColor:  '#B5DEF4',
        todayInfoFontColor:  '#B5DEF4',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#4BC4F7',
    };

    return (
        <div>
            {uid? (
                <div class="spacer">
                    <div class="Bouton-service" onClick={addService} >Ajouter un service</div>
                    {show ? (
                        <div>
                            <div class="close-btn" onClick={addService}>X</div>
                            <Form />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            ): (
            <div className="log-container">
                <Profil />
            </div>
            )}
            <div></div>
            {userData.weather ? (
                <ReactWeather
                theme={customStyles}
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel={userData.city}
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
                />
            ) : (
                <div></div>
            )}
            <div class="service-display">
                <div>
                    {userData.exchange? (
                        <div class="converter">
                            Money converter
                            <DataController url={API_URL} />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <br/>
                {userData.youtube? (
                    <Btc1 />
                ) : (
                    <div></div>
                )}
                {userData.activity? (
                    <Act />
                ) : (
                    <div></div>
                )}
                {userData.age? (
                    <PredictAge />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default Home;
//<iframe width="560" height="315" src="https://www.youtube.com/embed/HDobHQfbRbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
/*<div class="spacer service_layout">
<div class="column first_column">
test
</div>
<div class="column second_column">
test1
</div>
<div class="column third_column">
test2
</div>
</div>*/