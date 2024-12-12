
let counter = 0;
const counterElement = document.getElementById('counter');
const messageElement = document.getElementById('message');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const toggleMessageBtn = document.getElementById('toggleMessage');
const toggleText = document.getElementById('toggleText');

function updateCounter() {
    counterElement.textContent = counter;

    // Check if counter is 0 and display message
    if (counter === 0) {
        resetBtn.classList.add('disabled');
        resetBtn.disabled = true;
        messageElement.style.visibility = 'visible';
    } else {
        resetBtn.classList.remove('disabled');
        resetBtn.disabled = false;
        messageElement.style.visibility = 'hidden';
    }

    // Check if counter is out of bounds (100 or -100)
    if (counter >= 100 || counter <= -100) {
        increaseBtn.disabled = counter >= 100;
        decreaseBtn.disabled = counter <= -100;
    } else {
        increaseBtn.disabled = false;
        decreaseBtn.disabled = false;
    }
}

increaseBtn.addEventListener('click', () => {
    if (counter < 100) {
        counter++;
        updateCounter();
    }
});

decreaseBtn.addEventListener('click', () => {
    if (counter > -100) {
        counter--;
        updateCounter();
    }
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

// Toggle the visibility of the text
toggleMessageBtn.addEventListener('click', () => {
    if (toggleText.style.visibility === 'hidden') {
        toggleText.style.visibility = 'visible';
    } else {
        toggleText.style.visibility = 'hidden';
    }
});

// Initial call to set the correct state
updateCounter();
