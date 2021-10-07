import { 
    generateLargePanelFeed, 
    generateSmallPanelFeed, 
    generateSmallFeedWithLargePanels 
} from "./panels.js"

export const renderElClassico = () => {
    generateSmallPanelFeed()
    generateLargePanelFeed()
}

export const renderFrontHands = () => {
    generateSmallPanelFeed()
    generateLargePanelFeed()
    generateSmallPanelFeed()
}

export const renderNewsFreak = () => {
    generateSmallPanelFeed(5)
    //container.classList.add('container--news-freak-layout')
}

export const renderLeftHand = () => {
    generateLargePanelFeed()
    generateSmallPanelFeed()
}

export const renderDesignGeek = () => {
    generateLargePanelFeed()
}

export const renderCrossEyed = () => {
    generateLargePanelFeed(2)
}

export const renderCockpit = () => {
    generateSmallPanelFeed(3)
    generateSmallFeedWithLargePanels()
    generateSmallPanelFeed(6)
}

export const renderTheReader = () => {
    const leftList = document.createElement('div')
    leftList.classList.add('reader__left-list')
    const rightList = document.createElement('div')
    rightList.classList.add('reader__right-list')
    const article = document.createElement('div')
    article.classList.add('reader__article')

    for(let i = 0; i < 32; i++) {
        const item = document.createElement('div')
        item.classList.add('reader__right-list__item')

        rightList.appendChild(item)
    }

    container.appendChild(leftList)
    container.appendChild(rightList)
    container.appendChild(article)
}

export default { 
    renderElClassico,
    renderFrontHands,
    renderNewsFreak,
    renderLeftHand,
    renderDesignGeek,
    renderCrossEyed,
    renderCockpit, 
    renderTheReader
}