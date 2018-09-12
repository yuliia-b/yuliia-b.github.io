import React from 'react';
import renderer from 'react-test-renderer';
import UserInfo from '../components/UserInfo';
import userJson from '../data/user.json';

describe('UserInfo', () => {
    it('should be rendered without errors without props', () => {
        const html = renderer.create(<UserInfo />).toJSON();
        expect(html).toMatchSnapshot();
    });

    it('should be rendered without errors with a valid book info', () => {
        const html = renderer.create(
            <UserInfo {...userJson} />
        ).toJSON();
        expect(html).toMatchSnapshot();
    });
});
