// Define the createCar function
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add optional properties to the car object
    options.forEach(function (option) {
        var _a = Object.entries(option)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the createCar function with required and optional information
var carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { year: 2022 });
// Print the returned object to check the information
console.log("Car Information:");
console.log(carInfo);
