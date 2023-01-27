export const baseUrl = 'https://api.nomoreparties.co'

export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}
export const getMovies = () => {
    return fetch(`${baseUrl}/beatfilm-movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(checkResponse)
}