import React from 'react';
import renderer from 'react-test-renderer';

import UsersList from '../components/UsersList';

import usersList from '../data/user_list';

describe('UsersList', () => {
    it('should be rendered without errors without props', () => {
        const html = renderer.create(<UsersList />).toJSON();
        expect(html).toMatchSnapshot();
    });

    it('should be rendered without errors with a valid book info', () => {
        const html = renderer.create(
            <UsersList {...usersList} />
        ).toJSON();
        expect(html).toMatchSnapshot();
    });
});
