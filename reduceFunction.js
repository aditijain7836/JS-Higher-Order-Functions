function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const sum = customReduce(numbers, (acc, num) => acc + num, 0);
  console.log(sum); // 15
  