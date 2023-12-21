var form = document.querySelector(".register");

var messagePhone = document.getElementById("message_phone");
var messageEmail = document.getElementById("message_email");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();


    if(phone == ""){
        messagePhone.textContent = "Telefon nomrenizi duzgun daxil edin";
        messagePhone.style.color = 'red';
        var inputPhone = document.getElementById("phone");
        inputPhone.style.border = "1px solid red";
        return;
    }else {
        messagePhone.textContent = ""
        var inputPhone = document.getElementById("phone");
        inputPhone.style.border = "1px solid #ccc";
    }

    
   

    if (email == "") {
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
    

})