const container = document.getElementById('container')
let activeFormat = ''

const switchFormat = (formatName) => {
    clearPage()
    switch(formatName.toLowerCase()) {
        case 'el classico':
            renderElClassico()
            break
        case 'front hands':
            renderFrontHands()
            break
        case 'news freak':
            renderNewsFreak()
            break
        case 'left hand':
            renderLeftHand()
            break
        case 'design geek':
            renderDesignGeek()
            break
        case 'cross eyed':
            renderCrossEyed()
            break
        case 'cockpit':
            renderCockpit()
            break
    }
    clearContainerLayout()
    setContainerLayout(formatName)
    setActiveFormat(formatName)
}

const clearContainerLayout = () => {
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

const setContainerLayout = (formatName) => {
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

const setActiveFormat = (formatName) => {
    activeFormat = formatName
}

const clearPage = () => {
    Array.from(container.children).forEach((feed) => {
        container.removeChild(feed)
    })
}

const generateLargePanelFeed = (numberOfFeeds = 1) => {
    for(let i = 0; i < numberOfFeeds; i++) {
        container.appendChild(createLargePanelView(64))
    }
}

const generateSmallPanelFeed = (numberOfFeeds = 1) => {
    for(let i = 0; i < numberOfFeeds; i++) {
        container.appendChild(createSmallPanelContainer(32))
    }
}

const generateSmallFeedWithLargePanels = (numberOfFeeds = 1) => {
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

const renderElClassico = () => {
    generateSmallPanelFeed()
    generateLargePanelFeed()
}

const renderFrontHands = () => {
    generateSmallPanelFeed()
    generateLargePanelFeed()
    generateSmallPanelFeed()
}

const renderNewsFreak = () => {
    generateSmallPanelFeed(5)
    //container.classList.add('container--news-freak-layout')
}

const renderLeftHand = () => {
    generateLargePanelFeed()
    generateSmallPanelFeed()
}

const renderDesignGeek = () => {
    generateLargePanelFeed()
}

const renderCrossEyed = () => {
    generateLargePanelFeed(2)
}

const renderCockpit = () => {
    generateSmallPanelFeed(3)
    generateSmallFeedWithLargePanels()
    generateSmallPanelFeed(6)
}

switchFormat('el classico')
// switchFormat('front hands')
// switchFormat('news freak')
// switchFormat('left hand')
// switchFormat('design geek')
// switchFormat('cross eyed')
// switchFormat('cockpit')