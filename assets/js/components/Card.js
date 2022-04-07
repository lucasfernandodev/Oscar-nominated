import el from '../createElement.js';
import convertDuration from '../utils/convertDuration.js';
import {CardHoverContent, Popup} from '../elementsByTemplateString.js'
const sectionMovies = document.querySelector('.movies');

function generateCardHoverElement(title, duration, year) {

  const time = convertDuration(duration)

  const cardHover = el({ elemento: 'div', classe: 'card-hover' });

  const subtitleText = `${time} · ${year}`

  cardHover.insertAdjacentHTML("afterbegin", Popup());
  cardHover.insertAdjacentHTML("afterbegin", CardHoverContent(title, subtitleText));

  return cardHover
}


const Card = (title, thumb, duration, year ) => {

    const card = el({elemento: 'div', classe: "card"});
    const cardHover = generateCardHoverElement(title, duration, year)


    const image = document.createElement('img');
    image.src = thumb
    image.alt = title;

    card.appendChild(image);
    card.appendChild(cardHover);
    card.className = card.className+' inLoading';
    sectionMovies.appendChild(card)

    function animationCardHoverToggleVisibility(){
      card.onmouseover = () => {
        cardHover.classList.add('active');
      }
  
      card.onmouseout = () => {
        cardHover.classList.remove('active');
      }
    }

    function animationTogglePopup(){

      cardHover.querySelector('.btn-assistir').onclick = (e) => {

        const button = e.target;
        const popup = cardHover.querySelector('.popup')

        const popupSize = popup.getBoundingClientRect().width;
        const positionLeft = e.target.getBoundingClientRect().left;

        const osOverflowLeft = (positionLeft - popupSize) + 9;
        console.log(osOverflowLeft)

        if(osOverflowLeft > 0){

          if (popup.classList.contains('active')) {
            button.classList.remove('active')
            return popup.classList.remove('active')
          }
    
    
          cardHover.querySelector('.popup').onmouseleave = (e) => {
            e.target.classList.remove('active')
            button.classList.add('hidden')
            cardHover.querySelector('.btn-assistir').classList.remove('active')
          }
    
          button.classList.add('active')
          button.classList.remove('hidden')
          popup.classList.add('active')
  
          return;
        }

  
        if (popup.classList.contains('activeLeft')) {
          button.classList.remove('activeLeft')
          return popup.classList.remove('activeLeft')
        }
  
  
        cardHover.querySelector('.popup').onmouseleave = (e) => {
          e.target.classList.remove('activeLeft')
          button.classList.add('hidden')
          cardHover.querySelector('.btn-assistir').classList.remove('activeLeft')
        }
  
        button.classList.add('activeLeft')
        button.classList.remove('hidden')
        popup.classList.add('activeLeft')
  
      }
    }

  animationTogglePopup()
  animationCardHoverToggleVisibility()

  return false;
}

export default Card;