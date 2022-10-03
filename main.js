// На странице есть две кнопки. При нажатии на первую кнопку пользователь должен ввести в prompt адрес ссылки, 
// при нажатии на вторую – переадресовывается на другой сайт (по ранее введенной ссылке).
let getLinkButton = document.querySelector('.js--getLinkButton')
let moveLinkButton = document.querySelector ('.js--moveLinkButton')

getLinkButton.addEventListener('click', inputLink)
moveLinkButton.addEventListener('click', trekLink)


function inputLink (){
  myLink = prompt('Введите ссылку')
  
}

function trekLink (){
location.href = myLink
}

// В папку images добавить изображения разных размеров: 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вывести изображение из этой папки, полученное случайным образом (Math.random). 
// Размер изображения должен соотвецтвовать 80% размеров окна браузера (к примеру окно 1000px, то размер изображения 800px).

function getRandom() {
  return Math.random();
}
let randomNumber = Math.ceil((getRandom()) * 9)
console.log(randomNumber)

let swapImage = document.querySelector('.js--swapImage')

swapImage.setAttribute('src' , `images/${randomNumber}.jpg`)


// let currentWidth = (window.screen.width)
// let currentHeight = (window.screen.height)
// console.log(currentWidth)
// console.log(currentHeight)

console.log(window.innerWidth)
console.log(window.innerHeight)

swapImage.setAttribute ('width', window.innerWidth * 0.8)
swapImage.setAttribute ('height', window.innerHeight * 0.8)

console.log(swapImage.width)
console.log(swapImage.height)

// Меняю картинку кнопкой

let swapImageButton = document.querySelector('.js--swapImageButton')
swapImageButton.addEventListener('click' , rollImage)

function rollImage(){
  randomNumber = Math.ceil((getRandom()) * 9)
  swapImage.setAttribute('src', `images/${randomNumber}.jpg`)
}
