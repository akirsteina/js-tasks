// 5. Write a JavaScript function to add rows 
// to a table.

// function insert_Row() {
//     let x = document.getElementById('sampleTable').insertRow(0);
//     let y = x.insertCell(0);
//     let z = x.insertCell(1);
//     y.innerHTML = "New Row";
//     z.innerHTML = "New Row";
// }

function insert_Row() {
    const tableElement = document.getElementById('sampleTable');
    const tableBodyElement = tableElement.children[0];
    const rowCount = tableBodyElement.children.length;
    const nextRowNumber = rowCount + 1;
    const newRow = `
    <tr>
    <td>Row${nextRowNumber} Cell1</td>
    <td>Row${nextRowNumber} Cell2</td>
    </tr>
    `;
    tableBodyElement.innerHTML += newRow;
}