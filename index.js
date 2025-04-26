import { getComments } from './modules/api.js'
//import { postComment } from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments } from './modules/renderComments.js'

getComments().then((data) => {
    updateComments(data.comments)
    renderComments()
})
