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