import React from 'react';

const UserInfo = ({ name, login, company, location }) => (
    <div className="user-info">
        <div className="user-info__name">{name}</div>
        <div className="user-info__login">{login}</div>
        <div className="user-info__company">{company}</div>
        <div className="user-info__location">{location}</div>
    </div>
);

export default UserInfo;
