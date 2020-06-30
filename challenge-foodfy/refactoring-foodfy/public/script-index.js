const cardsSelect = document.querySelectorAll('.card')

for(let card of cardsSelect){
    card.addEventListener('click', function() {
        const cardId = card.getAttribute('id')
        window.location.href = `detalhe/${cardId}`
        // console.log(cardText)
    })
}




