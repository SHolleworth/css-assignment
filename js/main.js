import { 
    clearContainerLayout, 
    clearContainerContent, 
    setContainerLayout, 
    setActiveFormat 
} from "./container.js"
import views from './views.js'

const switchFormat = (formatName) => {
    clearContainerContent()
    switch(formatName.toLowerCase()) {
        case 'the reader':
            views.renderTheReader()
            break
        case 'el classico':
            views.renderElClassico()
            break
        case 'front hands':
            views.renderFrontHands()
            break
        case 'news freak':
            views.renderNewsFreak()
            break
        case 'left hand':
            views.renderLeftHand()
            break
        case 'design geek':
            views.renderDesignGeek()
            break
        case 'cross eyed':
            views.renderCrossEyed()
            break
        case 'cockpit':
            views.renderCockpit()
            break
    }
    clearContainerLayout()
    setContainerLayout(formatName)
    setActiveFormat(formatName)
}


const assignHandler = (formatName) => {
    return () => switchFormat(formatName)
}

document.getElementById("reader-button").onclick = assignHandler('the reader')
document.getElementById("el-button").onclick = assignHandler('el classico')
document.getElementById("front-button").onclick = assignHandler('front hands')
document.getElementById("news-button").onclick = assignHandler('news freak')
document.getElementById("left-button").onclick = assignHandler('left hand')
document.getElementById("design-button").onclick = assignHandler('design geek')
document.getElementById("cross-button").onclick = assignHandler('cross eyed')
document.getElementById("cockpit-button").onclick = assignHandler('cockpit')

switchFormat('the reader')