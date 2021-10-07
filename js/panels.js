export const generateLargePanelFeed = (numberOfFeeds = 1) => {
    for(let i = 0; i < numberOfFeeds; i++) {
        container.appendChild(createLargePanelView(64))
    }
}

export const generateSmallPanelFeed = (numberOfFeeds = 1) => {
    for(let i = 0; i < numberOfFeeds; i++) {
        container.appendChild(createSmallPanelContainer(32))
    }
}

export const generateSmallFeedWithLargePanels = (numberOfFeeds = 1) => {
    for(let i = 0; i < numberOfFeeds; i++) {
        container.appendChild(createSmallFeedWithLargePanels(32))
    }
}

const createLargePanelView = (numberOfPanels) => {

    const view = document.createElement('div')
    const panelContainer = document.createElement('div')

    view.classList.add('large-feed')
    panelContainer.classList.add('large-feed__panel-container')

    view.appendChild(createHeader())
    view.appendChild(panelContainer)

    createPanels(numberOfPanels, 'large').forEach((panel) => {
        panelContainer.appendChild(panel)
    })

    return view
}

const createSmallPanelContainer = (numberOfPanels) => {
    const view = document.createElement('div')
    const panelContainer = document.createElement('div')

    view.classList.add('small-feed')
    panelContainer.classList.add('small-feed__panel-container')

    view.appendChild(createHeader())
    view.appendChild(panelContainer)

    createPanels(numberOfPanels, 'small').forEach((panel) => {
        panelContainer.appendChild(panel)
    })
    return view
}

const createSmallFeedWithLargePanels = (numberOfPanels) => {
    const view = document.createElement('div')
    const panelContainer = document.createElement('div')
    view.classList.add('small-feed')
    panelContainer.classList.add('small-feed__panel-container')
    view.appendChild(createHeader())
    view.appendChild(panelContainer)
    createPanels(numberOfPanels, 'large').forEach((panel) => {
        panelContainer.appendChild(panel)
    })
    return view
}

const createHeader = () => {
    const header = document.createElement('div')
    header.classList.add('header')
    return header
}

const createPanels = (numberOfPanels, size) => {
    const panels = []
    let panel = null
    for(let i = 0; i < numberOfPanels; i++) {
        panel = document.createElement('div')
        size === 'small' ? panel.classList.add('small-feed__panel') : panel.classList.add('large-feed__panel')
        panels.push(panel)
    }
    return panels
}