import el from './createElement.js';

const Popup = () => {
  return (
    `
  <div class="popup">
    <div class="row">
      <span class="platform">
       <img src="./assets/images/n2.png" class="icon" alt="Assistir na Netflix"/>
       Netflix
      </span>
      <span class="price">
      Assinatura
      </span>
    </div>
    <div class="row">
      <span class="platform">
       <img src="./assets/images/youtube-logo@2x.png" class="icon" alt="Assistir no YouTube"/>
       YouTube
      </span>
      <span class="price">
      A partir de R$ 14,90
      </span>
    </div>
  </div>
  `
  )
}

const CardHoverContent = (title, subtitle) => {
  return (
    `
    <button class="btn-favorite">
      <img src="./assets/images/Icon-Guardar.svg" alt="Adicionar aos favoritos" />
    </button>
    <h3 class="title">${title}</h3>
    <span class="subtitle">${subtitle}</span>
    <div class="buttonGroup">
      <button class="btn-hover">Trailer</button>
      <button class="btn-hover btn-assistir">
      Assistir
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="6 9 12 15 18 9"></polyline>
   </svg>
      </button>
    </div>`
  )
}

export {Popup, CardHoverContent}