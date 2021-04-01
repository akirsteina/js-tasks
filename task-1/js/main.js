// // 1. Here is a sample html file with a submit button. 
// Now modify the style of the paragraph text through 
// javascript code.
// // Sample HTML file :


// // Clicking on the button the font, font size, 
// and color of the paragraph text will be changed.

function js_style() {
    const pElement = document.getElementById('text');
    if (pElement.style.color === 'red') {
        pElement.style.color = 'black';
        pElement.style.fontSize = '12px';
        pElement.style.fontFamily = 'Arial';
    } else {
        pElement.style.color = 'red';
        pElement.style.fontSize = '30px';
        pElement.style.fontFamily = 'Times New Roman';

    }
}