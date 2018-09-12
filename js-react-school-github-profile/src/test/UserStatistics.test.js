import React from 'react';
import renderer from 'react-test-renderer';
import UserStatistics from '../components/UserStatistics';
import userJson from '../data/user.json';

describe('UserStatistics', () => {
    it('should be rendered without errors without props', () => {
        const html = renderer.create(<UserStatistics />).toJSON();
        expect(html).toMatchSnapshot();
    });

    it('should be rendered without errors with a valid book info', () => {
        const html = renderer.create(
            <UserStatistics
                {...userJson}
                publockRepos={userJson.public_repos}
            />
        ).toJSON();
        expect(html).toMatchSnapshot();
    });
});
