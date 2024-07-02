const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', calculateBMI);

function calculateBMI() {
	const weight = parseInt(weightInput.value);
	const height = parseInt(heightInput.value);

	if (weight && height) {
		const bmi = weight / (height / 100) ** 2;
		const bmiRounded = Math.round((bmi * 100) / 100);

		let category;
		if (bmiRounded < 18.5) {
			category = 'Underweight';
		} else if (bmiRounded < 25) {
			category = 'Normal weight';
		} else if (bmiRounded < 30) {
			category = 'Overweight';
		} else {
			category = 'Obese';
		}

		alert( `Your BMI is ${bmiRounded}. You are ${category}.`);
	} else {
		alert( 'Please enter valid weight and height values.');
	}
}

