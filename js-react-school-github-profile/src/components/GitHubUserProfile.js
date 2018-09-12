import React from 'react';

import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import UserStatistics from './UserStatistics';

const GitHubUserProfile = props => {
    const {
        avatarUrl,
        name,
        login,
        company,
        location,
        publicRepos,
        followers,
        following
    } = props;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="user-profile">
                        <UserAvatar
                            avatarUrl={avatarUrl}
                        />
                        <UserInfo
                            name={name}
                            login={login}
                            company={company}
                            location={location}
                        />
                        <UserStatistics
                            publicRepos={publicRepos}
                            followers={followers}
                            following={following}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GitHubUserProfile;
