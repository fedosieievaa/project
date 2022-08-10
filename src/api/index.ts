export const api = {
    get,
    post,
    put,
    delete: _delete,
};

const baseUrl = process.env.REACT_APP_DATABASE_URL || '';

function get(url: string) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`${baseUrl}${url}`, requestOptions).then(handleResponse);
}

function post(url: string, body: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };
    return fetch(`${baseUrl}${url}`, requestOptions).then(handleResponse);
}

function put(url: string, body: any) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };
    return fetch(`${baseUrl}${url}`, requestOptions).then(handleResponse);
}

function _delete(url: string) {
    const requestOptions = {
        method: 'DELETE',
    };
    return fetch(`${baseUrl}${url}`, requestOptions).then(handleResponse);
}

function handleResponse(response: any) {
    return response.json().then((res: any) => {
        return res;
    });
}
