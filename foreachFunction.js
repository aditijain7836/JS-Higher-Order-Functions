function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
  
  const numbers = [1, 2, 3, 4, 5];
  customForEach(numbers, (num) => console.log(num));
 
  