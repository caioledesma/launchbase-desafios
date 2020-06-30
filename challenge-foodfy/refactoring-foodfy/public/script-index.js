const findModal = document.querySelector('.modal-geral')
const cardsSelect = document.querySelectorAll('.card')


for(let card of cardsSelect){
    card.addEventListener('click', function() {
        const cardId = card.getAttribute('id')
        window.location.href = `detalhe/${cardId}`
        // console.log(cardText)
    })
}


// findModal.classList.add('active')

document.querySelector('.close-modal').addEventListener('click', function(){
    findModal.classList.remove('active')
    
})

