// Function to convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}


document
  .getElementById("converter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const celsiusInput = parseFloat(document.getElementById("celsius").value);
    const fahrenheitInput = parseFloat(
      document.getElementById("fahrenheit").value
    );

    if (!isNaN(celsiusInput)) {
      const fahrenheit = celsiusToFahrenheit(celsiusInput);
      document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else if (!isNaN(fahrenheitInput)) {
      const celsius = fahrenheitToCelsius(fahrenheitInput);
      document.getElementById("celsius").value = celsius.toFixed(2);
    } else {
      alert("Please enter a valid temperature value.");
    }
  });
