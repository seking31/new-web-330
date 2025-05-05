/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Sara King
  Date: May 4, 2025
  Filename: chefs.js
*/

// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
'use strict';

/* --- sample data --- */
const chefs = [
  {
    name: 'Gordon Ramsay',
    specialty: 'British',
    weakness: 'Limited patience',
    restaurant: 'London, UK',
  },
  {
    name: 'Dominique Crenn',
    specialty: 'French',
    weakness: 'Perfectionism',
    restaurant: 'San Francisco, USA',
  },
  {
    name: 'Massimo Bottura',
    specialty: 'Italian',
    weakness: 'Reluctant to compromise',
    restaurant: 'Modena, Italy',
  },
];

/* --- three individual helpers --- */
const retrieveChef1 = () =>
  new Promise((res) => setTimeout(() => res(chefs[0]), 1000));
const retrieveChef2 = () =>
  new Promise((res) => setTimeout(() => res(chefs[1]), 1000));
const retrieveChef3 = () =>
  new Promise((res) => setTimeout(() => res(chefs[2]), 1000));

/* --- main --- */
window.addEventListener('DOMContentLoaded', async () => {
  const containers = ['chef1', 'chef2', 'chef3'].map((id) =>
    document.getElementById(id)
  );

  const results = await Promise.allSettled([
    retrieveChef1(),
    retrieveChef2(),
    retrieveChef3(),
  ]);

  results.forEach((r, i) => {
    if (r.status === 'fulfilled') {
      const { name, specialty, weakness, restaurant } = r.value;
      containers[i].innerHTML = `
        <h2>${name}</h2>
        <p><strong>Specialty:</strong> ${specialty}</p>
        <p><strong>Weakness:</strong> ${weakness}</p>
        <p><strong>Restaurant:</strong> ${restaurant}</p>
      `;
    } else {
      const err = document.getElementById('error');
      err.textContent = 'Could not load chef data.';
      err.hidden = false;
    }
  });
});
