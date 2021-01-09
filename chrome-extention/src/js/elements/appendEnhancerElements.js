import { APP } from '../const/appName.js'

// Append DOM Element
const appendEnhancerElements = function() {

  // Return if not require element loaded
  const controlBarButton = document.querySelector("[class^='control-bar-button--button--']")
  if (!controlBarButton) {
    return
  }
  
  // Append subtitle toggle button
  if (!document.getElementById("enhancer-subtitle-toggle")) {
    const newButton = document.createElement('button')
    newButton.id = "enhancer-subtitle-toggle"
    newButton.type = "button"
    newButton.className = controlBarButton.className
    newButton.setAttribute("data-purpose", "enhancer-subtitle-toggle")

    const newSpan = document.createElement('span')
    newSpan.className = "enhancer-button-text"
    newSpan.textContent = "😺"
    newButton.appendChild(newSpan)

    const target = document.querySelector("button[data-purpose='transcript-toggle']")
    if (target) {
      target.before(newButton)
      console.log(APP, "Append Enhancer button.")
    }
  }
  
  // Onclick
  const toggle = document.getElementById("enhancer-subtitle-toggle")
  if (toggle) toggle.onclick = () => {
    
    // Open Udemy Transcription sidebar
    const transcription = document.querySelector("div[class^='transcript--transcript-panel--']")
    if (!transcription) {
      document.querySelector("button[data-purpose='transcript-toggle']").click()
    }
    
    // Toggle
    if (document.querySelector(".enhancer-subtitles")) {
      // Toggle Off
      const target = document.querySelector("div[class^='well--container--'] > span")
      target.style.cssText = ""
      document.querySelector(".enhancer-subtitles").remove()
      return
    } else {
      // Toggle On
      const newDiv = document.createElement('div')
      newDiv.className = "enhancer-subtitles"
    
        const subtitleDiv1 = document.createElement('div')
        subtitleDiv1.className = "enhancer-subtitle-1"
          const subtitleSpan1 = document.createElement('span')
          subtitleSpan1.className = "enhancer-subtitle-text-1"
          subtitleSpan1.textContent = "text-1"
          subtitleDiv1.appendChild(subtitleSpan1)

        const subtitleDiv2 = document.createElement('div')
        subtitleDiv2.className = "enhancer-subtitle-2"
          const subtitleSpan2 = document.createElement('span')
          subtitleSpan2.textContent = "text-2"
          subtitleSpan2.className = "enhancer-subtitle-text-2"
          subtitleDiv2.appendChild(subtitleSpan2)
    
      newDiv.appendChild(subtitleDiv1)
      newDiv.appendChild(subtitleDiv2)
    
      const target = document.querySelector("[class^='well--container--']")
      if (target) {
        const targetSpan = target.querySelector("span")
        targetSpan.style.display = "none"
        target.appendChild(newDiv)
      }
    }
  }
}
export default appendEnhancerElements