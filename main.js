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
 window.location.href = myLink
 
}