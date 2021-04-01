// Write a JavaScript function that accepts row, column, 
// (to identify a particular cell) and a string
//  to update the content of that cell.

function changeContent() {
    let rn = window.prompt("Input the Row number(0,1,2)", "0");
    let cn = window.prompt("Input the Column number(0,1)", "0");
    let content = window.prompt("Input the Cell content");
    let x = document.getElementById('myTable').rows[parseInt(rn, 10)].cells;
    x[parseInt(cn, 10)].innerHTML = content;
}