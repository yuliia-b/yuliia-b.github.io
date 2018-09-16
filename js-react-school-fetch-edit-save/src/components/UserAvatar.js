import React from 'react';

const UserAvatar = ({avatarUrl}) => (
    <div className="user-avatar">
        <img src={avatarUrl} alt="User avatar"/>
    </div>
);

export default UserAvatar;
