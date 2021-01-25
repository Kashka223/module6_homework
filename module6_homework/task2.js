function definePrime (num) {
let isPrime ;
isPrime = true;
if (num > 1 && num <= 1000) {
for (let i = 2; i < num; i++) {
if(num % i === 0) {
isPrime = false;
}
}
 console.log ( isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`);
} else if (num > 1000){
 console.log ('Данные неверны');
}

}
definePrime (10);