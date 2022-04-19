// console.log("it works")

let ersteZahl = document.getElementById('jahrEins');
let zweiteZahl = document.getElementById('jahrZwei')
// console.log(doubleZahl);

function results() {
    // console.log(test);
    output.innerHTML = 'Ihr habt ' + Math.abs(ersteZahl.value - zweiteZahl.value) + ' Jahre unterschied'
}