import { updateComments } from './modules/comments.js'
import { renderComments } from './modules/renderComments.js'

//renderComments()

fetch('https://wedev-api.sky.pro/api/v1/ilivitskaya/comments')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateComments(data.comments)
        renderComments()
    })
