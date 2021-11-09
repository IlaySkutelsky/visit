
let texts = [
  'היי',
  'לא תכננתי לקבל אורחים עכשיו'
]
let i = 0
let typeWriter = new TypeWriter('svg text .main-text')

async function bodyClicked() {
  makeElmUninteractive('#body')
  await typeWriter.typeText(texts[i])
  await typeWriter.clean(200)
  makeElmInteractive('#body')
  if (i==0) i++
}

function makeElmUninteractive(selector) {
  let elm = document.querySelector(selector)
  elm.style.cursor = 'default'
  elm.style.pointerEvents = 'none'
}
function makeElmInteractive(selector) {
  let elm = document.querySelector(selector)
  elm.style.cursor = 'pointer'
  elm.style['pointer-events'] = 'all'
}

let sipsAmount = 0;

async function teaClicked() {
  makeElmUninteractive('#cup')
  showTeaMeter()
  sipsAmount += 1;
  await adjustTeaLevel(sipsAmount)
  if (sipsAmount < 5) await sleep(1000)
  hideTeaMeter()
  makeElmInteractive('#cup')
}

function adjustTeaLevel(amount) {
  let meter = document.querySelector('.tea-meter')
  sleep(200)
  meter.classList.remove(['sip0', 'sip1', 'sip2', 'sip3', 'sip4', 'sip5'])
  meter.classList.add('sip'+amount)
  return sleep(2000)
}

function showTeaMeter() {
  let meter = document.querySelector('.tea-meter')
  meter.classList.remove('hidden')
}

function hideTeaMeter() {
  let meter = document.querySelector('.tea-meter')
  meter.classList.add('hidden')
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
