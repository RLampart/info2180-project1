/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded",function (){
    submit = document.getElementsByClassName("btn")[1];
    submit.onclick = function(event){
    event.preventDefault();
    msg = document.getElementsByClassName("message")[0];
    if (msg.hasChildNodes())
        msg.removeChild(msg.firstChild);
    email = document.getElementById("email");
    response = email.value;
    var emailtype = /^\w+(.\w)*@(\w+.)+(edu|com)/;
    if (emailtype.test(response)){
        text = document.createTextNode("Thank you! Your email address "+ response+" has been added to our mailing list");
        msg.appendChild(text);
        email.value = "";
        email.placeholder = "Email address";
    }  
    else{
        email.value = "";
        email.placeholder = "Please enter a valid email address.";
    }      
}
})