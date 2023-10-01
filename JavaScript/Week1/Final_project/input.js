function displayUser(){
    let userName= window.prompt("enter user your name");
while(validateName(userName)==false)(
    userName=window.prompt("invalid username")
)


let password = window.prompt("enter your password")

while(validatePassword(password)==false){
    password=window.prompt("invalid password")
}
console.log(userName,password)
}

displayUser()
alert("goodbye")
function validateName(userName){
    if(userName == null){
        return false
    }
else if(userName.length > 10){
return false
    }else{
        return true
    }
}

function validatePassword(password){
        
    if(password== null){
        return false
    }else if(password.length<6){
        return false
    }else{
        return true
    }
    }


   