
var inputPassword = document.getElementById("password");
var eyeButton = document.querySelector(".goz")
var goz1 = document.querySelector(".goz1")
var goz2 = document.querySelector(".goz2")

eyeButton.addEventListener("click" , function(event){

    event.preventDefault();

    if(inputPassword.type == "password"){
        inputPassword.type = "text";
        goz1.style.display = "block"
        goz2.style.display = "none"

    }
    else{
        inputPassword.type = "password";
        goz2.style.display = "block"
        goz1.style.display = "none"

    }
})



var form = document.querySelector(".registration");
var messageEmail = document.getElementById("message_email");
var messagePassword = document.getElementById("message_password");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    

    if (email === "") {
        messageEmail.textContent = "Email adresini düzgün yazın";
        messageEmail.style.color = 'red';
        var inputEmail = document.getElementById("email");
        inputEmail.style.border = "1px solid red";
        return;
    } else {
        messageEmail.textContent = ""
        var inputEmail = document.getElementById("email");
        inputEmail.style.border = "1px solid #ccc";
    }

    if(!email.includes("@")){
        messageEmail.textContent = "Email adinda @ isaresinden istifade etmelisiniz";
        messageEmail.style.color = 'red';
        inputEmail.style.border = "1px solid red"
    }



    if (password === "") {
        messagePassword.textContent = "Email adresini düzgün yazın";
        messagePassword.style.color = 'red';
        var inputPassword = document.getElementById("password");
        inputPassword.style.border = "1px solid red";
        return;
    } else {
        messagePassword.textContent = ""
        var inputPassword = document.getElementById("password");
        inputPassword.style.border = "1px solid #ccc";
    }


    
    
});