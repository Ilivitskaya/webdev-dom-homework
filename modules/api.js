const host = 'https://wedev-api.sky.pro/api/v1/ilivitskaya'

export const getComments = () => {
    return fetch(host + '/comments').then((response) => {
        return response.json()
    })
}

export const postComment = (name, text) => {
    return fetch(host + '/comments', {
        method: 'POST',
        body: JSON.stringify({
            text: text,
            name: name,
        }),
    }).then(() => {
        return getComments()
    })
}
