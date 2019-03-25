function addNum (num1, num2){
  return num1 + num2;
};

var num1 = parseInt(prompt("enter a number"));
var num2 = parseInt(prompt("enter another number"));
alert(num1 + " + " + num2 + " = " + addNum(num1, num2));
