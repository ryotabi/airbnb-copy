const hamNemu = document.getElementById('hamNemu')
const hamWrap = document.getElementById('ham-wrap')
console.log(hamNemu)
const hamNemuWrap = document.getElementById('hamNemu-wrap')
const main = document.getElementById('main')

//アコーディオンメニュー

hamNemu.addEventListener('click', () => {
  hamWrap.classList.add('active')
  main.classList.add('active')

})

hamNemuWrap.addEventListener('click', () => {
  hamWrap.classList.remove('active')
  main.classList.remove('active')
})

//slidemenu

const slideWrap = document.getElementById('tab-slide-menu')
const textWrap = document.getElementById('text_wrap')
const slideOut = document.getElementById('slideOut')

console.log(window.innerHeight)

let textWrapHeight = textWrap.getBoundingClientRect().top
let slideOutHeight = slideOut.getBoundingClientRect().top


window.addEventListener('load', () => {
  console.log(textWrap.getBoundingClientRect().top)

  if (textWrapHeight <= 0 && slideOutHeight > 0) {
    slideWrap.classList.add('active')
  }

})
window.addEventListener('scroll', () => {
  console.log(textWrap.getBoundingClientRect().top)

  if (window.innerHeight > textWrap.getBoundingClientRect().top + 531) {
    slideWrap.classList.add('active')
  } else if (window.innerHeight <= textWrap.getBoundingClientRect().top + 531) {
    slideWrap.classList.remove('active')
  }
  //  else if (window.innerHeight > slideOut.getBoundingClientRect().top)
})