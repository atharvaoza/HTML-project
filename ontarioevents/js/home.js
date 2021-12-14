function validate(){
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let message = "";

    if(email === "" && name === "" && phone === "") {
        message += "<h4 class='error'>*Please fill out required fields</h4>"

    }
    else if( email === "" ) {
        message += "<h4 class='error'>Email cannot be empty</h4>"
    }
    else if( name === "" ) {
        message += "<h4 class='error'>Name cannot be empty</h4>"
    }
    else if( phone === "" ) {
        message += "<h4 class='error'>Phone cannot be empty</h4>"
    }
    else if( phone > 10 ) {
        message += "<h4 class='error'>Invalid Phone number</h4>"
    }
    else {
        alert("Signed up for our Newsletter");
    }
    document.getElementById("message").innerHTML = message;
}