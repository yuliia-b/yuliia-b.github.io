import React from 'react';

import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import UserStatistics from './UserStatistics';

const GitHubUserProfile = props => {
    const {
        avatar_url,
        name,
        login,
        company,
        location,
        public_repos,
        followers,
        following,
        bio,
        toggleView
    } = props;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="user-profile">
                        <UserAvatar
                            avatarUrl={avatar_url}
                        />
                        <UserInfo
                            name={name}
                            login={login}
                            company={company}
                            location={location}
                            bio={bio}
                            toggleView={toggleView}
                        />
                        <UserStatistics
                            publicRepos={public_repos}
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
