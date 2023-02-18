//------------------------------------//Class Task//-----------------------------------//
var cities = ["Karachi", "Lahore", "Multan", "Rawalpindi", "Shukhur"]
var inp = prompt("Enter Your Name")
var firstLetter = inp.slice(0, 1)
var toUpper = firstLetter.toUpperCase()
var allLetter = inp.slice(1)
var toLower = allLetter.toLowerCase()
var concat = toUpper + toLower
var checking = false
for (var i = 0; i < cities.length; i++) {
    if (concat === cities[i]) {
        checking = true
    }
}
if (checking === true) {
    document.write("City Found")
} else {
    document.write("City Not Found")
}