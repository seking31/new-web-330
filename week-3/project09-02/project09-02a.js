// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Sara King
      Date: April 12, 2025

      Filename: project09-02a.js
*/

/* Page Objects */

const riderName = document.getElementById("riderName");
const ageGroup = document.getElementById("ageGroup");
const bikeOption = document.getElementById("bikeOption");
const routeOption = document.getElementById("routeOption");
const accOption = document.getElementById("accOption");
const region = document.getElementById("region");
const miles = document.getElementById("miles");
const comments = document.getElementById("comments");

function showData(event) {
  event.preventDefault();

  sessionStorage.setItem("riderName", document.getElementById("riderName").value);
  sessionStorage.setItem("ageGroup", document.getElementById("ageGroup").value);
  sessionStorage.setItem("bikeOption", document.getElementById("bikeOption").value);
  sessionStorage.setItem("routeOption", document.getElementById("routeOption").value);
  sessionStorage.setItem("accOption", document.getElementById("accOption").value);
  sessionStorage.setItem("region", document.getElementById("region").value);
  sessionStorage.setItem("miles", document.getElementById("miles").value);
  sessionStorage.setItem("comments", document.getElementById("comments").value);

  location.href = "project09-02b.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", (event) => showData(event));
});
