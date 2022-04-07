function convertDuration(duration){
  let newDuration = duration.toString().split('');

  if(newDuration.length > 2){
    newDuration = `${newDuration[0]}h${newDuration[1]}${newDuration[2]}m`

  }else{
    newDuration = `${newDuration[0]}${newDuration[1]}m`
  }

  return newDuration;

}

export default convertDuration;