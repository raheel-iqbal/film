import { authHeader } from '../_helpers';

export const filmService = {
    getAll,
    addFilm,
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${API_URL}films`, requestOptions).then(handleResponse);
}

function addFilm(filmData) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: filmData
    };

    return fetch(`${API_URL}add-films`, requestOptions).then(handleResponse);
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

            console.log(JSON.parse(data))

            return data;
        },
        // LOGIN ERROR
        (error) => {
            if(error.response.data.message == "Unauthenticated.") {
                history.push("/login");
            }
        });
}
