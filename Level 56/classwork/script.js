// Select elements
const ageInput = document.getElementById('age');
const experienceInput = document.getElementById('experience');
const checkButton = document.getElementById('check');

// Add event listener for button click
checkButton.addEventListener('click', () => {
    const age = parseInt(ageInput.value);
    const experience = parseInt(experienceInput.value);

    if (age > 25 && experience > 5) {
        console.log("თქვენ მიღებული ხართ სამსახურში!");
    } else {
        console.log("თქვენ არ ხართ მიღებული.");
    }
});
