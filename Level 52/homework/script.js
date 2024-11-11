 // ფუნქცია, რომელიც განაახლებს საჭირო Input ელემენტებს ფორმის მიხედვით
 function updateInputs() {
    const shape = document.getElementById('shape').value;
    const inputsDiv = document.getElementById('inputs');
    inputsDiv.innerHTML = ''; // დავასუფთავოთ წინა ფორმის ელემენტები

    if (shape === 'rectangle') {
        inputsDiv.innerHTML = `
            <label for="length">სიგრძე:</label>
            <input type="number" id="length"><br>
            <label for="width">სიგანე:</label>
            <input type="number" id="width">
        `;
    } else if (shape === 'circle') {
        inputsDiv.innerHTML = `
            <label for="radius">რადიუსი:</label>
            <input type="number" id="radius">
        `;
    } else if (shape === 'triangle') {
        inputsDiv.innerHTML = `
            <label for="side1">პირველი გვერდი:</label>
            <input type="number" id="side1"><br>
            <label for="side2">მეორე გვერდი:</label>
            <input type="number" id="side2"><br>
            <label for="side3">მესამე გვერდი:</label>
            <input type="number" id="side3">
        `;
    }
}

// ფუნქცია ფართობის გამოთვლისთვის
function calculateArea() {
    const shape = document.getElementById('shape').value;
    let area;

    if (shape === 'rectangle') {
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        if (isNaN(length) || isNaN(width)) {
            area = 'გთხოვთ შეიყვანოთ სიგრძე და სიგანე.';
        } else {
            area = length * width;
        }
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        if (isNaN(radius)) {
            area = 'გთხოვთ შეიყვანოთ რადიუსი.';
        } else {
            area = Math.PI * radius * radius;
        }
    } else if (shape === 'triangle') {
        const side1 = parseFloat(document.getElementById('side1').value);
        const side2 = parseFloat(document.getElementById('side2').value);
        const side3 = parseFloat(document.getElementById('side3').value);

        if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
            area = 'გთხოვთ შეიყვანოთ ყველა გვერდი.';
        } else {
            // ჰერონის ფორმულა
            const s = (side1 + side2 + side3) / 2;
            area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        }
    }

    document.getElementById('result').innerText = `ფართობი: ${area}`;
}

// აქტიურად ვახორციელებთ ფორმის განახლებას, როცა ხდება ფიგურის ტიპის არჩევა
document.getElementById('shape').addEventListener('change', updateInputs);

// პირველადი ფიგურის ტიპის განახლება
updateInputs();