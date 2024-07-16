const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height == ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid Height";
    } else if(weight == ' ' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid Weight";
    } else {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        results.innerText = `Your BMI is ${bmi}`;

        const underWeight = document.querySelector('#under-weight');
        const normalWeight = document.querySelector('#normal-weight');
        const overWeight = document.querySelector('#overweight');

        if(bmi < 18.6) {
            underWeight.style.color = "red";
        } else if(bmi >= 18.6 && bmi < 24.9) {
            normalWeight.style.color = "red";
        } else if(bmi >= 24.9) {
            overWeight.style.color = "red";
        }

        setTimeout(() => {
            form.reset();
            results.innerHTML = ' ';
            underWeight.style.color = "black";
            normalWeight.style.color = "black";
            overWeight.style.color = "black";
        }, 5000);
    }
});
