import React from 'react';

import GitHubUserProfile from './GitHubUserProfile';

import usersList from '../data/user_list';

const UsersList = () => (
    <div className="users-list users-list--wrap">
        {usersList.map((user) => (
            <GitHubUserProfile
                key={user.id}
                avatarUrl={user.avatar_url}
                login={user.login}
                htmlUrl={user.html_url}
                siteAdmin={user.site_admin}
            />
        ))}
    </div>
);

export default UsersList;
