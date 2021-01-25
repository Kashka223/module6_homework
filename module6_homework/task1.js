let tall = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 0 , 16 , 13 , 0 , 19, '2' , false , true, '2'];
liste(tall);
function liste(arr) {
  let sumOdd = 0;
  let sumEven = 0;
  let sumZero = 0;
  let sumString = 0;
  let sumBoolean = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i] % 2 !== 0) {
      sumOdd++
    } else if ( arr[i]===0) {
      sumZero++
    }else {
      sumEven++
    }
    } else if (typeof arr[i] === 'string') {
      sumString++
    } else if (typeof arr[i] === 'boolean') {
       sumBoolean++
    }
    
  }
  console.log("Odd : " + sumOdd);
  console.log("Even : " + sumEven);
  console.log ("Zero :" + sumZero);
  console.log ("String :" + sumString);
  console.log ("Boolean :" + sumBoolean);
}
