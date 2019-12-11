// //TEST PRACTICE

// // function reverseWords(input){
// //     return input.split(/\b/).map(word => word.split(/(?=\S)/).reverse().join("")).join("");
// // //   }
// // //   console.log(reverseWords("LindaOkuhle"));
// // // //--------------------------------------------------------------------

// // function Fibonacci(n){
// //     if(n ===1){
// //         return [0,1];
// //     }else{
// //         var s = Fibonacci(n -1);
// //         s.push(s[s.length -1] + s[s.length -2]);
// //         return s;
// //     }
// // }
// // console.log(Fibonacci(10));

// // function reverseWords(input){
// //   if(input ===""){
// //     return "";
// //   }else{
// //     return reverseWords(input.substr(1)) + input.charAt(0);
// //   }

// // }
// // reverseWords("LindaOkuhle");

// // function reverseString(str) {
// //   var newString = "";
// //   for (var i = str.length - 1; i >= 0; i--) {
// //       newString += str[i];
// //   }
// //   return newString;
// // }
// // reverseString("hello");

// // function fib(n){
// //     let arr = [0, 1];
// //     for (let i = 2; i < n + 1; i++){
// //       arr.push(arr[i - 2] + arr[i -1])
// //     }
// //    return arr[n]
// //   }

// // var stringDelimeter = function(sampleInput, delimeter = "") {
// //   var stringArray = [""];
// //   var j = 0;
// //   for (var i = 0; i < sampleInput.length; i++) {
// //     if (sampleInput.charAt(i) == delimeter) {
// //       j++;
// //       stringArray.push("");
// //     } else {
// //       stringArray[j] += sampleInput.charAt(i);
// //     }
// //   }
// //   return stringArray;
// // };
// // console.log(stringDelimeter("work work work"));

// // // function validatePin(pin){
// // //         if(/^(\d{4}| \d{6})$/.test(pin)){
// // //             return true;
// // //     }else{
// // //         return false;
// // //     }
// // // }
// // // console.log("1234");
// // // console.log("a1234");
// // // console.log("12345");
// // // console.log("123456");

// // // function occurrences(){
// // //     for( let i= text.indexOf("ab"); i!= -1; i= text.indexOf("ab", i +1)){
// // //         console.log(i);
// // //     }
// // // }

// // function Fibonacci(n, index, a, b) {
// //   if (n === index) {
// //     return a + b;
// //   } else if (n <= 2) {
// //     return n - 1;
// //   } else if (typeof a === "undefined") {
// //     index = 1;
// //     b = 0;
// //     a = 1;
// //   }

// //   return Fibonacci(n, index + 1, b, a + b);
// // }

// // function hourglassSum(arr) {
// //   let hourglasses = [];

// //   if (
// //     typeof arr === "object" &&
// //     arr.length === 6 &&
// //     arr.map(i => i.length).reduce((p, n) => p + n) === 36
// //   ) {
// //     for (let row = 0; row <= 3; row++) {
// //       for (let col = 0; col <= 3; col++) {
// //         let sum = 0;

// //         sum += arr[row][col];
// //         sum += arr[row][col + 1];
// //         sum += arr[row][col + 2];
// //         sum += arr[row + 1][col + 1];
// //         sum += arr[row + 2][col];
// //         sum += arr[row + 2][col + 1];
// //         sum += arr[row + 2][col + 2];

// //         hourglasses.push(sum);
// //       }
// //     }
// //   }

// //   return hourglasses.length > 0 ? Math.max(...hourglasses) : 0;
// // }

// var array = [6,2,3,7,5,4,1,10,24,109,0];;
// function bubbleSort(arr) {
//     for(let j=0;j<arr.length;j++) {
//         for(let i = 0; i < arr.length; i++) {
//             if(arr[i]>arr[i+1]) {
//                 var temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(array));

// // // insert sort
// // //
// // function Sort(arr){
// //   var arr = [2,4,5,6,3];
// //     let placeholder = arr[4];
// //     let result = arr.pop(4);

// //   for(let i= 0; i< arr.length; i++){
// //     if(placeholder > arr[i]){
// //       arr.splice(1,0, placeholder);
// //     }

// //   }
// //   console.log(arr);
// //   }

// //   Sort();

function find_FirstNotRepeatedChar(str) {
  var arra1 = str.split("");
  var result = "";
  var ctr = 0;
  for (var x = 0; x < arra1.length; x++) {
    ctr = 0;
    for (var y = 0; y < arra1.length; y++) {
      if (arra1[x] === arra1[y]) {
        ctr += 1;
      }
    }
    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log(find_FirstNotRepeatedChar("abacddbec"));


function nonRepeated(s) {
  if( nonRepeated < s){
      for(let i = 0; i< s.length; i++){
          if( nonRepeated <= 0){
              return s;
          }
      }
  }
  
  }
  