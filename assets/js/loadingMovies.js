async function loadingMovies(skip = 0) {
  const response = await fetch(`http://192.168.100.111:3333/movies?skip=${skip}`);
  const result = response.status === 200 ? await response.json() : null

  if (result !== null) {
    return {
      data: result.data,
      pageTotal: result.pagination,
      currentPage: result.current_page
    };
  }

  return null
}

export default loadingMovies;