import React from 'react';


const UserStatistics = ({ publicRepos, followers, following}) => (
    <div className="user-statistics">
        <span>Statistics:</span>
        <div className="user-statistics__repozitories">
            Repositories:
            {' '}
            {publicRepos}
        </div>
        <div className="user-statistics__following">
            Following:
            {' '}
            {following}
        </div>
        <div className="user-statistics__followers">
            Followers:
            {' '}
            {followers}
        </div>
    </div>
);

export default UserStatistics;
