export const userFetchProfile = username => (
    fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(user => ({ ...user }))
);

export const updateUserInfo = data => ({ userInfo }) => ({ 
    user: { ...userInfo, ...data }
});
