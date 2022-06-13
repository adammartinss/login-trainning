export const authHeader = () => {
    const userStr = localStorage.getItem('user');
    let user = null;
    if (userStr) user = JSON.parse(userStr);
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
};
// checks Local Storage for {user} if there is one, with access token return http authorization header. otherwise return empty object.
