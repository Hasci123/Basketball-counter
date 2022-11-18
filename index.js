let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")
let count = 0
let countGuest = 0


function plusOneHome() {
    count += 1
    homeScore.textContent = count     
}

function plusTwoHome() {
    count += 2
    homeScore.textContent = count
}

function plusThreeHome() {
    count += 3
    homeScore.textContent = count
}

function plusOne() {
    countGuest += 1
    guestScore.textContent = countGuest 
}

function plusTwo() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function plusThree() {
    countGuest += 3
    guestScore.textContent = countGuest
}