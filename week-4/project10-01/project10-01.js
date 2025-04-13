// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Sara King
      Date: April 13, 2025

      Filename: project10-01.js
*/

// Reference to the puzzle board
const puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
const intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
// biome-ignore lint/style/useSingleVarDeclarator: <explanation>
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
// biome-ignore lint/complexity/useArrowFunction: <explanation>
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

pieces.forEach(piece => {
  piece.addEventListener('pointerdown', grabPiece);
});

function grabPiece(e) {
  pointerX = e.clientX;
  pointerY = e.clientY;

  e.target.style.touchAction = 'none';

  zCounter++;
  e.target.style.zIndex = zCounter;

  pieceX = e.target.offsetLeft;
  pieceY = e.target.offsetTop;

  e.target.addEventListener('pointermove', movePiece);
  e.target.addEventListener('pointerup', dropPiece);
}

function movePiece(e) {
  const diffX = e.clientX - pointerX;
  const diffY = e.clientY - pointerY;

  e.target.style.left = `${pieceX + diffX}px`;
  e.target.style.top = `${pieceY + diffY}px`;
}

function dropPiece(e) {
  e.target.removeEventListener('pointermove', movePiece);
  e.target.removeEventListener('pointerup', dropPiece);
}


