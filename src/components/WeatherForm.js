import React, { useState } from 'react';
import PropTypes from 'prop-types';

function WeatherForm({ onNewLocation }) {
    const [location, setLocation] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        setLocation('');

        if (location.length > 0) onNewLocation({ city: location });
    };

    const handleChange = (e) => {
        const location = e.target.value;
        setLocation(location);
    };
    return (
        <div>
            <div className="wave">
                <span className="--center_head:1">W</span>
                <span className="--center_head:2">E</span>
                <span className="--center_head:3">A</span>
                <span className="--center_head:4">T</span>
                <span className="--center_head:5">H</span>
                <span className="--center_head:6">E</span>
                <span className="--center_head:7">R</span>
            </div>
            <form className="search_box" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    value={location}
                    onChange={handleChange}
                    placeholder="Enter a location"
                />
                <button className="btn">Get weather</button>
            </form>
        </div>
    );
}

WeatherForm.propTypes = {
    onNewLocation: PropTypes.func.isRequired,
};

export default WeatherForm;
