// 2. Write a JavaScript function to get the values of First and Last name of the following form.
//Sample HTML file :

function getFormvalue(submitEvent) {
    submitEvent.preventDefault();
    const FirstNameElement = document.getElementById('FirstName');
    const LastNameElement = document.getElementById('LastName');
    const FirstName = FirstNameElement.value;
    const LastName = LastNameElement.value;
    console.log(FirstName);
    console.log(LastName);
}


// function getFormvalue(submitEvent) {
//     submitEvent.preventDefault();
//     const FirstName = document.getElementById('FirstName').value;
//     const LastName = document.getElementById('LastName').value;
//     ^ as we dont use the same thing more than once, we can call it directly;
//     console.log(`First name is ${FirstName}, last name is ${LastName}`);
// }