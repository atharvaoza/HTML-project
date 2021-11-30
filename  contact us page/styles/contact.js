"use strict";

const $ = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("ul");
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const fname = $("#fname");
    const lname = $("#lname");
    const email = $("#email");
    const subject = $("#subject");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (fname.value == "") {
        msgs[msgs.length] = "This field is required";
    } 
    if (lname.value == "") {
        msgs[msgs.length] = "This field is required"; 
    } 
    if (email.value == "") {
        msgs[msgs.length] = "This field is required";
    } 
    if (subject.checked == "") {
        msgs[msgs.length] = "This field is required"; 
    }

    // submit the form or notify user of errors
    if (msgs.length == 0) {  // no error messages
        $("form").submit(); 
    } else {s
        displayErrorMsgs(msgs);
    }
};



document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", processEntries);
       
});