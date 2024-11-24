// let arr = [1,2,3,4,5,6]
// for (let val of arr){
//     // console.log(val);
// }

// let greetings = "Hello World"
// for (let greet of greetings){
//     // console.log(`Each Char is ${greet}`)
// }

let myobject = {
    js: 'javascript',
    Cpp: 'C++',
    Ruby: 'Ruby',
    Swift: 'Swift by Apple'
};
for (const key in myobject) {
    // console.log(`${key} shorcut is for ${myobject[key]}`)
}

let programing = ["js", "rb", "py", "java", "cpp", "js"]
for (let key in programing) {
    // console.log(programing[key])
}

// let coding = ["js", "rb", "py", "java", "cpp", "js"]
// coding.forEach( function(value){
//     console.log(value)
// } );

// Earo function
let coding = ["js", "rb", "py", "java", "cpp", "js"]
coding.forEach((value) => {
    // console.log(value)
});

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

function printNameAndReturnlength(name) {
    // console.log(name);
    return name.length
}
let data = printNameAndReturnlength("ArslanAfsarAliAnsari")
// console.log(data);


function SumOf3Number(a, b, c) {
    // console.log((a+b)*c);
    return (a + b)

}
let data1 = SumOf3Number(2, 2, 2);
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

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let [a, ...b] = arr;
//   console.log(a,b)
//   console.log(b)

// function greet(name='dummy') {
//     console.log(`hellow ${name} welcome`)
// }
//   greet("neeraj")

// function abz(cb) {
//     console.log(`hello world`)
//     console.log(`this is a higher order function`)
//     cb();
// }
// function greet() {
//     console.log(`my code is ended`);
// }

// abz(greet);

// function myfun( ){
//     function hello( ){
//         console.log('hellow world')
//     }
//     return hello
// }
// let data11 = myfun()
// data11()

// let arr1 = [2,3,4,5,6];
// let newarr2 = arr1.map((value, index, array)=>value*3)
// console.log(newarr2);

// let filterarr = newarr2.filter((value, index, array)=>value>8);
// console.log(filterarr);

// let redusefun = filterarr.reduce((acc, value)=>acc+value,50);
// console.log(redusefun);

// let sArr = [9,3,6,4,8,7,5,11];
// let result1 = sArr.sort((a,b)=>a-b);
// console.log(result1);

// let snArr = sArr.find((value)=>value>7);
// console.log(snArr);

// let everArr = [1,5,3,2,6,4,8,9,7];
// let result7 = everArr.every((value)=>value>10);
// console.log(result7);

// let somArr = [5,4,9,8,7,3,6,2];
// let somRes = somArr.some((value)=>value>8);
// console.log(somRes);

// let filArr = [2,5,4,8,9,6,3,7];
// let newFilArr = filArr.fill(-5,1,6);
// console.log(newFilArr);

//  let filArr = [2,5,4,8,9,6,3,7];
//  filArr.slice(1,2);
// console.log(filArr);

// let fruit = "banana";
// if (fruit === "apple") {
//     console.log("It's an apple!");
// } else {
//     console.log("It's not an apple.");
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {

//         console.log(i)
//     }
// }

// const arr = [1, 2, 3, 4];
// let result = arr.filter(num => num % 2 === 0).map(num => num * 2);
// console.log(result);

// const multiply = (a, b) => a * b;

// console.log(multiply(3, 4));

// function higherOrderFn(cb) {
//     console.log(`hello world!`)
//     console.log(`this is a higher order function`)
//     cb()
// };
// function greet() {
//     console.log(`i have ended my code`)
// }
// higherOrderFn(greet)

let obj = {};
obj.name = "arbaz";
obj["hello"] = "hi";
obj["Full Name"] = "Arbaz Khan";
// console.log(obj)
// console.log(Object.keys(obj));
// console.log(Object.values(obj));


for (let i in obj) {
    // console.log(`${i}, :- ${obj[i]}`)

}


let obj1 = {
    key1: { username: "abz" }
}
console.log(obj1.key1.username)

// const userobj = {
//     name: "arbaz",
//     age: 20,
//     email: "abzGmail.com",
//     about: function () {

//         // method 1  
//         console.log(`My Name Is ${userobj.name} Age ${userobj.age} Email ${userobj.email}`)

//         //method 2
//         console.log(`My Name Is ${this.name} Age ${this.age} Email ${this.email}`)
//     }
// }
// userobj.about();

let myMethod={
    is18 : function(){
        return this.Age >= 18;
    },
    About : function(){
        return this
    }
}

function CreateUser(Name, Email, Age) {
    let user = {}
    user.Name = Name,
        user.Email = Email,
        user.Age = Age,
        user.is18 = myMethod.is18,
        user.About = myMethod.About
        return user
}

let user11 = CreateUser("arbaz", "abz@gmail.com", 19)
console.log(user11.is18());


// function CreateUser(Name, Email, Age) {
//     let user = {}
//     user.Name = Name,
//         user.Email = Email,
//         user.Age = Age,
//         user.is18 = function () {
//             return this.Age >= 18
//         },
//         user.About = function () {
//             return this
//         }
//     return user
// }

// let user11 = CreateUser("arbaz", "abz@gmail.com", 19)
// console.log(user11.is18());