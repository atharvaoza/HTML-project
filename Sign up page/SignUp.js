'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
    //get form controls to check for validity
    const name = $('#full_name');
    const email = $('#email');
    const password = $('#password');

    //validate name
    let isValid = true;
    if (name.value == '') {
        name.nextElementSibling.textContent = 'This is a required field.';
        isValid = false;
    } else {
        name.nextElementSibling.textContent = '';
    }

    //validate email
    if (email.value == '') {
        email.nextElementSibling.textContent = 'This is a required field.';
        isValid = false;
    } else {
        email.nextElementSibling.textContent = '';
    }

    //validate password
    if (password.value == '') {
        password.nextElementSibling.textContent = 'This is a required field.';
        isValid = false;
    } else {
        password.nextElementSibling.textContent = '';
    }
//submit form if all fields are valid
if (isValid == true) {
    $('form').submit();
}
};

 document.addEventListener('DOMContentLoaded', () => {
     $('#submit').addEventListener('click', processEntries);

     });   

