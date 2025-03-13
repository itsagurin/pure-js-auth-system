export function setAuthData(email, password, rememberMe) {
    const minutes = rememberMe ? 20 : 5;
    const expireAt = Date.now() + minutes * 60 * 1000;
    const loginData = { email, password, rememberMe, expireAt };
    localStorage.setItem('loginData', JSON.stringify(loginData));
}

export function getAuthData() {
    const data = localStorage.getItem('loginData');
    if (!data) {
        return null;
    }
    const loginData = JSON.parse(data);
    if (Date.now() > loginData.expireAt) {
        localStorage.removeItem('loginData');
        return null;
    }
    return loginData;
}

export function isAuthenticated() {
    return getAuthData() !== null;
}