function checkReqFields() {
    let errormessage="";
    var returnValue;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var Message = document.getElementById("subject").value;

    returnValue = true;
    if (fname.trim() == "") {
        document.getElementById('formvaidfname').innerHTML = "*This is required field ";
        returnValue = false;
    }
      if (lname.trim() == "") {
        document.getElementById('formvaidlname').innerHTML = "*This is required field ";
        returnValue = false;
    }
    if (email.trim() == "") {
        document.getElementById('formvaidemail').innerHTML = "*This is required field ";
        returnValue = false;
    }
      if (Message.trim() == "") {
        document.getElementById('formvaidmessage').innerHTML = "*Please write your message ";
        returnValue = false;
    }
  

    return returnValue;
}