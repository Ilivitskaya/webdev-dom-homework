import { renderComments } from './renderComments.js'
import { comments } from './comments.js'
import { currentDate } from './date.js'
import { replaceValues } from './replace.js'

const inputComment = document.querySelector('.add-form-text')

export const initClickLike = () => {
    const likeButtons = document.querySelectorAll('.like-button')

    for (const likeButton of likeButtons) {
        likeButton.addEventListener('click', () => {
            event.stopPropagation()

            const comment = comments[likeButton.dataset.index]

            comment.isLiked ? --comment.likes : ++comment.likes

            comment.isLiked = !comment.isLiked

            renderComments()
        })
    }
}

export const initClickComment = () => {
    const commentCards = document.querySelectorAll('.comment')

    for (const commentCard of commentCards) {
        commentCard.addEventListener('click', () => {
            const comment = comments[commentCard.dataset.index]

            inputComment.value = `>>${comment.name}, "${comment.text}"\n`
        })
    }
}

export const initAddComment = () => {
    const addButton = document.querySelector('.add-form-button')

    const inputName = document.querySelector('.add-form-name')
    const inputComment = document.querySelector('.add-form-text')

    addButton.addEventListener('click', () => {
        inputName.classList.remove('error')

        inputComment.classList.remove('error')

        if (inputName.value === '') {
            inputName.classList.add('error')
            inputComment.classList.add('error')
            return
        }

        comments.push({
            name: replaceValues(inputName.value),
            date: currentDate,
            text: replaceValues(inputComment.value),
            isLiked: false,
            likes: 0,
        })

        inputName.value = ''
        inputComment.value = ''

        renderComments()
    })
}
