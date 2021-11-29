let today = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) {
 month = '0' + month;
}

if (day < 10){
 day = '0' + day;
}

let today = day + "/" + month + "/" + year;       
// document.getElementById("datePicker1").setAttribute("min", today);
document.getElementById("datePicker1").min = today;

function validateForm()
{
    if(document.getElementById("nameEvent").value.length == "0")
    {
        alert("empty field")
    }
}