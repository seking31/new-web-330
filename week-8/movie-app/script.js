/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Sara King
  Date: May 11, 2025
  Filename: script.js
*/

// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
'use strict';

const movies = [
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    releaseYear: 2010,
    synopsis: 'dream-sharing technology',
  },
  {
    title: 'The Matrix',
    director: 'The Wachowskis',
    releaseYear: 1999,
    synopsis: 'A hacker discovers the nature of reality',
  },
  {
    title: 'Interstellar',
    director: 'Christopher Nolan',
    releaseYear: 2014,
    synopsis: 'wormhole in space',
  },
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find((movie) => movie.title === title);
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error('not found'));
      }
    }, 1000);
  });
}

document
  .getElementById('movie-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('movie-title');
    const movieInfo = document.getElementById('movie-info');

    try {
      const movie = await fetchMovie(titleInput.value);
      movieInfo.innerHTML = `
        <h2>${movie.title} (${movie.releaseYear})</h2>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Synopsis:</strong> ${movie.synopsis}</p>
      `;
    } catch (error) {
      movieInfo.innerHTML = `<p>${error.message}</p>`;
    }

    titleInput.value = '';
  });
