// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage

  Author: Sara King
  Date: April 12, 2025

      Filename: project09-02b.js
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


riderName.textContent = sessionStorage.getItem("riderName")
ageGroup.textContent = sessionStorage.getItem("ageGroup")
bikeOption.textContent = sessionStorage.getItem("bikeOption")
routeOption.textContent = sessionStorage.getItem("routeOption")
accOption.textContent = sessionStorage.getItem("accOption")
region.textContent = sessionStorage.getItem("region")
miles.textContent = sessionStorage.getItem("miles")
comments.textContent = sessionStorage.getItem("comments")
