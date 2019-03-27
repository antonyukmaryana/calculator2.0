function addNum (num1, num2){
  return num1 + num2;
};

// function subNum (num1, num2){
//   return num1 - num2;
// };
//
// function divNum (num1, num2) {
//   return num1 / num2;
// };
//
// function multiNum (num1, num2){
//   return num1 * num2;
// };
// /* BMI calculations*/
// function BMI( weight, height){
// 	return Math.pow(height,2);
//
// };
// /*Convert celsius to fahrenheit*/
//
// function celsiusToFahrenheit (celsius){
// 	var fahrenheit = 9/5 * celsius + 32;
//   return fahrenheit;
// }

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    alert(addNum(number1, number2));
  });
});

/*var height = parseFloat(prompt ("Enter Height"));
var weight = parseFloat(prompt ("Enter Weight"));
alert("Your BMI is " + BMI( weight, height));
var celsius = parseFloat(prompt("enter temperature in Celsius"));
var fahrenheit = celsiusToFahrenheit(celsius);
alert (celsius + "C = " + fahrenheit + "F");*/
