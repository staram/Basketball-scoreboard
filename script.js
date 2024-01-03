let homePoints = document.getElementById("home-points") 
let guestPoints = document.getElementById("guest-points")
let homePointsNumber = 0
let guestPointsNumber = 0

let previousPoints = document.getElementById("previous-points")

//add points to HOME scoreboard
 function plusHomePoint1() {
    homePointsNumber += 1
    homePoints.innerText = homePointsNumber
 }
 function plusHomePoint2() {
    homePointsNumber += 2
    homePoints.innerText = homePointsNumber
 }
 function plusHomePoint3() {
    homePointsNumber += 3
    homePoints.innerText = homePointsNumber
 }

//add points to GUEST scoreboard
function plusGuestPoint1() {
    guestPointsNumber += 1
    guestPoints.innerText = guestPointsNumber
 }
 function plusGuestPoint2() {
    guestPointsNumber += 2
    guestPoints.innerText = guestPointsNumber
 }
 function plusGuestPoint3() {
    guestPointsNumber += 3
    guestPoints.innerText = guestPointsNumber
 }

// Reset all numbers
function resetPoints() {
    let previousPointsString = homePointsNumber + "/" + guestPointsNumber + " - "
    previousPoints.textContent += previousPointsString
    
    homePointsNumber = 0
    guestPointsNumber = 0
    homePoints.innerText = homePointsNumber
    guestPoints.innerText = guestPointsNumber
  
}