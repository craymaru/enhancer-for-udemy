class Observer {
  constructor(func, target, config) {
    const process = (mutations) => {
      func()
    }
    this.observer = new MutationObserver(process)
    this.target = target
    this.config = config
  }
  observe(target=this.target, config=this.config) {
    this.observer.observe(target, config)
  }
}
export default Observer