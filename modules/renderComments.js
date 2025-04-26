import { comments } from './comments.js'
import {
    initClickLike,
    initClickComment,
    initAddComment,
} from './initListeners.js'
import { dateFormatting } from './date.js'

export const renderComments = () => {
    const commentsList = document.querySelector('.comments')

    commentsList.innerHTML = comments
        .map((comment, index) => {
            return `<li data-index="${index}"  class="comment">
        <div class="comment-header">
          <div>${comment.author.name}</div>
          <div>${dateFormatting(new Date(comment.date))}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button data-index="${index}" class="like-button ${comment.isLiked ? '-active-like' : ''}"></button>
          </div>
        </div>
      </li>`
        })
        .join('')

    initClickLike()
    initClickComment()
    initAddComment()
}
