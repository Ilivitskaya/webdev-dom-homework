import { renderComments } from './renderComments.js'
import { getComments, postComment } from './api.js'
import { comments, loader, updateComments } from './comments.js'
import { replaceValues } from './replace.js'

const inputComment = document.querySelector('.add-form-text')

export const initClickLike = () => {
    const likeButtons = document.querySelectorAll('.like-button')

    for (const likeButton of likeButtons) {
        likeButton.addEventListener('click', (event) => {
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

            inputComment.value = `>>${comment.author.name}, "${comment.text}"\n`
        })
    }
}

export const initAddComment = () => {
    const addButton = document.querySelector('.add-form-button')
    const formElement = document.querySelector('.add-form')

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

        loader('show')

        formElement.style.display = 'none'

        postComment(
            replaceValues(inputName.value),
            replaceValues(inputComment.value),
        )
            .then(() => {
                return getComments()
            })
            .then((data) => {
                updateComments(data.comments)
                inputName.value = ''
                inputComment.value = ''
                formElement.style.display = 'flex'
                loader('hide')

                renderComments()
            })
    })
}
