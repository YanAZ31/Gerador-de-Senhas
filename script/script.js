// Campo onde é gerada a senha
const passwordBox = document.getElementById("password")

// Verificadores de checkbox
const checkNumber = document.getElementById("number");
const checkUppercase = document.getElementById("uppercase");
const checkSymbol = document.getElementById("symbol");
const checkLowercase = document.getElementById("lowercase");
// Caracteres
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const number = "0123456789"
const symbol = "@#$%¨&*()_+/?+."
const display = document.querySelector(".display")
let allChars = ""
let toCopy = ""

// Função geradora de senha
function createPassword(){
    hideTootip(display)
    // Define o tamanho da senha
    const lenght = document.getElementById("passwordLenght").value;
    let password = ""
    let logicalOperation
    // Validação inicial 
    // if (checkLowercase.checked == false && checkNumber.checked == false && checkUppercase.checked == false && checkSymbol == false){
    //    
    //     passwordBox.value = "Senha"
    // //    Quebra execução do código se nenhum tipo de dado for especificado
    //     return
       
    // }
    
   
    
    // Verifica se o campo Lowercase está ativado, se sim adicionará caracteres na senha
    // allchars é um super array com todos os caracteres utilizados
    if(checkLowercase.checked){
        // password += lowercase[Math.floor(Math.random()*lowercase.length)]
        allChars+= lowercase
        // console.log("lowercase ativado")
        
    }
    
    

  if(checkNumber.checked){
        // password += number[Math.floor(Math.random()*number.length)]
        allChars+= number
        // console.log("Number ativado")
    }
   
   if(checkUppercase.checked){
        // password += uppercase[Math.floor(Math.random()*uppercase.length)]
        allChars+= uppercase
        // console.log("Uppercase ativado")
    }
    

   if(checkSymbol.checked){
        // password += symbol[Math.floor(Math.random()*symbol.length)]     
        allChars+= symbol     
        // console.log("Symbol ativado")       
    }
    
   logicalOperation = checkLowercase.checked + checkNumber.checked + checkUppercase.checked + checkSymbol.checked
// console.log(logicalOperation)
  
    // Se todas as caixas estiverem desativadas
    if(logicalOperation == 0){
        alert("Por favor, selecione um tipo de caracter")
        passwordBox.value = "Senha"
        return
    }
    //  faz a escolha aleatória entre todos caracteres envolvidos
    while(lenght > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]

    }

    // if (password == undefined){
    //     alert("Por favor, selecione um tipo de dado")
    // }

    passwordBox.value = password
    // Zera array de caracteres para a próxima execução
    allChars = [""]
}

// Função que copia a senha gerada para a clipboard
function copyPassword(){
    if(passwordBox.value == ""){
        alert("Gere uma senha primeiro")
        return
    }
    passwordBox.select();
    // Permite copy past no mobile
    passwordBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordBox.value)
    showTootip(display)
    
    
}
console.log(display)

function showTootip(evt) {
    
    if (evt.classList.contains('display')) {
      evt.classList.add('show')
    }
  }

  function hideTootip(evt) {
    if (evt.classList.contains('display')) {
      evt.classList.remove('show')
    }
  }