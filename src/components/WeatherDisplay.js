import React from 'react';
import PropTypes from 'prop-types';

function WeatherDisplay({ data }) {
    return (
        <div className="body">
            <h4>{data.name}</h4>
            <div className="row1">
                <div className="main">
                    <div>
                        <span className="temperature">{data.main.temp}</span>{' '}
                        <span className="deg">&deg;C</span>
                    </div>

                </div>
                <div className="desc">{data.weather[0].description}</div>
                <div className="feels_like">Feels like: {data.main.feels_like} &deg;C</div>
                <div className="max-min">
                    <div className="min">Min: {data.main.temp_min}&deg;C</div>
                    <div className="max">Max: {data.main.temp_max}&deg;C</div>
                </div>
            </div>

            <br />
            <div className="row2">
                <div className="humidity">Humidity: {data.main.humidity}% </div>
                <div className="clouds">Clouds: {data.clouds.all}% </div>
                <div className="wind">
                    Wind: {data.wind.deg}&deg; {data.wind.speed} m/s{' '}
                </div>
                <div className="visibility">Visibility: {data.visibility} km </div>
            </div>
        </div>
    );
}

WeatherDisplay.propTypes = {
    data: PropTypes.object.isRequired,
};

export default WeatherDisplay;
