// 4. Here is a sample html file with a submit button. 
// Write a JavaScript function to get the value of the 
// href, hreflang, rel, target, 
// and type attributes of the specified link.


// function getAttributes() {

//     const hrefAttribute = document.getElementById("w3r").href;
//     alert('The value of the href attribute of the link is : ' + hrefAttribute);
//     const hrefLangAttribute = document.getElementById("w3r").hreflang;
//     alert('The value of the hreflang attribute of the link is : ' + hrefLangAttribute);
//     const relAttribute = document.getElementById("w3r").rel;
//     alert('The value of the rel attribute of the link is : ' + relAttribute);
//     const targetAttribute = document.getElementById("w3r").target;
//     alert('The value of the taget attribute of the link is : ' + targetAttribute);
//     const typeAttribute = document.getElementById("w3r").type;
//     alert('The value of the type attribute of the link is : ' + typeAttribute);

// }


function getAttributes() {
    const linkAttributes = document.getElementById('w3r').attributes;
    console.log(`
    href: ${linkAttributes.href.value}, 
    hreflang: ${linkAttributes.hreflang.value}, 
    rel: ${linkAttributes.rel.value}, 
    target: ${linkAttributes.target.value}, 
    type: ${linkAttributes.type.value}`)
}