'use strict'
const commentsList = document.querySelector('.comments')
const addButton = document.querySelector('.add-form-button')
const inputName = document.querySelector('.add-form-name')
const inputComment = document.querySelector('.add-form-text')

const comments = [
    {
        name: 'Глеб Фокин',
        date: '12.02.22 12:18',
        text: 'Это будет первый комментарий на этой странице',
        isLiked: false,
        likes: 23,
    },
    {
        name: 'Варвара Н.',
        date: '13.02.22 19:22',
        text: 'Мне нравится как оформлена эта страница! ❤',
        isLiked: true,
        likes: 783,
    },
]

const initClickLike = () => {
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

const initClickComment = () => {
    const commentCards = document.querySelectorAll('.comment')

    for (const commentCard of commentCards) {
        commentCard.addEventListener('click', () => {
            const comment = comments[commentCard.dataset.index]

            inputComment.value = `>>${comment.name}, "${comment.text}"\n`
        })
    }
}

const renderComments = () => {
    commentsList.innerHTML = comments
        .map((comment, index) => {
            return `<li data-index="${index}"  class="comment">
        <div class="comment-header">
          <div>${comment.name}</div>
          <div>12.02.22 12:18</div>
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
}

renderComments()

const myDate = new Date()
const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
]

let day = myDate.getDate()
let month = months[myDate.getMonth()]
let year = myDate.getFullYear()
let hour = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()
let minuts =
    myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()

const currentDate = `${day}.${month}.${year} ${hour}:${minuts}`

addButton.addEventListener('click', () => {
    inputName.classList.remove('error')
    inputComment.classList.remove('error')

    if (inputName.value === '') {
        inputName.classList.add('error')
        inputComment.classList.add('error')
        return
    }

    comments.push({
        name: inputName.value.replaceAll('<', '&lt;'),
        date: currentDate,
        text: inputComment.value.replaceAll('<', '&lt;'),
        isLiked: false,
        likes: 0,
    })

    inputName.value = ''
    inputComment.value = ''

    renderComments()
})
