'use strict';

const $ = (selector) => document.querySelector(selector);

let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

if (month < 10) {
 month = '0' + month;
}

if (day < 10){
 day = '0' + day;
}

today = day + "/" + month + "/" + year;       
// document.getElementById("datePicker1").setAttribute("min", today);
document.getElementById("datePicker1").min = today;


// function validateForm()
// {
//     if(document.getElementById("nameEvent").value.length == "0")
//     {
//         alert("empty field")
//     }
// }


// function validateForm()
// {
//     let x = document.getElementById("eventName").value;
//     let text;
//     if(x == "")
//     {
//         text = "Text field empty"
//     }
//     document.getElementById("demo").innerHTML = text;
// }

const processEntries = () => {
    //get form controls to check for validity
    const name = $('#nameEvent');
    const ven = $('#venue');
    const description = $('#desc');

    let isValid = true;
    if (name.value == '') {
        name.nextElementSibling.textContent = 'This is a required field.';
        isValid = false;
    } else {
        name.nextElementSibling.textContent = '';
    }

    if (ven.value == '') {
        ven.nextElementSibling.textContent = 'This is a required field.';
        isValid = false;
    } else {
        ven.nextElementSibling.textContent = '';
    }

    if (description.value == '') {
        description.nextElementSibling.textContent = 'This is a required field.';
        isValid = false;
    } else {
        description.nextElementSibling.textContent = '';
    }
//submit form if all fields are valid
if (isValid == true) {
    $('form').submit();
}
};

document.addEventListener('DOMContentLoaded', () => {
    $('#subButton').addEventListener('click', processEntries);

    });