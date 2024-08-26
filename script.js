document.getElementById('generateButton').addEventListener('click', function() {
    // Get the minimum and maximum values from the input fields
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    // Validate the input values
    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Please enter valid numbers for both minimum and maximum values.");
        return;
    }

    if (minValue > maxValue) {
        alert("Minimum value cannot be greater than maximum value.");
        return;
    }

    // Generate a random number between the min and max values
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display the random number
    document.getElementById('randomNumber').textContent = `Random Number: ${randomNumber}`;
});
