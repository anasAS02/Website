// Calculation of remaining time 
let count = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() =>{  
// The Time Now
let now = new Date().getTime();
// The difference between the two dates
let difference = count - now;
// Days
let days = Math.floor(difference / (1000 * 60 * 60 * 24));
// Hours
let hours = (Math.floor((difference % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60));
// Minutes
let minutes = (Math.floor((difference % (1000 * 60 * 60)) / 1000 / 60));
// Seconds
let seconds = (Math.floor((difference % (1000 * 60)) / 1000));

// Add The Days
document.getElementById('days').innerHTML = days;
// Add The Hours
document.getElementById('hours').innerHTML = hours;
// Add The Minutes
document.getElementById('minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
// Add The Seconds
document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

if(difference < 0){
    clearInterval(counter);
}
}, 1000)

