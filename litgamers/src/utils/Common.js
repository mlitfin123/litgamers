// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

export const getTokenForGame = () => {
    return sessionStorage.getItem('token') || null || alert("Please Login");
}

// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('balance');
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "pass=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// set the token and user from the session storage
export const setUserSession = (token, user, pass) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    function createUserCookie(key, value) {
        let cookie = escape(key) + "=" + escape(value) + ";" + "path=/";
        document.cookie = cookie;
    }
    user = JSON.stringify(user);
    user = user.replace(/[{("")}]/g, '')
    createUserCookie('user', user);
    function createPassCookie(key, value) {
        let cookie = escape(key) + "=" + escape(value) + ";" + "path=/";
        document.cookie = cookie;
    }
    pass = JSON.stringify(pass);
    pass = pass.replace(/[{("")}]/g, '')
    createPassCookie('pass', pass);
}