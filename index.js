import { getComments } from './modules/api.js'
import { loader, updateComments } from './modules/comments.js'
import { initAddComment } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'
initAddComment()
loader('show')

getComments().then((data) => {
    updateComments(data.comments)
    renderComments()
    loader('hide')
})
