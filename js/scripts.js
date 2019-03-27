// var addNum = function(num1, num2) {
//   return num1 + num2;
// };

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

// $(document).ready(function() {
//   $("form#add").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#number1").val());
//     var number2 = parseInt($("#number2").val());
//     var result = addNum(number1, number2);
//     $("#output").text(result);
//   });
// });

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mul1").val());
    var number2 = parseInt($("#mul2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
});
/*var height = parseFloat(prompt ("Enter Height"));
var weight = parseFloat(prompt ("Enter Weight"));
alert("Your BMI is " + BMI( weight, height));
var celsius = parseFloat(prompt("enter temperature in Celsius"));
var fahrenheit = celsiusToFahrenheit(celsius);
alert (celsius + "C = " + fahrenheit + "F");*/
