import {
  GET_USER, 
  UPDATE_WEATHER,
  UPDATE_EXCHANGE,
  UPDATE_CITY,
  UPDATE_YOUTUBE,
  UPDATE_YOUTUBELINK,
  UPDATE_ACTIVITY,
  UPDATE_AGE
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPDATE_WEATHER:
      return {
          ...state,
          weather: action.payload,
      };
    case UPDATE_EXCHANGE:
        return {
          ...state,
          exchange: action.payload,
      };
    case UPDATE_CITY:
        return {
          ...state,
          city: action.payload,
      };
    case UPDATE_YOUTUBE:
        return {
          ...state,
          youtube: action.payload,
      };
    case UPDATE_YOUTUBELINK:
        return {
          ...state,
          youtubeurl: action.payload,
      };
    case UPDATE_ACTIVITY:
        return {
          ...state,
          acivity: action.payload,
      };
    case UPDATE_AGE:
        return {
          ...state,
          age: action.payload,
      };
    default:
      return state;
  }
}
