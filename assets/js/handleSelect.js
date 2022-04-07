import debounce from "./utils/debounce.js";

export default function handleSelect(call){

  const closeSelectOptions = debounce((element) => {
    element.classList.remove('active');
  }, 500)

  const select = document.querySelector('.select');
  const selectOptionsContainer = document.querySelector('.selectOptions');
  const selectionOptions = document.querySelectorAll('ul li')

  select.onclick = () => {
    if(select.classList.contains('active')){
      select.classList.remove('active')
      select.classList.add('hide')

    }else{
      select.classList.add('active');
      select.classList.remove('hide')
    }
 
    selectOptionsContainer.classList.toggle('active');
  }
  
  selectOptionsContainer.addEventListener('mouseleave', e => closeSelectOptions(e.target))
  
  
  selectionOptions.forEach(e => {
    e.addEventListener('click', event => {
      selectionOptions.forEach(e => e.classList.remove('active'));
      closeSelectOptions(selectOptionsContainer)
      event.target.classList.add('active')
      call(event.target);
    })
  })
}