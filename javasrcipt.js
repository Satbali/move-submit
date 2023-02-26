var btn = document.getElementById('btn')
var text = document.getElementById('text')
var para = document.getElementById('para')
var demo = document.getElementById('demo')

btn.addEventListener('click', () => {
    if (text.value == "") {
        btn.style.animation = 'slide 5s infinite'
        text.placeholder = "Likkh naaa abbbb"
    } if (text.value == 'likkh diya!') {
        btn.style.animation = "";
    } else {

    }
})
setTimeout(() => {
    para.style.display = 'block'
}, 2000);
