let count = 0

//function without parameters
function addToCount() {
    let localCount = 1

    count = count + 1
    localCount = localCount + 1

    console.log("Count is: ", count)
    console.log("Local Count is: ", localCount)

}

addToCount()




//function with parameter
function displayName(firstName, lastName) {
    alert(firstName, lastName)
}

displayName("John", "Doe")
displayName("Ade", "Johnson")




//function with returns
function getFullName(firstName, lastName) {
    const fullName = firstName + " " + lastName
    return fullName
}

let fullname = getFullName("John", "Doe")
alert(fullname)




//function expression
const sayHello = function () {
    console.log("Hello World")
}

sayHello()





//callback functions
function displayUser(displayType, showFullName, showUserName) {
    if (displayType == "full") {
        showFullName()
    } else {
        showUserName()
    }
}

function showFullName() { alert("John Doe") }
function showUserName() { alert("JohnDoe234") }

displayUser("full", showFullName, showUserName)



//Arrow functions
let sum = (a, b) => a + b;
let sayHelloWorld = () => alert("Hello World!");


let count1=0;
function addCount(){
    while (count1<3){
    count++
    console.log(count1)
}


}

// addCount()

function displayN(fName, lName){
    alert(fName + ' ' + lName);
}

displayN("Esther", "Amoo")


function getName( fiName='Esther', laName='Amoo'){
    let fullName= fiName + " " + laName
     document.getElementById('name').innerHTML=fullName
}
    getName()

function addNum(num1, num2){
    let result = num1 + num2
    return result
}
let result1= addNum(10, 5);
alert(result1)