// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
'use strict';
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Sara King
      Date: April 27, 2025

      Filename: project11-02.js
*/

const postalCode = document.getElementById('postalCode');
const place = document.getElementById('place');
const region = document.getElementById('region');
const country = document.getElementById('country');

postalCode.onblur = () => {
  const codeValue = document.getElementById('postalCode').value;
  const countryValue = document.getElementById('country').value;

  document.getElementById('place').value = '';
  document.getElementById('region').value = '';

  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      document.getElementById('place').value = json.places[0]['place name'];
      document.getElementById('region').value =
        json.places[0]['state abbreviation'];
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
