//1

let numbers = " ";

for (let i = 20; i <= 30; i += 0.5) {
  numbers = `${numbers}${i} `;
}
console.log(numbers);

//2

let value = "";

for (let i = 10; i <= 100; i += 10) {
  value = `${value}$${i} = ${i * 27} грн, `;
}
console.log(value);

//3

const number1 = prompt("Напишите число:");
let response = "";

for (let i = 1; i <= 100; i++) {
  if (i * i <= number1) {
    response = `${response} ${i},`;
  }
}
alert(response);

//4

const number2 = prompt("Напишите число:");
let isSimple = true;
for (let i = 2; i < number2; i++) {
  if (number2 % i === 0) {
    isSimple = false;
    break;
  }
}
if (isSimple) {
  alert("Простое число");
} else {
  alert("Не простое число");
}

//5

const number3 = prompt("Напишите число:");
let n = false;

for (let i = 1; 3 ** i <= number3; i++) {
  console.log(3 ** i);
  if (3 ** i === +number3) {
    n = true;
  }
}

if (kaif) {
  alert("Это число можно получить, путём возведения 3 в степень");
} else {
  alert("Это число невозможно получить, путём возведения 3 в степень");
}
