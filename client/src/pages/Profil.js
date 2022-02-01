import React, { useContext } from 'react';
import Log from "../components/Log";
import { UidContext } from "../components/AppContext"
import Home from './Home';

const Profil = () => {
    const uid = useContext(UidContext);

    return (
        <div className= "profil-page">
            {uid? (
                <Home />
            ): (
            <div className="log-container">
            <Log signin={false} signup={true}/>
                <img src="./img/log.svg" alt="img-log" />
            </div>
            )}
        </div>
    );
};

export default Profil;