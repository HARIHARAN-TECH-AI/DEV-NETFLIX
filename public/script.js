const movieList = document.getElementById('movie-list');

fetch('/api/movies')
  .then(res => res.json())
  .then(movies => {
    movies.forEach(movie => {
      if (movie.poster_path) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie');
        movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <h4>${movie.title}</h4>
        `;
        movieList.appendChild(movieCard);
      }
    });
  })
  .catch(err => {
    console.error('Error loading movies:', err);
    movieList.innerHTML = '<p>Failed to load movies. Please try again.</p>';
  });
