const dropdownIn = document.getElementById('dropdown-in');
const dropdownOut = document.getElementById('dropdown-out');
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
function switchUnit() {
    let option = document.getElementById('')
}