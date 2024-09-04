


let title = document.getElementById("title");
let Sign_Up_a = document.getElementById("Sign-Up-a");
let Sign_in_a = document.getElementById("Sign-in-a");
let account_forget = document.getElementById("account-forget");
let square = document.getElementById("square");
let square2 = document.getElementById("square2");
let form = document.getElementById("form");  
let sign_in_email = document.getElementById("sign-in-email");
let sign_in_password = document.getElementById("sign-in-password");

square2.style.display = "none";

Sign_Up_a.onclick = function() {
    square.style.display = "none";
    square2.style.display = "block";
}

Sign_in_a.onclick = function() {
    square.style.display = "block";
    square2.style.display = "none";
}





// Email and Password validation functions
function emailCheck(value) {
    let emailregexp = /^[a-zA-Z0-9._]+@(gmail|yahoo)\.(com|net)$/;
    return emailregexp.test(value);
}

function passwordCheck(value) {
    let passwordregexp = /^[a-zA-Z0-9#@$_.]+$/;
    return passwordregexp.test(value);
}






let form2=document.getElementById("form2");
let firstName=document.getElementById("fN-signup");
let lastName=document.getElementById("LN-signup");
let email_signup=document.getElementById("email-signup");
let password_signup=document.getElementById("password-signup");
let confirm_signup=document.getElementById("confirm-signup");

let data_array = JSON.parse(localStorage.getItem("SignupInfo")) || [];

form2.onsubmit=function(){
    if(firstName.value !=="" && lastName.value !=="" && email_signup.value !=="" && password_signup.value !=="" && confirm_signup.value !=="" ){
        if(emailCheck(email_signup.value) && passwordCheck(password_signup.value)){
            if(password_signup.value===confirm_signup.value){
               let check= confirm("Are you want to save?");
               if(check===true){
                let data={
                    FirstName:firstName.value,
                    LastName:lastName.value,
                    Email:email_signup.value,
                    Password:password_signup.value,
                   }
                   data_array.push(data);
                   window.localStorage.setItem("SignupInfo",JSON.stringify(data_array));
                   return true;
               }else{
                console.log("Don't Save");
               }
             
            }else{
                alert("Password Not matching with confirm");
                return false;
            }
        }else{
            alert("Invalid email or password");
            return false;
        }
    }else{
        alert("all Feild Requierd");
        return false;
    }
    
}








form.onsubmit = function() {

    if(sign_in_email.value ==="" || sign_in_password.value===""){
        alert("fill the field first to check data");
        return false;
    }else{
        for(let i=0;i<data_array.length;i++){
            if(data_array[i].Email===sign_in_email.value && data_array[i].Password===sign_in_password.value){
                return true;
            }
        }
        alert("you are not registerd in this Website sign up first");
        return false;
    }
}


//handle forget password click

function Forget_password(){
    if(sign_in_email.value===""){
        alert("enter your email to predict your Password");
    }else{
        for(let i=0;i<data_array.length;i++){
            if(data_array[i].Email===sign_in_email.value){
                sign_in_password.value=data_array[i].Password;
            }
        }
    }
}


