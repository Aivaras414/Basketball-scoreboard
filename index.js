let homeScore = 0
let guestScore = 0
document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").textContent = guestScore

function onePointHome(){
   homeScore +=1
   document.getElementById("home-score").textContent = homeScore
}
function twoPointHome(){
   homeScore +=2
   document.getElementById("home-score").textContent = homeScore
}
function threePointHome(){
   homeScore +=3
   document.getElementById("home-score").textContent = homeScore
}

function onePointGuest(){
   guestScore +=1
   document.getElementById("guest-score").textContent = guestScore
}
function twoPointGuest(){
   guestScore +=2
   document.getElementById("guest-score").textContent =guestScore
}
function threePointGuest(){
   guestScore +=3
   document.getElementById("guest-score").textContent = guestScore
}
function resetPoints(){
    document.getElementById("guest-score").textContent = 0
    document.getElementById("home-score").textContent = 0
    guestScore = 0;
    homeScore = 0;
}