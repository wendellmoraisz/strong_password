const letterNumber = document.getElementById('chk0')
const upperCase = document.getElementById('chk1')
const res = document.querySelector('.result-txt')
const symbols = ['*','!','#','$','@']

document.getElementById('go').addEventListener('click', getPassword)
function getPassword(){
    let userPassword = document.getElementById('password').value
    if (userPassword == ''){
        window.alert('Insira algum valor :)')
    }else {

        userPassword = Array.from(userPassword)
        
        if (upperCase.checked) {
            userPassword = toUpper(userPassword)
        }
        
        if (letterNumber.checked) {
        userPassword = toNumber(userPassword)
    }

    userPassword.push(symbols[Math.floor(Math.random() * (symbols.length))])
    userPassword.unshift(symbols[Math.floor(Math.random() * (symbols.length))])
    userPassword.push(Math.floor(Math.random() * (10)))
    userPassword.push(String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97))
    res.innerHTML = userPassword.toString().replace(/,/g,'')
    document.querySelector('.result').style.display = 'flex'
}
}

function toNumber(word) {
    return word.map(e => {
         switch(e) {
            case 'i':
            case 'I':
                e = 1
                break
            case 'o':
            case 'O':
                e = 0
                break
            case 'a':
            case 'A':
                e = 4
                break
            case 'e':
            case 'E':
                e = 3
                break
        }
        return e
    })
}

function toUpper(word) {
    return word.map(e => Math.random() < 0.5 ? e.toUpperCase() : e = e)
}

document.getElementById('copy').addEventListener('click', exeCopy)
async function exeCopy() {
    let copied = document.querySelector('.copied')
    let txt = document.querySelector('.result-txt').innerHTML
    await navigator.clipboard.writeText(txt)
    copied.style.display = 'flex'
    copied.style.animation = 'copiedAnimation .7s linear 0s 1 normal forwards'
    setTimeout(function() {
        copied.style.animation = ""
        copied.style.display = 'none'
     }, 700);
}