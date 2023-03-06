const btn = document.getElementById('btn')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')


// User Credintials can be changed
const username1 = 'softy_123'
const email1 = 'softy@gmail.com'
const password1 = '123'

//Game changer
var a = 0;
btn.addEventListener('click', () => {
    if (username.value == username1 && email.value == email1 && password.value == password1) {
        console.log("success");
    } else {
        if (a == 0) {
            btn.style.transform = 'translateX(-110px)'
            a = 1
            return false
        }
        if (a = 1) {
            btn.style.transform = 'translateX(110px)'
            a = 0
            return false
        }
    }
})
