async function loadingMovies(skip = 0) {
  const response = await fetch(`https://oscar2022api.herokuapp.com/movies?skip=${skip}`);
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