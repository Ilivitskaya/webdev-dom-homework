export let comments = []

export const updateComments = (newComments) => {
    comments = newComments
}

export const loader = (state) => {
    const loaderElement = document.querySelector('.loader')

    if (state === 'show') {
        loaderElement.style.display = 'block'
    } else {
        loaderElement.style.display = 'none'
    }
}
