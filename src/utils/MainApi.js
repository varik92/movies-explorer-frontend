export const baseUrl = 'https://movies-explorer-api-blush.vercel.app'
/*export const baseUrl = 'http://localhost:3000'*/
export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}

export const register = (name, email, password) => {
    return fetch(`${baseUrl}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    })
        .then(checkResponse)
};

export const authorize = (email, password) => {
    return fetch(`${baseUrl}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(checkResponse)
};

export const getUserInfo = () => {
    return fetch(`${baseUrl}/users/me`, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(checkResponse)
}

export const editUserInfo = (data) => {
    return fetch(`${baseUrl}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email
        })
    }).then(checkResponse)
}

export const logout = () => {
    return fetch(`${baseUrl}/signout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(checkResponse);
}

export const saveMovie = (movieData) => {
    return fetch(`${baseUrl}/movies`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            country: movieData.country,
            director: movieData.director,
            duration: movieData.duration,
            year: movieData.year,
            description: movieData.description,
            image: `https://api.nomoreparties.co${movieData.image.url}`,
            trailerLink: movieData.trailerLink,
            thumbnail: `https://api.nomoreparties.co${movieData.image.formats.thumbnail.url}`,
            movieId: movieData.id.toString(),
            nameRU: movieData.nameRU,
            nameEN: movieData.nameEN,
        }),
    })
        .then(checkResponse);
}

export const getSavedMovies = () => {
    return fetch(`${baseUrl}/movies`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(checkResponse);
}

export const deleteMovie = (id) => {
    return fetch(`${baseUrl}/movies/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(checkResponse);
}