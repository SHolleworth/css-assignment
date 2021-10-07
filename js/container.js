const container = document.getElementById('container')
let activeFormat = ''

export const clearContainerLayout = () => {
    switch(activeFormat.toLocaleLowerCase()) {
        case 'news freak':
            container.classList.remove('container--news-freak-layout')
            break
        case 'cockpit':
            container.classList.remove('container--cockpit-layout')
            break
        default:
            container.classList.remove('container--standard-layout')

    }
}

export const clearContainerContent = () => {
    Array.from(container.children).forEach((feed) => {
        container.removeChild(feed)
    })
}

export const setContainerLayout = (formatName) => {
    switch(formatName) {
        case 'news freak':
            container.classList.add('container--news-freak-layout')
            break
        case 'cockpit':
            container.classList.add('container--cockpit-layout')
            break
        default:
            container.classList.add('container--standard-layout')
    }
}

export const setActiveFormat = (formatName) => {
    activeFormat = formatName
}