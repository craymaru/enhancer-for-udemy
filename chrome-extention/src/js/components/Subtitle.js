class Subtitle {
  constructor() {
    this.text = "";
    this.element = null;
  }
  parse(element) {
    if (element) {
      if (this.text !== element.textContent) {
        this.text = element.textContent
      }
    } else {
      this.text = ""
    }
  }
}

export default Subtitle