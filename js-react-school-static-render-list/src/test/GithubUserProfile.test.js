import React from 'react';
import renderer from 'react-test-renderer';

import GitHubUserProfile from '../components/GitHubUserProfile';

import usersList from '../data/user_list';

describe('GitHubUserProfile', () => {
  it('should be rendered without errors without props', () => {
    const html = renderer.create(<GitHubUserProfile />).toJSON();
    expect(html).toMatchSnapshot();
  });

  it('should be rendered without errors with a valid book info', () => {
    const html = renderer.create(
      <GitHubUserProfile
          avatarUrl={usersList.avatar_url}
          htmlUrl={usersList.html_url}
          siteAdmin={usersList.site_admin}
          login={usersList.login}
      />
    ).toJSON();
    expect(html).toMatchSnapshot();
  });
});
