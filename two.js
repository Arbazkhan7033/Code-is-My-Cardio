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
// console.log(obj1.key1.username)

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

let myMethod = {
    is18: function () {
        return this.Age >= 18;
    },
    About: function () {
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
// console.log(user11);


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


// [prototype] or ---proto--- both are same

// function CreateUsers(name, age, email){
//     const user = Object.Creat(CreateUser.prototype);
//     user.name = name,
//     user.age = age,
//     user.email = email;
//     return user;
// }
// CreateUsers.prototype.is18 =function(){
//     return this.age >=18;
// }
// CreateUsers.prototype.About =function(){
//     return `name : ${this.name} age : ${this.age} email : ${this.email}`;
// }
// console.log(CreateUsers.prototype);

// function CreatUs() {
//     this.bankName = bankName,
//         this.userName = usarName,
//         this.userBalance = userBalance,
//         this.isLoan = function () {
//             console.log(50000)
//         }
//     this.isDeposit = function () {
//         // console.log("yes")
//     }
// }
// let objuse1=new CreatUs("abz", ";askdjf", "12354");
// console.log(objuse1);


//+++++++++++++++++++++++++++++ For My Bank +++++++++++++++++++++++++++++++++

function JoinNewUser(Name, Email, Phone, Address, Age, Role) {
    this.Name = Name;
    this.Email = Email;
    this.Phone = Phone;
    this.Address = Address;
    this.Age = Age;
    this.Role = Role;
    this.balance = 0;
}

function CreateOwnBank(BankName, ifscCode, Address, Branch, HelpLineNo, Atm) {
    this.BankName = BankName;
    this.ifscCode = ifscCode;
    this.Address = Address;
    this.Branch = Branch;
    this.ListOfUsers = [];
    this.HelpLineNo = HelpLineNo;
    this.Atm = Atm;
    this.ListOfEmpl = [];

    this.Join = function (Name, Email, Phone, Address, Age, Role) {
        switch (Role) {
            case "Employee":
                this.ListOfEmpl.push(new JoinNewUser(Name, Email, Phone, Address, Age, Role));
                break;
            case "customer":
                this.ListOfUsers.push(new JoinNewUser(Name, Email, Phone, Address, Age, Role));
                break;
            default:
                throw new Error("Bad Role");
        }
    };

    this.deposit = function (name, amount) {
        let user = this.ListOfUsers.find(user => user.Name === name);
        if (user && amount > 0) {
            user.balance += amount;
            console.log(`Deposit: INR: ${amount}, New Balance: INR: ${user.balance}, Name: ${user.Name}`);
        } else {
            console.log("Deposit amount must be positive and user must exist.");
        }
    };

    this.withdraw = function (name, amount) {
        let user = this.ListOfUsers.find(user => user.Name === name);
        if (user && amount > 0 && amount <= user.balance) {
            user.balance -= amount;
            console.log(`Withdraw: INR: ${amount}, New Balance: INR: ${user.balance}`);
        } else if (user && amount > user.balance) {
            console.log("Insufficient balance.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    };

    this.checkBalance = function (name) {
        let user = this.ListOfUsers.find(user => user.Name === name);
        if (user) {
            console.log(`Current Balance: INR: ${user.balance}`);
            return user.balance;
        } else {
            console.log("User not found.");
        }
    };

    this.ChequeBook = function (name) {
        let user = this.ListOfUsers.find(user => user.Name === name);
        if (user && user.balance >= 2000) {
            console.log('Eligible for cheque book.');
        } else {
            console.log('Maintain a balance of at least INR 2000 to be eligible for a cheque book.');
        }
    };

    this.AtmApply = function (name, age) {
        let user = this.ListOfUsers.find(user => user.Name === name);
        if (user && age >= 15) {
            console.log('Eligible for an ATM card.');
        } else {
            console.log('You must be at least 15 years old to apply for an ATM card.');
        }
    };

    // this.loanApply = function (name, amount){
    //     let user = this.ListOfUsers.find (user => user.name === name);
    //     if(user && amount >= 50000){
    //         console.log("you are eligible fo this loan");

    //     }else{
    //         console.log("sorry")
    //     }
    // }
};

// let myBank = new CreateOwnBank("MyBank", "IFSC123", "New York", "Main Branch", "1800123456", true);

// myBank.Join("Arslan", "alice@example.com", "1234567890", "New York", 30, "customer");

// myBank.Join("Arbaz", "bob@example.com", "0987654321", "California", 25, "customer");

// myBank.Join("shahdev", "shadev@gmail.com", "0987654321", "California", 50, "Employee");

// myBank.Join("ankur", "ankur@gmail.com", "0987654321", "California", 40, "Employee");


// myBank.deposit("Arslan", 1000);
// myBank.deposit("Arslan", 500);
// myBank.deposit("Arslan", 501);
// myBank.deposit("Arbaz", 100);


// myBank.checkBalance("Arslan");
// myBank.checkBalance("Arbaz");


// myBank.withdraw("Arbaz", 10);
// myBank.withdraw("Arslan", 1000);


// myBank.ChequeBook("Arslan");


// myBank.AtmApply("Arbaz", 18);


//++++++++++++++++++++++++ For Library +++++++++++++++++++++++++++

function JoinNewUser(Name, Email, Phone, Address, Age, Role) {
    this.Name = Name;
    this.Email = Email;
    this.Phone = Phone;
    this.Address = Address;
    this.Age = Age;
    this.Role = Role;
}

function JoinNewBook(BookName, WriterName, PrintYear) {
    this.BookName = BookName;
    this.WriterName = WriterName;
    this.PrintYear = PrintYear;
}

let Library = function (address, branch, userIdCard, validity) {
    this.address = address;
    this.branch = branch;
    this.seat = [];
    this.howManyBooks = [];
    this.users = [];
    this.userIdCard = userIdCard;
    this.validity = validity;

    this.Join = function (Name, Email, Phone, Address, Age, Role, BookName, WriterName, PrintYear) {
        if (Role === "student") {
            this.users.push(new JoinNewUser(Name, Email, Phone, Address, Age, Role));
        } else if (Role === "book") {
            this.howManyBooks.push(new JoinNewBook(BookName, WriterName, PrintYear));
        } else {
            throw new Error("Invalid role. Must be either 'student' or 'book'.");
        }
    };
};

let myLibrary = new Library("New Delhi", "Main Branch", "1500", "2028");

myLibrary.Join("Arslan", "arsl@gmail.com", "0000000000", "New Delhi", 20, "student");
myLibrary.Join("javascript basics", "asdf", 2006, "book", 23, 'book');

// console.log(myLibrary);



//+++++++++++++++++++++ mostFrequent ++++++++++++++++++++++++++
// function mostFrequentWord(text) {
//     const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
//     const wordCount = {};
//     for (let word of words) {
//       wordCount[word] = (wordCount[word] || 0) + 1;
//     }
//     let maxCount = 0;
//     let mostFrequent = '';

//     for (let word in wordCount) {
//       if (wordCount[word] > maxCount) {
//         maxCount = wordCount[word];
//         mostFrequent = word;
//       }
//     }

//     return mostFrequent;



//   }
//   const text = "This is a sample text. text just a sample.";
//   console.log(mostFrequentWord(text));  // Output: "this"


//+++++++++++++++++++++++++++++ 30/11/2024 +++++++++++++++++++++++++++++
// new keyword creates new object create{}
//return object return{}
// create connection betwn __proto__ and prototype

// function CreateBank (bankName,bankCode,bankAdress,bankBranches,helpline,numOfAtm){
//     this.bankName = bankName
//     this.bankCode = bankCode
//     this.bankAdress = bankAdress
//     this.bankBranches = bankBranches
//     this.listOfUsers = []
//     this.helpline = helpline;
//     this.numOfAtm= numOfAtm;
//     this.userCount=0
//     this.addUser= function(userName,userRole,email,phone,dob,gender,address,balance){
//         userAccountNumber = Date.now() ;
//         userId=++this.userCount;
//         let user = new CreateBankUser(userName,userId,userRole,email,phone,dob,gender,address,userAccountNumber,balance);
//         this.listOfUsers.push(user)
//     }
//     this.userBalance = function(){
// let data = this. listOfUsers.find(user=>user.userId === userId)
// if (!data){
//     return `account not exist`
// }
// return `${data.userName} account has this avaliable balance ${data.balance}`
//     }
//     this.userStatus = function(){

//     }
//     this.userDeposit = function(){

//     }
//     this.totalBalanceInBank = function(){

//     }
//     this.userWithdrawal = function(){

//     }
// }
// function CreateBankUser(userName,userId,userRole,email,phone,dob,gender,address,userAccountNumber,balance){
//     this.userName=userName;
//     this.userId=userId;
//     this.userRole=userRole;
//     this.email=email;
//     this.phone=phone;
//     this.dob=dob;
//     this.gender=gender;
//     this.address=address;
//     this.userAccountNumber=userAccountNumber;
//     this.balance = balance

// }
// new key word creates 
// create {}
// return {}
// create connection betwn __proto__ and prototype

// const PritamBank = new CreateBank("PritamBank",'qwerty','tilaknagar','tn','0119043420392',0);

// PritamBank.addUser("Abhishek","CUSTOMER","gjeokgnedkgrd@gmail.com",54322343234,'121212','male','kdjkrnfdfjlgnfslss',100)
// PritamBank.addUser("Aditya","EMPLOYEE","gjeokgnedkgrd@gmail.com",54322343234,'121212','male','kdjkrnfdfjlgnfslss',100)

// console.log(PritamBank);
// console.log(PritamBank.userBalance(1))


//++++++++++++++ object wiht class 01-12-2024 +++++++++++++++++++++++

class Human {
    constructor(name, lifespan, gender, color, weight, height) {
        this.name = name,
            this.lifespan = lifespan,
            this.gender = gender,
            this.color = color,
            this.weght = weight,
            this.height = height
    }
    walking() {
        return `${this.name} is walking at speed of 20kmpl`
    }
    running() {
        return `${this.name} is running at speed of 30kmpl`
    }
    sleeping() {
        return `${this.name} is sleeping`
    }
    eating() {
        return `${this.name} is eating`
    }
};

class SuperHuman extends Human {
    constructor(power, name, lifespan, gender, color, weght, height) {
        super(name, lifespan, gender, color, weght, height)
        this.power = power
    }
    flying() {
        return ` super human can fly`
    }
    fast() {
        return ` super human are fast`
    }
}
// let arbaz = new Human('abz', 70, 'male', 'sawla', 50, 5.7,);
// console.log(arbaz.walking());

// let superMan =new SuperHuman('1000', 'superman', '400', 'male', 'brown', '200', '7');
// console.log(superMan.flying());


class Animal {
    constructor(name, weight, eye, ear, gender, color, speed, lifespan) {
        this.name = name,
            this.weight = weight,
            this.eye = eye,
            this.ear = ear,
            this.gender = gender,
            this.color = color,
            this.speed = speed,
            this.lifespan = lifespan
    }
    running() {
        return `${this.name} run very fast`
    }
    drinking() {
        return `${this.name} drink water 20l in one time`
    }
    talking() {
        return `${this.name} dont talking`
    }
    ismilk() {
        return `${this.name} is giving a milk`
    }
    iskilled() {
        return `${this.name} some time when he felling not well`
    }
}

class DogAnimal extends Animal {

    constructor(breed, bark, smell, name, weight, eye, ear, gender, color, speed, lifespan) {
        super(name, weight, eye, ear, gender, color, speed, lifespan)
        this.breed = breed
    }
    bark() {
        return `${this.breed} dog is bark`
    }
    smell() {
        return `${this.breed} it's smelling power very high`
    }
}
// let myAnimal = new Animal("cow", "100kg", "two", "two", "femal", "white", "100kmpl", "100year")
// console.log(myAnimal.ismilk());

// let Animals = new DogAnimal("jurmenshepard", "yes", "yes", "tommy", "25", "two", "two", "male", "black", "50kmpl", "40year");
// console.log(Animals.smell());


class Librarys {
    constructor(lName, address, owner, estYear) {
        this.lName = lName,
            this.address = address,
            this.owner = owner,
            this.listOfBook = [],
            this.estYear = estYear,
            this.listOfUsers = [],
            this.bowerrDetails = []
        this.userCount = 0
    }
    addStock(bTitle, bAuthor, bQty, bPrice, bPrintYear, bType) {
        this.listOfBook.push(new BookStock(bTitle, bAuthor, bQty, bPrice, bPrintYear, bType))
    }
    issuBook(userId, BookName) {
        let userDetails = this.listOfUsers.find(user => {
           return user.userId = userId
        })
        if (!userDetails) {
            throw new Error("plz. register first for taking book")
        }
        let bookDetails = this.listOfBook.find((book)=>{
         return book.bTitle = BookName;
        })
        if(!bookDetails){
            throw new Error ("book not found")
        }
        if(bookDetails.bQty === 0){
            throw new Error("book is not available")
        }
        bookDetails.bQty -=1;
        this.bowerrDetails.push({userId, BookName:bookDetails.bTitle})
    }
    return() {

    }
    addUser(name, email, contact, address) {
        let userId = ++this.userCount
        this.listOfUsers.push(new UserDetails(userId, name, email, contact, address))
    }
}

class BookStock {
    constructor(bTitle, bAuthor, bQty, bPrice, bPrintYear, bType) {
        this.bTitle = bTitle,
            this.bAuthor = bAuthor,
            this.bQty = bQty,
            this.bPrice = bPrice,
            this.bPrintYear = bPrintYear,
            this.bType = bType
    }
}

class UserDetails {
    constructor(name, email, contact, address, userId) {
        this.userId = userId,
            this.name = name,
            this.email = email,
            this.contact = contact,
            this.address = address
    }
}

let indianLibrary = new Librarys("inidanLibrary", "tilak Nagar", "pritam", "2000");
indianLibrary.addStock("jsBook", "arbaz", "20", "400", "2024", "coding");
indianLibrary.addStock("histry", "arslan", "100", "100", "1950", "historical");
indianLibrary.addUser("sohel", "sohel@gmail.com", "1010101010", "tilak nagar")
indianLibrary.issuBook("1", "js book")
console.log(indianLibrary);