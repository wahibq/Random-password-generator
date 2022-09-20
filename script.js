let generateBtnEl = document.getElementById("generate-btn")
let passwordDisplayEl = document.getElementById("password-display")
let numRendererBoxEl = document.getElementById("num-renderer")
let numCheckBoxEl = document.getElementById("has-numbers")
let symbolsCheckBoxEl = document.getElementById("has-symbols")
let incrementBtnEl = document.getElementById("increment-btn")
let decrementBtnEl = document.getElementById("decrement-btn")
let copyBtnEl = document.getElementById("copy-btn")
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password = ""
let charWithoutSymbols = []
let charWithoutNumbers = []
let symbolsOnly = []
let numChecked = false
let symbolChecked = false
//loop to push characters without symbols 
for(let i = 0; i < characters.indexOf("9") + 1; i++){
   charWithoutSymbols.push(characters[i])
}
//loop to push characters without numbers
for(let i = 0; i < characters.indexOf("z") + 1; i++){
    charWithoutNumbers.push(characters[i])
}
//loop to push only symbols from the characters array 
for(let i = characters.indexOf("~"); i < characters.length; i++){
    symbolsOnly.push(characters[i])
}
//array variable to hold only characters with symbols without numbers
let charWithSymbols = [...symbolsOnly, ...charWithoutNumbers]
// variable count to hold the minimum and maximum value can be incremented or decremented by the user
let charCount = 15
//event listeners for increment and decrement functionality
incrementBtnEl.addEventListener('click', charCountIncrementer)
decrementBtnEl.addEventListener('click', charCountDecrementer)
function charCountIncrementer(){
    if(charCount < 30){
        charCount += 1
        numRendererBoxEl.value = charCount
    }
}
function charCountDecrementer(){
    if(charCount >=16 ){
        charCount -- 
        numRendererBoxEl.value = charCount
    }
}
//password generator functionality
generateBtnEl.addEventListener('click', generatePassword)
function generatePassword(){
    password = ""
    let generatedPassword;
    numChecked = numCheckBoxEl.checked ? true: false
    symbolChecked = symbolsCheckBoxEl.checked ? true: false
    if(numChecked && symbolChecked == false){
        for(let i =0; i < charCount; i++){
            generatedPassword = charWithoutSymbols[Math.floor(Math.random()*charWithoutSymbols.length)]
            password += generatedPassword
        }
    }else if(symbolChecked && numChecked == false){
        for(let i = 0; i < charCount; i++){
            generatedPassword = charWithSymbols[Math.floor(Math.random()*charWithSymbols.length)]
            password +=  generatedPassword
        }
    }else 
        for(let i =0; i< charCount; i++){
            generatedPassword = characters[Math.floor(Math.random()*characters.length)]
            password +=  generatedPassword
        }
    passwordDisplayEl.value = password
}
//functionality to copy to clipboard
copyBtnEl.addEventListener('click', copyToClipboard)
function copyToClipboard(){
    if(!passwordDisplayEl.value == ""){
        navigator.clipboard.writeText(password).then(()=>{
            alert("password copied to clipboard")
        })
    }
}
//for mozilla
function resetInputVal(){
    passwordDisplayEl.value = ""
}
//theme functionality
let mainEl = document.querySelector(".main-content")
let headingEl = document.querySelector(".heading")
let themeBtn = document.querySelector(".theme-btn")
let numberLabelEl = document.getElementById("number-label")
let symbolLabelEl = document.getElementById("symbol-label")
let btnState = themeBtn.textContent.trim()
themeBtn.addEventListener('click', ()=> {
    if(btnState == "Dark"){
        btnState = "Light"
        themeBtn.innerHTML = btnState
        numberLabelEl.style.color = "white"
        symbolLabelEl.style.color = "white"
    }else{
        btnState = "Dark"
        themeBtn.innerHTML = btnState
        numberLabelEl.style.color = "black"
        symbolLabelEl.style.color = "black"
    }
    mainEl.classList.toggle("dark-mode")
    headingEl.classList.toggle("light-heading")
})
