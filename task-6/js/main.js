// Write a JavaScript function that accepts row, column, 
// (to identify a particular cell) and a string
//  to update the content of that cell.

function changeContent() {
    const rn = window.prompt("Input the Row number(0,1,2)", "0");
    const cn = window.prompt("Input the Column number(0,1,2)", "0");
    const content = window.prompt("Input the Cell content");
    const x = document.getElementById('myTable').rows[parseInt(rn, 10)].cells;
    x[parseInt(cn, 10)].innerHTML = content;
}

// instead of promt add form with input select, input text
function submitForm(event) {
    event.preventDefault();
    const rowNumber = document.getElementById('pick-row').value;
    const colNumber = document.getElementById('pick-col').value;
    const rowIndex = parseInt(rowNumber - 1);
    const colIndex = parseInt(colNumber - 1);
    const rowElement = document.getElementById('table-bodu').children[rowIndex];
    const cellElement = rowElement.children[colIndex];
    const newValue = document.getElementById('new-cell-value').value;
    cellElement.innerHTML = newValue;
}