// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Convert Fahrenheit to Celsius  
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// Export all functions so they can be used in other files
module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    celsiusToKelvin,
    kelvinToCelsius
};