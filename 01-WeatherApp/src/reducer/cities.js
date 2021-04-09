import {createSelector}  from "reselect";
import {SET_FORECAST_DATA} from "../actions";

export const cities = (state = {},action) =>{

    switch (action.type){
        case SET_FORECAST_DATA:
            const {city,forecastData} = action.payload //destructuring
            return {...state, [city]:{forecastData/*, weather:null*/}}
        default:
            return state;
    }

}
//obtiene el forecastData para esa ciudad
export const getForecastDataFromCities = createSelector((state,city) => state[city] && state[city].forecastData, forecastData=>forecastData)


