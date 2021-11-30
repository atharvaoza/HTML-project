function validate() 
{
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var password = document.getElementById('password')

    
    if (name.value == "") {
        alert("This is a required field");
        return false;
    }
    else if (email.value == "") {
        alert("This is a required field");
        return falese;
    }
    else if (password.value == "") {
        alert("This is a required field");
        return false;
    }
    else if (password.value.length < 6) {
        alert("Password must be more than 6 characters");
        return false;
    }
    else {
        return true;
    }
}
