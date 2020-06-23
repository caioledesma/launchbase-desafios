const findModal = document.querySelector('.modal-geral')
const cardsSelect = document.querySelectorAll('.card')


for(let card of cardsSelect){
    card.addEventListener('click', function() {
        const cardId = card.getAttribute('id')
        const cardTitle = card.querySelector('h3').innerHTML
        findModal.querySelector('img').src = `assets/${cardId}.png`
        findModal.querySelector('h3').innerHTML = cardTitle 
        findModal.classList.add('active')
        // console.log(cardText)
    })
}


document.querySelector('.close-modal').addEventListener('click', function(){
    findModal.classList.remove('active')
})


