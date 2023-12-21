var form = document.querySelector(".registr");
var messageEmail = document.getElementById("message_email");
var messagePassword = document.getElementById("message_password");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value.trim();
   

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

})