import { APP } from '../const/appName.js'
import Subtitle from '../components/Subtitle.js'
import Observer from '../components/Observer.js'
import appendEnhancerElements from '../elements/appendEnhancerElements.js'

const transcript = new Subtitle()
const bottom = new Subtitle()
const caption = new Subtitle()

// Observer
const exec = function() {

  // Load Element if not loaded
  const transcriptButton = document.querySelector("button[data-purpose='transcript-toggle']")
  if (transcriptButton) appendEnhancerElements()

  // Parse each subtitle elements to each texts
  transcript.parse(
    document.querySelector("span[class*='transcript--highlight-cue--']"))
  bottom.parse(
    document.querySelector("span[class^='well--text--']"))
  caption.parse(
    document.querySelector("[class^='captions-display--captions-cue-text--']"))
  
  // Update Subtitle texts
  const text1 = document.querySelector(".enhancer-subtitle-text-1")
  const text2 = document.querySelector(".enhancer-subtitle-text-2")
  if (text1) text1.textContent = transcript.text
  if (text2) text2.textContent = bottom.text
}
const target = document.querySelector(".main-content")
const config = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true
}

const mainObserver = new Observer(exec, target, config)

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mainObserver.observe)
} else {
  mainObserver.observe()
  console.log(APP, "Main Observer started.")
}