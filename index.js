let fullName = prompt("Lütfen Adınızı Giriniz.")
console.log(fullName)




const  countDate = new Date('sep 1,2024 00:00:00'). getTime();

function newYear(){
    const now = new Date().getTime();
let gap = countDate - now;
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let h = Math.floor(gap / (hour));
let m = Math.floor((gap % (hour)) / (minute));
let s = Math.floor((gap% (minute)) / (second));

document.getElementById('hour').innerText = h;
document.getElementById('minute').innerText = m;
document.getElementById('second').innerText = s;

}

setInterval(function(){
    newYear()

},1000)