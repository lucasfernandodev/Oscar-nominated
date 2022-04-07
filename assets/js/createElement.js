function el(props) {
  const { elemento, classe, text } = props;

  const el = document.createElement(elemento ?? 'div');

  if (classe !== 'undefined') {
    el.className = classe;
  }
  
  el.innerText = text ?? '';
  return el
}

export default el;