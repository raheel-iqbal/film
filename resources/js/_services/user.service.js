import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${API_URL}login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', user);

            return user;
        });
}

function logout() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API_URL}logout`, requestOptions).then((response) => {
            // console.log(response)
            localStorage.removeItem('user');
            window.location.href = "/login";
        },
        // LOGIN ERROR
        (error) => {
            console.log(error)
        });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API_URL}user`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${API_URL}register`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text;
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    },
        // LOGIN ERROR
        (error) => {
            if(error.response.data.message == "Unauthenticated.") {
                history.push("/login");
            }
        });
}
