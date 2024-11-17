// let arr = [1,2,3,4,5,6]
// for (let val of arr){
//     // console.log(val);
// }

// let greetings = "Hello World"
// for (let greet of greetings){
//     // console.log(`Each Char is ${greet}`)
// }

let myobject = {
    js : 'javascript',
    Cpp : 'C++',
    Ruby : 'Ruby',
    Swift : 'Swift by Apple'
};
for (const key in myobject) {
    // console.log(`${key} shorcut is for ${myobject[key]}`)
    }

let programing = ["js", "rb", "py", "java", "cpp", "js"]
for (let key in programing){
    // console.log(programing[key])
}

// let coding = ["js", "rb", "py", "java", "cpp", "js"]
// coding.forEach( function(value){
//     console.log(value)
// } );

// Earo function
let coding = ["js", "rb", "py", "java", "cpp", "js"]
coding.forEach((value)=>{
    // console.log(value)
} );

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
// console.log(item, index, arr)
// })

// let myCoding = [
//     {languageName: "javascript"},
//     {languageFileName: "js"},

//     {languageName: "java"},
//     {languageFileName: "java"},

//     {languageName: "python"},
//     {languageFileName: "py"}
// ]
// myCoding.forEach((item)=>{
// // console.log(item.languageName)
// })


// function addTwoNumbers(x,y){
//     return(x+y) 

// }
// let data = addTwoNumbers(12,12)
// console.log(data)

// function sumTwoNum(x,y,z){
//     console.log ("printing",(x+y)*z)
//     return (x+y)
// }
// let data = sumTwoNum(2,2,10);
// console.log(data);

// function myname(name){
//     return(("arbaz").length)
// }
// let data = myname('arbaz')
// console.log(data)

function printNameAndReturnlength(name){
    // console.log(name);
    return name.length
}
let data = printNameAndReturnlength("ArslanAfsarAliAnsari")
// console.log(data);


function SumOf3Number(a,b,c){
    // console.log((a+b)*c);
    return (a+b)

}
let data1 = SumOf3Number(2,2,2);
// console.log(data1)


// function mostFreq(str) {
//     let freq = {};
//     let maxChar = "";
//     let maxCount = 0;
//     for (let char of str) {
//         freq[char] = (freq[char] || 0) + 1;
//         if (freq[char] > maxCount) {
//             maxCount = freq[char];
//             maxChar = char
//         }
//     }
//     console.log(freq);

//     return maxChar
// }
//    console.log(mostFreq("helllooo"));




// function sumOf(n){
//     let sum = 0;
//     for (let i=n; i>0; i--){
//         console.log(i);
//         sum +=i;
//     }
//     return sum
// }
// console.log(sumOf(6));

// function sumOf(n){
//     let sum = 1;
//     for (let i=1; i<=n; i++){
//         console.log(i);
//         sum *=i;
//     }
//     return sum
// }
// console.log(sumOf(3));

// function fact(n) {
//     let factS = 1;
//     for (let i = n; i >= -n; i--) {
//         console.log(i)
//         if (i === 0) {
//             continue;
//         }
//             factS *= i
//     }
//     return factS;
// }
// console.log(fact(3));

// function sumOfEvanNo(n){
//     let data3 = 0;
//     for(let i=1; i<=n; i++)
//         if(i % 2===0){
//             data3 +=i
//             console.log(i)
//         }
//        return data3
// }
// console.log (sumOfEvanNo(10))

// let sym = Symbol('arbaz');
// console.log(sym);

// function factorial(n) {
//     let result = 1;
//     while (n > 1) {
//       result += n;
//       n--;
//     }
//     return result;
//   }
  
//   console.log(factorial(5));

  let arr = [10,20,30,40,50,60,70,80,90];
  let [a,...b] = arr;
//   console.log(a,b)
//   console.log(b)

// function greet(name='dummy') {
//     console.log(`hellow ${name} welcome`)
// }
//   greet("neeraj")

function abz(cb) {
    console.log(`hello world`)
    console.log(`this is a higher order function`)
    cb();
}
function greet() {
    console.log(`my code is ended`);
}

abz(greet);
