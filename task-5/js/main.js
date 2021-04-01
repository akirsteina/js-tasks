// 5. Write a JavaScript function to add rows 
// to a table.

function insert_Row() {
    let x = document.getElementById('sampleTable').insertRow(0);
    let y = x.insertCell(0);
    let z = x.insertCell(1);
    y.innerHTML = "New Row";
    z.innerHTML = "New Row";
}