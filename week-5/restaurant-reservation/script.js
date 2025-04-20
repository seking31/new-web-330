/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Sara King
  Date: April 20, 2025
  Filename: script.js
*/

const tables = [
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
];

function reserveTable(tableNumber, callback, time) {
  const table = tables.find((t) => t.tableNumber === tableNumber);

  if (table && !table.isReserved) {
    table.isReserved = true;

    setTimeout(() => {
      callback(`Table ${tableNumber} reserved successfully!`);
    }, time);
  } else {
    callback(`Error: Table ${tableNumber} is already reserved.`);
  }
}

document
  .getElementById('reservationForm')
  .addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const tableNumber = Number.parseInt(
      document.getElementById('tableNumber').value
    );

    reserveTable(
      tableNumber,
      (message) => {
        document.getElementById('message').textContent = `${name}, ${message}`;
      },
      2000
    );
  });
