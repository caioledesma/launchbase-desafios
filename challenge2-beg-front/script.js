const modalGeral = document.querySelector('.modal-geral');
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener('click', function(){
        const cardId = card.getAttribute('id')
        modalGeral.classList.add('active')
        modalGeral.querySelector('iframe').src = `https://rocketseat.com.br/${cardId}`
        modalGeral.classList.maximize('iframe')
    })
}





document.querySelector('.close-modal').addEventListener('click',function(){
    modalGeral.classList.remove('active')
})


    
