```const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}

 // Bad: undefined 
 // Bad: undefined 
 // Bad: undefined 
 // Bad: undefined
---------------------------------------------------------------------------------
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}
// Bad: 10
// Bad: 12
// Good: 15
// Good: 21

---------------------------------------------------------------------------------
for (var i = arr.length - 1; i >= 0; i--) {
  setTimeout(function () {
    i++;
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}
// Bad: 10
// Bad: 12
// Good: 15
// Good: 21
