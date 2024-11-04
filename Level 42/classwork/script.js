const p = document.getElementById('text');
const btn = document.getElementById('addText');


btn.addEventListener('click', function() {
    p.textContent = "Hello, World!";
})