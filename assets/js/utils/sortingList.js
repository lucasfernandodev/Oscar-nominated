function sortingList(data, by = 'title'){

  let newArray = [];


  if (by === 'indicators'){
    newArray = data.map((item, index) => {
      const indicators = item.category.trim().split(',');
      data[index].indicators = indicators.length;
    })
  }

  if(by === 'title'){
    newArray = data.sort((a,b) => {
      let x = a[by].toLowerCase();
      let y = b[by].toLowerCase();

      return x === y ? 0 : x > y ? 1 : -1;
    })
  }else{
    newArray = data.sort((a,b) => {
      return  b[by] - a[by]
    })
  }
  return newArray;
}

export default sortingList;