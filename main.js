const dropdownIn = document.getElementById('dropdown-in');
const dropdownOut = document.getElementById('dropdown-out');
const selected1 = document.getElementById('selected1');
const selected2 = document.getElementById('selected2');
const answer = document.getElementById('answer');
const temperature = document.getElementById('temperature');
dropdownIn.style.display = 'none';
dropdownOut.style.display = 'none';

function displayToggle(x) {
    if (x == 'dropdownIn') {
        if (dropdownIn.style.display == 'none') {
            dropdownIn.style.display = 'inline-block';
        } else if (dropdownIn.style.display == 'inline-block') {
            dropdownIn.style.display = 'none';
        }
    } else if (x == 'dropdownOut') {
        if (dropdownOut.style.display == 'none') {
            dropdownOut.style.display = 'inline-block';
        } else if (dropdownOut.style.display == 'inline-block') {
            dropdownOut.style.display = 'none';
        }
    }
}
function switchUnit(x, y) {
    if (y == 1) {
        selected1.innerHTML = x;
        dropdownOut.style.display = 'none';
    } else if (y == 2) {
        selected2.innerHTML = x;
        dropdownIn.style.display = 'none';
    }
}

function calculate() {
    let tempInt = Number(temperature.value);
    if (selected1.innerHTML == "Farenheight") {
        if (selected2.innerHTML == "Celsius") {
            tempInt = tempInt - 32;
            tempInt = tempInt * 5/9;
            answer.innerHTML = tempInt;
        } else if (selected2.innerHTML == "Kelvin") {
            tempInt = tempInt - 32;
            tempInt = tempInt * 5/9;
            tempInt = tempInt + 273.15;
            answer.innerHTML = tempInt;
        } else {
            answer.innerHTML = "Unable to calculate.";
        }
    } else if (selected1.innerHTML == "Celsius") {
        if (selected2.innerHTML == "Farenheight") {
            tempInt = tempInt * 9/5;
            tempInt = tempInt + 32;
            answer.innerHTML = tempInt;
        } else if (selected2.innerHTML == "Kelvin") {
            tempInt = tempInt + 273.15;
            answer.innerHTML = tempInt;
        } else {
            answer.innerHTML = "Unable to calculate."
        }
    } else if (selected1.innerHTML == "Kelvin") {
        if (selected2.innerHTML == "Farenheight") {
            tempInt = tempInt - 273.15;
            tempInt = tempInt * 9/5;
            tempInt = tempInt + 32;
            answer.innerHTML = tempInt;
        } else if (selected2.innerHTML == "Celsius") {
            tempInt = tempInt - 273.15;
            answer.innerHTML = tempInt;
        } else {
            answer.innerHTML = "Unable to calculate."
        }
    }
}