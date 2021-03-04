console.log('hello');
var b = 'smoothie';
console.log(b);

var somenumber = 45;
console.log(somenumber);
var age = prompt('What is your age?');

document.getElementById('someText').innerHTML = age;

var num1 = 5;
console.log(5 * 34);

var num2 = 10;
num2++;
console.log(num2);
var num2 = 10;
num2++;
console.log(num2);
// functions
function fun() {
    alert('this is a function');
}

//call
//fun();


function greeting(yourName) {
    var result = 'hello' + ' ' + yourName;
    console.log(result);
}
var name = prompt('What is your name?');
greeting(name);

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

//while loops 

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

var naruto = 100;
while (naruto > 50) {
    naruto -= 1;
    console.log(naruto);
}

// for loop
for 