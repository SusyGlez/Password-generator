const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("passwordOne")
let password2 = document.getElementById("passwordTwo")
let generator = document.getElementById("btn")
let fullPasswordOne = ""
let fullPasswordTwo = ""
let characterSelector = document.getElementById("characterLength")
let openEye = document.getElementById("open")
let closeEye = document.getElementById("closed")

generator.addEventListener("click", function() {
    fullPasswordOne = ""
    fullPasswordTwo = ""
    for (let i = 0; i < characterSelector.value; i++) {
        const generateOne = Math.floor(Math.random() * characters.length);
        fullPasswordOne += characters[generateOne]
        
        const generateTwo = Math.floor(Math.random() * characters.length);
        fullPasswordTwo += characters[generateTwo]      
    }
    password1.value = fullPasswordOne
    password2.value = fullPasswordTwo  
})

function toggleEye() {
    if (password1.type === "password") {
        password1.type = "text";
        password2.type = "text";
        closeEye.style.display = "none";
        openEye.style.display = "block";
    } else {
        password1.type = "password";
        password2.type = "password";
        closeEye.style.display = "block";
        openEye.style.display = "none";
    }
}

function copyPaste1() {
    password1.select();
    navigator.clipboard.writeText(password1.value);
    alert("Copied" + password1.value);
}

function copyPaste2() {
    password2.select();
    navigator.clipboard.writeText(password2.value);
    alert("Copied" + password2.value);
}