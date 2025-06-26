const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// 🔑 Replace with your real TMDB API key
const TMDB_API_KEY = 'ef6e33cade5c92b4313c1b4dce0be00f';

app.use(express.static('public'));

app.get('/api/movies', async (req, res) => {
  try {
    const tmdbUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`;
    const response = await axios.get(tmdbUrl);
    res.json(response.data.results);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
