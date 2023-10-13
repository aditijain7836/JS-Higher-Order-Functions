function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubled = customMap(numbers, (num) => num * 2);
  console.log(doubled); // [2, 4, 6, 8, 10]
  