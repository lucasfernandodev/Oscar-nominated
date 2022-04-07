function pagination(items, pageCurrent, limit){

  const result = [];
  let totalPages = Math.ceil(items.length/limit);
  let count = ((pageCurrent + 1) * limit) - limit;
  let delimiter = count + limit;

  if((pageCurrent + 1) <= totalPages){
    for(let i = count; i < delimiter; i++){
    if(items[i] != null){ 
      result.push(items[i]);     
      } 
    }

    count++;
  }

  return {
    data: result,
    currentPage: pageCurrent,
    pageTotal: items.length,
  };
}

export default pagination;