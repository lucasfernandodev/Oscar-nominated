const bodyElement = document.querySelector('body');

export default function scrollbar (){

  let timer = null
  
  document.querySelector('body').addEventListener("wheel", () => {
    bodyElement.classList.add('wheelActive');
    clearTimeout(timer);

    timer = setTimeout(() => {
      bodyElement.classList.remove('wheelActive');
    },500)
  })
}