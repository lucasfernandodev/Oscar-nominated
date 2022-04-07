export default function debounce(fn, timeout = 300){
  let timer = null;

 clearTimeout(timer)

 return (...args) => {timer = setTimeout(() => {fn.apply(this, args)}, timeout)}
}