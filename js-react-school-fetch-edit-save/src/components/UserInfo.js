import React from 'react';

const UserInfo = ({ name, login, company, location, bio, toggleView }) => (
    <div className="user-info">
        <div className="user-info__name">
        <button onClick={toggleView} className="btn btn-link">
            {name}
        </button>
        </div>
        <div className="user-info__login">{login}</div>
        <div className="user-info__company">{company}</div>
        <div className="user-info__location">{location}</div>
        <div className="user-info__bio">
            <p>Bio:</p>
            {bio}
        </div>
    </div>
);

export default UserInfo;
