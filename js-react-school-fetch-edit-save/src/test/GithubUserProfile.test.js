import React from 'react';
import renderer from 'react-test-renderer';
import GitHubUserProfile from '../components/GitHubUserProfile';
import userJson from '../data/user.json';


describe('GitHubUserProfile', () => {
  it('should be rendered without errors without props', () => {
    const html = renderer.create(<GitHubUserProfile />).toJSON();
    expect(html).toMatchSnapshot();
  });

  it('should be rendered without errors with a valid book info', () => {
    const html = renderer.create(
      <GitHubUserProfile {...userJson} />
    ).toJSON();
    expect(html).toMatchSnapshot();
  });
});
