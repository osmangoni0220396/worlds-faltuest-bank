document.getElementById("login-button").addEventListener("click", function(){
    const emailId = getInputText("email-id");
    const yourPassword = getInputText("your-password");
    if(emailId === "tipsuultan@gmail.com" && yourPassword === "2747489@Aa"){
        window.location.href = "main-page.html";
    }
    else {
        window.alert("Inavlid email or password");
    }
   
})