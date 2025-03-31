/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Sara King
  Date: March, 30, 2025
  Filename: script.js
*/


// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";

function createCharacter(name, gender, characterClass) {
  return {
    getName: ()=> name,
    getGender: ()=> gender,
    getClass: ()=> characterClass,
  }
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const charClass = document.getElementById("heroClass").value;

  // TODO: Create character

  const character = createCharacter(name, gender, charClass)

  // TODO: Display character information

  const output = document.getElementById("characterOutput")
  output.display = "block";

  output.innerHTML = `
      <h2>Name:&nbsp;${ character.getName()}</h2>
        <h3>Gender:&nbsp;${ character.getGender()}</h3>
        <h3>Class:&nbsp;${ character.getClass()}</h3>
  `
});