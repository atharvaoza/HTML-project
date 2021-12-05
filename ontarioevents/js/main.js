let counter = 1;

function minus(){
    if(counter <= 0) {
        counter = 1;
    }
    else{
        counter--;
    }
    displayTicketNo();
}

function plus(){
    if(counter <= 0) {
        counter = 1;
    }
    else{
        counter++;
    }
    displayTicketNo();
}

function displayTicketNo() {
    document.getElementById("ticket-count").innerHTML = counter;
}

function displaySuccessMessage() {
    prompt("Enter your email to receive newsletters and exciting new offers from Ontario Events:", "example@email.com");
    alert(`Added ${counter} tickets to your cart`);
}