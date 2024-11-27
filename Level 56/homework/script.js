document.getElementById('submit-button').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (email && passwordRegex.test(password) && terms) {
        if (confirm('Would you like to enable dark mode?')) {
            document.body.classList.add('dark-mode');
        }
        document.getElementById('form-container').classList.add('hidden');
        document.getElementById('main-site').classList.remove('hidden');
    } else {
        alert('Please fill all fields correctly and accept terms.');
    }
});

const programmers = {
    programmer1: {
        name: "John Doe",
        info: "Expert in Frontend Development",
        image: "https://via.placeholder.com/150"
    },
    programmer2: {
        name: "Jane Smith",
        info: "Specialist in Backend Systems",
        image: "https://via.placeholder.com/150"
    },
    programmer3: {
        name: "Sam Wilson",
        info: "Full Stack Developer",
        image: "https://via.placeholder.com/150"
    }
};

document.querySelectorAll('input[name="programmer"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const selected = programmers[this.value];
        const infoContainer = document.getElementById('info-container');
        infoContainer.innerHTML = `
            <h2>${selected.name}</h2>
            <p>${selected.info}</p>
            <img src="${selected.image}" alt="${selected.name}">
        `;
    });
});
