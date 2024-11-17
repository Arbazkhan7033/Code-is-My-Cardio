// let greeting = "Hello World!";
// for (let greet of greeting) {
//     console.log(`Each Char is ${greet}`)
   
// }

// const Map = new Map()
// Map.set('in', "india")
// Map.set('usa', "united states of america")
// Map.set('fr', "france")

// // console.log(Map);
// for (const [key, valuef] in Map) {
//     console.log(key, valuef)
// }

// let coding = ["js", "py", "c++", "ruby", "java"];
// console.log(coding)
// let value = coding.forEach((item)=>{
//     return item
// })

// let coding = ["js", "py", "c++", "ruby", "java"];

// let row = 1;
// let colomn = row;
// for (let row = 1; row < colomn; row++) {
//     console.log(row)
    
    
// }

//find intersaction
// let arr1 = [1,2,3]
// let arr2 = [2,3,4]
// let NewArray = arr1.filter((value)=>arr2.includes(value));
// console.log(NewArray);

//how to murge two arrays without duplicates
// let arr3 = [1,2,3]
// let arr4 = [3,4,5]
// let NewNum = [...new Set([...arr3, ...arr4])];
// console.log(NewNum[2]);

//how to fixd no of set two

// function SubArray(arr, size) {
//     let NewArray = []
//     for (let i = 0; i < arr.length; i+=size) {
//         NewArray.push(arr.slice(i,i+size));      
//     }
//     return NewArray   
// }
// let res = SubArray ([1,2,3,4,5,6,7,8,9,10],2);
// console.log(res);

// function SubArray(arr, size) {
//     let NewArray = []
//     for (let i = 0; i < arr.length; i+=size) {
//         NewArray.push(arr.slice(i,i+size));      
//     }
//     return NewArray   
// }
// let res = SubArray ([[1,2,3],[4,5,6],[7,8,[9,10]]],2);
// console.log(res.flat(3));

// let abz = [1,2,5,7,3,4,10,8];
// let newarray = abz.sort((a,b)=>a-b).filter((value)=>value>4).map((val)=>val*3);
// console.log(newarray);


//Question 1
// add element in first position & sort position
// [1,2,4]
// add 3 in first and 10 in last
//Answer
// let que1 = [1,2,4]
// que1.splice(0,0,3)
// que1.splice(4,0,10)
// que1.sort((a,b)=>a-b)
// console.log(que1)

// // Question 2
// find element in Array
// let FindArray = [1,2,3,4,5,6]
// let Found = FindArray.find((val)=>val>5);
// console.log(Found)


// // Question 3
// find sum of element
// let findarray = [[1,2,3],6]
// let findarray = [1,2,3,6]
// let mainarray = findarray.includes((6))
// console.log(mainarray)

// let numbers = [1, 2, 3,];
// let sum = numbers.reduce((acc, num) => acc + num,).includes((6));
// console.log(sum); // Output: 6



//Answer
let find = [1,2,3]
let sumof =find.includes((3));
// console.log(sumof)



// // Question 5
// sort array by selection / inserction sort
// let selection = [15,5,4,8,3,65,7,6];
// selection.sort((a,b)=>a-b)
// console.log(selection)

// let selection = [15,5,4,8,3,65,7,6];
// selection.sort();
// console.log(selection);

// let BubbleSort = [9,7,8,6,4,5,3,2,1,10]

// // function Sorting(BubbleSort) {
//     for (let i = 1; i<=BubbleSort.length; i++){
//         for (let j = 0; j<=BubbleSort.length-1; j++){
//             if (BubbleSort[j]>BubbleSort[j+1]){
//                 let temp = BubbleSort[j]
//                 BubbleSort[j] = BubbleSort[j+1]
//                 BubbleSort[j+1] = temp
//             }
//         }
//     }
    // console.log(BubbleSort);
// }

// Sorting(BubbleSort)

let a = 10;
let b = 20;
// console.log(a,b)

let temp = a;
a = b;
b = temp;
// console.log(a,b)


// let Arr = [3, 1, 4, 1, 5, 9, 2, 6, 5,];

// function Number(Arr) {
//     for (let i = 0; i <= Arr.length; i++) {
//         for (let j = 0; j <= Arr.length-i; j++) {
//             if (Arr[j]>Arr[j+1]) {
//                 let Hello = Arr[j]
//                 Arr[j] = Arr[j+1]
//                 Arr[j+1] = Hello
                
//             }                      
//         }
        
//     }    
//     // console.log(Arr)
// }
// // Number(Arr);

// let CreateNewArray = [1, 2, 3, 4, 5,];
// let NewArray = CreateNewArray.filter((value)=> value>=2);
// console.log(NewArray);

// let ReduceMathod = [1, 2, 3, 4, 5,];
// let Mathod = ReduceMathod.reduce((a,b)=>a+b);
// console.log(Mathod)

// let Arr = [1,2,3,4,5,6,7,8,9,10];

// function Number(Arr) {
    //     for (let i = 0; i <= Arr.length; i++) {
    //             for (let j = 0; j <= Arr.length-i; j++) {
    //                     if (Arr[j+1]>Arr[j]) {
    //                             let Hello = Arr[j+1]
    //                             Arr[j+1] = Arr[j]
    //                             Arr[j] = Hello
                
    //         }                      
    //     }

    // }    
    // console.log(Arr)
// }
//  Number(Arr);


//  let Arr = [1,2,3,4,5,6,7,8,9,10];
//  let EveryOne = Arr.every((value)=> value >= 8)
//  console.log(EveryOne)


//  let Arr = [1,2,3,4,5,6,7,8,9,10];
//  let EveryOne = Arr.some((value)=> value >= 10);
//  console.log(EveryOne);


let arr = [20,15,2,3,5,8,9,10]
function selectionSort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let minIdx=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIdx]){
                minIdx=j;
            }
        }
        if(minIdx !== i){
            [arr[i],arr[minIdx]]=[arr[minIdx], arr[i]]
        }
    }
    return arr;
}
// console.log(selectionSort(arr));

let name = '         my          name           is        arbaz       '
// console.log(name.split(' ').filter(str => str !=='').join(' '));

function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// console.log(isPalindrome("A man, a plan, a canal, Panama"));  // Output: true
// console.log(isPalindrome("hello"));  // Output: false
// console.log(isPalindrome("racecar"));  // Output: true



// function CapitalizeFirstWord (stri){
//     return stri
//     .split(' ').map(name1=>name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase()).join(' ')
// }
// console.log (CapitalizeFirstWord('my name is arbaz khan'))


// // A simple function that takes a callback as an argument
// function greet(name, callback) {
//     console.log('Hello, ' + name);
//     // Now, call the callback function after greeting
//     callback();
//   }
  
//   // Define a callback function
//   function sayGoodbye() {
//     console.log('Goodbye!');
//   }
  
//   // Pass the callback to greet()
//   greet('Dogy', sayGoodbye);
  





