* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}


body {
    background-color: white;
    font-family: sans-serif;
    margin: auto;
}


/*navigation bar*/

header {
    background-color: red;
    display: flex;
    justify-content: space-between;
    flex-flow: column-wrap;
    height: 90px;
    flex-direction: row;
    align-items: center;
}

header .nav_events {
    position: relative;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;  
    margin-left: 40px;  
}

header ul {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    list-style: none;
    align-items: center;
    margin-right: 40px;
}

header ul li {
    position: relative;
    list-style: none;
}

header ul li a {
    position: relative;
    text-decoration: none;
    color: white;
}

header a:hover {
    color: #000000;
    text-decoration: underline;
}


/* For screen size greater than 740px*/
@media screen and (min-width: 740px) {
    nav {
        height: 8vh;
        padding: 10px 70px 10px 70px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    nav ul {
        flex-direction: row;
    }
}


h2 {
    text-align: center;
    margin: 20px 0px 50px 0;
    font-size: 20px;
}

h3 {
    text-align: center;
    padding: 10px;
    margin: 20px 0px 50px 0;
    font-size: 20px;
    color: #000000;
}

form {
    background: #fff;
    padding: 4em 4em 2em;
    max-width: 500px;
    margin: 50px auto 50px;
    box-shadow: 0 0 1em #222;
}

div {
    margin-bottom: 1em;
    position: relative;
}

.submit {
    width: 200px;
    height: 35px;
    margin-left: 80px;
    text-align: center;
}

input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0; 
}

input[type="text"],
  input[type="email"],
   input[type="password"]
   {
    border: 1px solid #dbdbdb;
    padding: .8em .5em;
   }
   
   label {
    position: relative;
    font-size: 14px;
}

span {
    color: red;
}

/* footer*/

footer {
    font-family: sans-serif;
    background-color:red;
    color: white;
}

.footer-nav{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

footer ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
}

footer a {
    font-size: 1.1rem;
    font-family: sans-serif;
    color: white;
    text-decoration: none;
   }

   footer a:hover {
    color: #000000;
    text-decoration: underline;
}

@media screen and (min-width: 740px) {

.footer-nav{
    justify-content: space-around;
    padding-top: 1.3rem;
}
}

.copyright {
    display: flex;
    justify-content: center;
}

.fa {
    font-size: 20px;
}
