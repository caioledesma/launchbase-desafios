const findModal = document.querySelector('.modal-geral')
const cardsSelect = document.querySelectorAll('.card')


for(let card of cardsSelect){
    card.addEventListener('click', function() {
    findModal.classList.add('active')
    })
}


document.querySelector('.close-modal').addEventListener('click', function(){
    findModal.classList.remove('active')
})
