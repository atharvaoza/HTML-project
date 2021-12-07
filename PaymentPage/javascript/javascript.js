console.log("Hello");


function refresh() {
    
    alert('Sorry! Timeout!.\nPlease enter details again')
    window .location.reload();
    
}


function submit() {

   
    
  
    
    console.log('JAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYy');

    if(document.getElementById("name").value.length == 0){
        alert("name is required!");


    }

    else{
    let name = document.getElementById("name").value;
    console.log(name);
    let password = document.getElementById("password").value;
    console.log(password);

    
 
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }

    let password1 = document.getElementById('password').value;
    let password2 = (parseInt(password1));

    let cardNumber = document.getElementById('card-number').value;
    
    if(cardNumber.length == 16){

        if(password1.length == 3){
            let container = document.getElementsByClassName('container');
            console.log(container[0]);
        
        window.alert('Your otp is : '+OTP);
        console.log(OTP);
        const OTP1 = parseInt(OTP);
        console.log(OTP1);
        
        
            container[0].innerHTML = `  <h1>OTP : </h1>
           
                <div class="owner">
                <br>
                <br>
                <br>
                    <h3>Enter OTP </h3><br><br><br><br>
                    <div class="input-field">
                        <input type="text" id="otp">
                    </div>
                </div>
            
            <br><br><br><br>
            <div class="button">
                <button onclick="otpSubmit()">Submit</button>
            </div>
        `;

    

        window.setInterval('refresh()', 10000); 
    
        

  

        
        
        
        }
        else{
            alert('incorrect CVV');
            
        }

    }

    else{
        alert('incorrect card-number')
    }

    

   

 
    
}


    
  }

  





function otpSubmit(){
    alert('Payment accepted');
    location.reload();
    // const otp2 = parseInt(document.getElementById('otp').value)
    // if(document.getElementById('otp').value.length == 0){
    //     alert("Enter OTP");
    // }
    // else{
    //     if(otp2 == OTP1){
    //         alert("Congratulations!/nYour Payment is accepted.");
    //     }
    //     else{
    //         alert("OTP Incorrect");
    //         let container = document.getElementsByClassName('container');
    //         console.log(container[0]);
    //         container[0].innerHTML = `  <h1>OTP</h1>
           
    //             <div class="owner">
    //             <br>
    //             <br>
    //             <br>
    //                 <h3>Enter OTP </h3><br><br><br><br>
    //                 <div class="input-field">
    //                     <input type="text" id="otp">
    //                 </div>
    //             </div>
            
    //         <br><br><br><br>
    //         <div class="button">
    //             <button onclick="otpSubmit()">Submit</button>
    //         </div>
    //     `;
        
         

    //     }
    // }
}

