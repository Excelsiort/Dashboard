import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_WEATHER = "UPDATE_WEATHER";
export const UPDATE_EXCHANGE = "UPDATE_EXCHANGE";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_YOUTUBE = "UPDATE_YOUTUBE";
export const UPDATE_YOUTUBELINK = "UPDATE_YOUTUBELINK"
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY"
export const UPDATE_AGE= "UPDATE_AGE"


export const getUser = (uid) => {
    return (dispatch) => {
      return axios
        .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
        .then((res) => {
          dispatch({ type: GET_USER, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
};

export const updateWeather = (userId, weather) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
      data: { weather },
    })
      .then((res) => {
        dispatch({ type: UPDATE_WEATHER, payload: weather });
      })
      .catch((err) => console.log(err));
  };
};

export const updateExchange = (userId, exchange) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/exchange/` + userId,
      data: { exchange },
    })
      .then((res) => {
        dispatch({ type: UPDATE_EXCHANGE, payload: exchange });
      })
      .catch((err) => console.log(err));
  };
};

export const updateCity = (userId, city) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/city/` + userId,
      data: { city },
    })
      .then((res) => {
        dispatch({ type: UPDATE_CITY, payload: city });
      })
      .catch((err) => console.log(err));
  };
};

export const updateYoutubeStatus = (userId, youtube) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/youtube/` + userId,
      data: { youtube },
    })
      .then((res) => {
        dispatch({ type: UPDATE_YOUTUBE, payload: youtube });
      })
      .catch((err) => console.log(err));
  };
};

export const updateActivity = (userId, activity) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/activity/` + userId,
      data: { activity },
    })
      .then((res) => {
        dispatch({ type: UPDATE_ACTIVITY, payload: activity });
      })
      .catch((err) => console.log(err));
  };
};

export const updateAge= (userId, age) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/age/` + userId,
      data: { age },
    })
      .then((res) => {
        dispatch({ type: UPDATE_AGE, payload: age });
      })
      .catch((err) => console.log(err));
  };
};

export const updateYoutubeUrl= (userId, youtubeUrl) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/youtube/` + userId,
      data: { youtubeUrl },
    })
      .then((res) => {
        dispatch({ type: UPDATE_YOUTUBELINK, payload: youtubeUrl });
      })
      .catch((err) => console.log(err));
  };
};