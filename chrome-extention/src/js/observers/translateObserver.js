import { APP } from '../const/appName.js'
import Observer from '../components/Observer.js'

// Observer
const observerFac = function (func) {
  const process = (mutations) => {
    func()
  };
  return new MutationObserver(process);
};


const exec = function() {
  // Trigger GoogleTranslate 
  const translated = document.querySelector("html.translated-ltr")
  if (translated) {
    const containers = document.querySelectorAll("div[class^='transcript--cue-container--']")
    for (e of containers) {
      e.style.cssText = "padding: 0"
    }
    const underlines = document.querySelectorAll("p[class^='transcript--underline-cue--']")
    for (e of underlines) {
      e.style.cssText = "margin: 0px; width: 0px; height: 0px;"
      e.querySelector("span").style.cssText = "font-size: 0"
    }

    // Wait Translated
    setTimeout(() =>{
      for (e of containers) {
        e.style.cssText = ""
      }
      for (e of underlines) {
        e.style.cssText = ""
        e.querySelector("span").style.cssText = ""
      }
    }, 1000)
  }
}
const target = document.querySelector("html")
const config = {
  childList: false,
  attributes: true,
  characterData: false,
  subtree: false
};
const translateObserver = new Observer(exec, target, config)

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", translateObserver.observe);
} else {
  translateObserver.observe();
  console.log(APP, "Translate Observer started.");
}