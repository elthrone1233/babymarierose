const cardsWrapper = document.querySelector('#partners-cards');

for(let i = 0; i < 200; i++) {
    cardsWrapper.innerHTML += `
      <div class="partners__card">
         <img src="../assets/images/partners-card.svg" alt="card">
      </div>
`
}

