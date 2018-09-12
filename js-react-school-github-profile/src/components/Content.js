import React from 'react';

import GitHubUserProfile from './GitHubUserProfile';

import userJsonData from '../data/user.json';

const {
    avatar_url,
    name,
    login,
    company,
    location,
    public_repos,
    followers,
    following
} = userJsonData;

const Content = () => (
       <GitHubUserProfile
           className="user-profile"
           name={name}
           login={login}
           company={company}
           location={location}
           followers={followers}
           following={following}
           avatarUrl={avatar_url}
           publicRepos={public_repos}
       />
);

export default Content;
