class TypeWriter {
  constructor(elmSelector) {
    this.elmSelector = elmSelector
    this.elm = document.querySelector(elmSelector)
    this.text = ''
    this.delay = 300;
  }

  typeText(text) {
    this.text = text
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i <= text.length; i++) {
        let currText = text.substring(0, i)
        this.injectText(currText)
        await this.sleep(this.delay*(Math.random()*0.7+0.4))
      }
      resolve()
    })
  }

  injectText(text) {
    this.elm.innerHTML = text
  }

  clean = async function(timeoutMs) {
    let text = this.text
    return new Promise(async (resolve, reject) => {
      await this.sleep(timeoutMs)
      for (let i = 0; i <= text.length; i++) {
        let currText = text.substring(0, text.length-i)
        this.injectText(currText)
        await this.sleep(this.delay*(Math.random()*0.3+0.3))
      }
      resolve()
    })
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
