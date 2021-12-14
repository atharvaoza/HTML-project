console.log("HELlo Console");

let peopleDetails = [
{username : "jay",
password : "jay123"},{username : 'mihir',
password : "mihir123"},{username : "atharva",
password : "atharva123"},{username : "sarah",
password : "sarah123"},{username : "nimratpreet",
password : "nimratpreet123"}
]

console.log(peopleDetails[0].username,peopleDetails[0].password);

function getInfo(){
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(document.getElementById('username').value == peopleDetails[0].username && document.getElementById('password').value ==peopleDetails[0].password){
        let container = document.getElementsByClassName('login');
        container[0].innerHTML = ` <div class="login-header">
        <h1>Login</h1>
      </div>
      <div class="login-form">
        <h1>Congratulations! You are logged in.</h1>
      </div>
      `
      location.href="../../../ontarioevents/index.html";
    
      
    }

    if(document.getElementById('username').value == peopleDetails[1].username && document.getElementById('password').value ==peopleDetails[1].password){
      let container = document.getElementsByClassName('login');
      container[0].innerHTML = ` <div class="login-header">
      <h1>Login</h1>
    </div>
    <div class="login-form">
      <h1>Congratulations! You are logged in.</h1>
    </div>
    `
    location.href="../../../ontarioevents/index.html";
    }
    if(document.getElementById('username').value == peopleDetails[2].username && document.getElementById('password').value ==peopleDetails[2].password){
      let container = document.getElementsByClassName('login');
      container[0].innerHTML = ` <div class="login-header">
      <h1>Login</h1>
    </div>
    <div class="login-form">
      <h1>Congratulations! You are logged in.</h1>
    </div>
    `
    location.href="../../../ontarioevents/index.html";
    }
    if(document.getElementById('username').value == peopleDetails[3].username && document.getElementById('password').value ==peopleDetails[3].password){
      let container = document.getElementsByClassName('login');
      container[0].innerHTML = ` <div class="login-header">
      <h1>Login</h1>
    </div>
    <div class="login-form">
      <h1>Congratulations! You are logged in.</h1>
    </div>
    `
    location.href="../../../ontarioevents/index.html";
    }
    if(document.getElementById('username').value == peopleDetails[4].username && document.getElementById('password').value ==peopleDetails[4].password){
      let container = document.getElementsByClassName('login');
      container[0].innerHTML = ` <div class="login-header">
      <h1>Login</h1>
    </div>
    <div class="login-form">
      <h1>Congratulations! You are logged in.</h1>
    </div>
    `
    location.href="../../../ontarioevents/index.html";
    }
  
    else{

      console.log("Incorrect")
       let name = document.getElementById('nameText');
       name.innerHTML = `<h3 style="margin-left:30px;">Incorrect Username or Password</h3><br><hr>
                          <h4>Enter Username : </h3>`;
    }

    console.log("User Name : "+userName);
    console.log("password : "+password);
 
}