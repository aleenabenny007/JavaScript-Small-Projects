// 20/06/24 

//.........Call back function........

// Types of Callback:
// (i) Synchronous (function is executed in the main thread itself)
// (ii) Asynchronous (function different from main thread)


//....Asynchronous Callback....
console.log("START")

document.getElementById("myBtn").onclick = myFunction;   // here myFunction is a Call back function

function myFunction(arg) {
    console.log(arg)
}

myFunction(20)  // here myFunction is a normal function   
console.log("END")


// Note: 
// Any function can be called as a Call back function if it is dynamically called by any HTML element 
// while user make any change on the HTML element. i.e, we ' don't have any rights ' to pass arguments to 
// such functions, rather the HTML element itself do that.     


// ....Synchronous Callback ....
console.log("One");

const arr = [2, 3, 4, 5, 6];

function printNumSync(arg) {
    console.log(arg);
}

arr.forEach(printNumSync);  // foreach() is an example for UTILITY fuctions(eg: map(),reduce(),...) which are Synchronous

console.log("Seven");









// ...........Arrow Function..........                                                
//( A way to write anonymous functions )

const fn1 = (a, b) => {
    return `${a} + ${b} = ${a + b}`;
}

//OR simply,

const fn2 = (a, b) => `${a} + ${b} = ${a + b}`; // intead of this string anything can be returned except object(as it braces resembles those of function)

console.log(fn1(3, 5));
console.log(fn2(2, 8));








// ...........Call by Value..........
// (in the case of small data types like int,float,string, undefined,.....) ( STACK is used to store such data types )

function one() {
    var a = 100;
    two(a);
    console.log(a);
}

function two(a) {
    a = a + 1;
    console.log(a);
}

one();


// ..........Call by reference.............
// ( in the case of large data types like array, object, set, dictonary, ....) ( HEAP is used to store such data types )

function one1() {
    var a = [100, 200];
    two2(a);
    console.log(a[0]);
}

function two2(a) {
    a[0] = a[0] + 1;
    console.log(a[0]);
}

one1()








// ..........Closure.............

// This is actually the method used by the javascript, for child functions to access the variable values of the parent function.
// Implemented using STACK and HEAP ( variables of the parent are stored into HEAP instead of STACK for not losing the variables on closing the function )
// (eg scenario: function inside another function)         

function add(a, b) {
    function myAdd() {
        const c = a + b;
        return c;
    }
    return myAdd;
}

function main() {
    const res = add(3, 4);
    const val = res();
    console.log(val);
    console.dir(res);
}

main();

// eg: 

var objectss = [
    {
        name: 'one',
        msg: 'Hello I am one'
    },
    {
        name: 'two',
        msg: 'Hello I am two'
    },
    {
        name: 'three',
        msg: 'Hello I am three'
    }
];

function mainObjects() {
    objectss.forEach((item) => {
        const bt = document.createElement('button');
        bt.innerHTML = item.name;
        bt.onclick = getCallback(item.msg);
        document.body.appendChild(bt);
    })
}

function getCallback(message) {
    return function () {
        alert(message);
    }
}

mainObjects();


// var objs = [
//     {
//         name: 'one',
//         msg: 'Hello I am one'
//     },
//     {
//         name: 'two',
//         msg: 'Hello I am two'
//     },
//     {
//         name: 'three',
//         msg: 'Hello I am three'
//     }
// ];

// function main() {
//     objs.forEach((item) => {
//         const bt = document.createElement('button');
//         bt.innerHTML = item.name;
//         bt.onclick = myCallback;
//         document.body.appendChild(bt);
//     })    
// }


// function myCallback() {
//     alert('hii');
// }

// main();








//............Spread Operator..........

// denoted by three dots (...)
// represents everything excluding the opening and closing braces of a variable
// Generally used with data types include Object, Array, etc....
// while using '...' operator Shallow Copying (cloning) happens

// eg 1: 
var obj1 = {
    a: 1,
    b: 2,
    c: "Hello"
};

var obj2 = {
    ...obj1
};

var obj3 = obj1;

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj1 === obj2)  // (O/P) : false , reason  : created a new different object
console.log(obj1 === obj3)  // (O/P) : true  , reasom  : used the same reference to create new object therefore both are same

// example 
var obj0 = {
    a1: 1,
    b1: 2,
    c: "Hello World"
}

// obj is a combined version of both the objects with unique keys.Value of the same key is overwritten by the value of the last object's key appended
var obj = {
    ...obj1,
    ...obj0
}
// here "Hello" is overwritten by "Hello World" as it comes last

console.log(obj);

// eg 2: 
var arr1 = [1, 2, 3, 4, 5]
var arr2 = [1, 2, 4, 6, 5]

var arr3 = [...arr1, ...arr2]  //here duplication of values happens as there are no keys

console.log(arr3)

maxArr = Math.max(arr3) // (O/P) : won't work even , therefore use Spread operator, i.e,

maxArr = Math.max(...arr3)
minArr = Math.min(...arr3)

console.log(maxArr, minArr);









// ...........Destructuring Assignment...........

// Object destructuring 
const obj11 = {
    name: "Aleena",
    age: 20,
    place: "Wayanad"
}

// function myDestructureFun() {
//     const name = obj11.name;
//     const age = obj11.age;
//     const place = obj11.place;

//     console.log(name, age, place)
// }

//  => instead of writing like the above use the following format =>

function myDestructureFun() {
    const {
        name,
        age,
        place
    } = obj11;

    console.log(name, age, place);
}

myDestructureFun();


var {
    a,

    b
} = obj;

console.log(a, b);




   


// 21/06/24 

//............Array Functions...........
// argument 1 : a call back function
// argument 2 : index

// [...........FOREACH..........]
const myArray = [
    {
        name: "Alice",
        age: 50,
        place: "Mexico"
    },
    {
        name: "Boby",
        age: 32,
        place: "Dehradune"
    },
    {
        name: "Marshal",
        age: 50,
        place: "China"
    }
]

myArray.forEach((item) => {
    console.log(item.name, item.place);
});



// [..............FIND..............]
// returns the value if it is found, otherwise undefined.
// returns the first element which satisfies the condition ( as it returns only one element )

var foundres = myArray.find((item) => {
    return item.age === 50;
})
console.log(foundres);  // (O/P) : 3


// [............FILTER...............]      
// similar to find 
// returns all elements which satisfies the condition( returns an Array ), otherwise returns empty array
// doesn't mutate original array ( do not edit the original array )
var filteredres = myArray.filter((item) => {
    return item.age === 50;
});
console.log(filteredres);



// [...........MAP............]
// creates a new array corresponding to the original one 
// returns an array containing not the entire item, but the value we need to return only .
// pweforms n iterations, where n is the number of elements in the array.

var mappedres = myArray.map((item) => {    // returns an array with only names
    return item.name;
})
console.log(mappedres);

var mappedstr = myArray.map((item) => {    // returns an array with 2 repititions of string "hello"
    return "hello";
})
console.log(mappedstr);


var mapAdd = myArray.map((item) => {
    return {
        ...item,
        job: "Software Developer"
    }
})
console.log(mapAdd);


// [...........REDUCE.............]
// arg 1 : total -> the return value of previous iteration
// arg 2 : item 

// to reduce an array to a single value
// returns the value returned for the last item

var reducedres = myArray.reduce((total, item) => {
    console.log(total);
    return item.name;
})
console.log(reducedres);

var markArray = [10, 20, 30, 40, 50];
var totalMarks = markArray.reduce((total, item) => {
    return total + item;
})
console.log(totalMarks);

var namesOnly = myArray.reduce((total, item) => {
    total.push(item.name);
    return total;
}, []);
console.log(namesOnly);




// ..........Object destructuring...........
var obj21 = {
    name: "Aleena",
    mark: 59,
    place: "Wayanad",
    subject: {
        teacher: "Bob"
    }
}

var {
    subject: {
        teacher  // if the nesting is not correct ' error ' occurs
    }
} = obj21;
console.log(teacher)


//.........
var mineArr = [
    {
        name: "Aleena",
        yob: 2004
    },
    {
        name: "Arjun",
        yob: 2008
    }
]

var mineArr2 = [
    {
        name: "Aleena",
        yob: 1998
    },
    {
        name: "Arjun",
        yob: 2012
    }
]

console.log(printMinYob(...mineArr, ...mineArr2))

function printMinYob(...args) {
    var mineArr = args.map((item) => item.yob);
    return Math.min(...mineArr)
}



//........LODASH Library.........
// a collection of a plenty of simple util functions           



//..............OOPS..................

//.....Static Functions........
console.log("Static Functions\n......................")

class Student {
    name;
    yob;

    constructor(name, yob) {
        this.name = name;
        this.yob = yob;
    }

    getAge() {
        return new Date().getFullYear() - this.yob;
    };

}
//static function  
Student.printMinYob = function (...args) {
    var mineArr = args.map((item) => item.yob);
    return console.log(Math.min(...mineArr));
}

var student1 = new Student("Aleena", 2004);
var student2 = new Student("Alen", 1994);
var student3 = new Student("Leena", 2012);

var student1Age = student1.getAge();
console.log(`Age of Student 1 : ${student1Age}`)

// student1.printMinYob(student1,student2,student3);  //this line will not work          

Student.printMinYob(student1, student2, student3);





//.......Setter & Getter.........

//(i) for Class,
class Button {
    constructor(name) {
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }

    onClick(fn) {               // javascripts onClick() function
        this.button.onclick = fn;
    }

    set width(width) {           // setter
        this.button.style.width = width + "px";
    }

    set height(height) {         // setter
        this.button.style.height = height + "px";
    }

    set bgcolor(bgcolor) {      // setter
        this.button.style.backgroundColor = bgcolor;
    }

    get width() {           // getter
        return this.button.style.width;
    }

    get height() {         // getter
        return this.button.style.height;
    }
}

var b1 = new Button("Click me!");
b1.width = 100;  // setter call
b1.height = 100;  // setter call
b1.bgcolor = "blue";  //setter call
b1.onClick(() => console.log("Button Clicked :)"))

console.log(b1.width);   // getter call
console.log(b1.height);  // getter call
console.log(b1.bgcolor);  // not a getter , therefore (O/P):undefined


//(ii) for Object,
var button1 = {
    init(name) {          // init() is used as Object has no constructor
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    },
    set width(width) {           // setter
        this.button.style.width = width + "px";
    },

    set height(height) {         // setter
        this.button.style.height = height + "px";
    },

    set bgcolor(bgcolor) {      // setter
        this.button.style.backgroundColor = bgcolor;
    },

    get width() {           // getter
        return this.button.style.width;
    },

    get height() {         // getter
        return this.button.style.height;
    },
}

button1.init("Click me!");
button1.width = 100;  // setter call
button1.height = 100;  // setter call
button1.bgcolor = "black";  //setter call





// ............Inheritance................
// using 'extends' keyword




//..........Prototype....................
// Before the use of class in 2015, javascript used prototype in its earlier versions to perform the actions of classes and inheritance.
// Prototype is not used nowadays except for some older browsers which doesn't support class
// Concepts:
//     -- Any function called using the 'new' keyword acts as a Constructor
//     -- All functions has a property called prototype by default
//     -- To give functions to the Function which we made a constructor we use "FunctionName.prototype.functionInsideName = () => {}"

// Thus the concept of class is implemented


//      A Class using Prototype
//..................................
// The class Button given above can be implementes by,    
function MyButton(name) {
    this.button = document.createElement('button');              // This whole code can be considered as
    this.button.innerHTML = name;                                // an alternative for class
    document.body.appendChild(this.button);                      // using prototype
}

MyButton.prototype.onClick = function (fn) {
    this.button.onclick = fn;                                    // Internally this happens in the case of 
}                                                                //  creating a class  

var b2 = new MyButton("Yo!");
b2.onClick(function () {
    console.log('clicked');
});
console.log(b2);


//       Inheritance using Prototype
//..........................................
// In the case of objects, it has a property called __proto__ instead of prototype in a function
// When we call a function using an object, it checks whether the function exists in any prototype chaining (i.e, in any of the nested __proto__ properties)
// Thus inheritance is implemented 

// The class given above can be inherited by,
function MyGreenButton(name) {
    MyButton.call(this, name);        // calls the constructor of the parent class
}

MyGreenButton.prototype = Object.create(MyButton.prototype);            // to connect the __proto__ ( proto chaining )
// alternative of using extends keyword

var btn = new MyGreenButton('Yo!');
btn.onClick(function () {
    console.log('clicked GreenButton');
});

console.dir(MyGreenButton);
console.dir(btn)



// ...........Asynchronous Callback.............
// Adv : while using synchronous call backs, the whole screen UI may get blockes if any of them takes more time than expected. In such 
//       cases use asynchronous callbacks 
// Disadv : asynchronous call backs should be done very cautiously as it can cause errors as one call back depends upon the result of 
//          the other
//        --Solution : Promise


//...........Promise..............
// example  
console.log('started');

function myFetch(url) {
    return new Promise((res, rej) => {   // creating promise 
        $.ajax({
            type: "GET",
            url: url,
            success: function (msg) {
                res(msg);
            },
            error: function (xhr, statusText) {
                rej(statusText);
            }
        })
    })
}

const pr = myFetch('https://jsonplaceholder.typicode.com/todos/1')    // it is a promised async function call

function buttonClick() {
    console.log('clicked');
    pr.then((data) => {          // only if pr has data then the callback is executed
        console.log(data);
    },
        (err) => {
            console.log("Error occured...!")
        }
    );
}

console.log('ended');

//     even if pr has not completed fetching data, the normal flow of the program maintains and it enters buttonClick() function, but the 
//     callback inside the pr.then() will not be executed until the pr fetches data.

// ............Promise Chaining...........
// promises can be chained so that the async functions execute one after another.      

const pr1 = myFetch('https://jsonplaceholder.typicode.com/todos/1')

const pr2 = pr1.then((data) => {
    console.log(data);
    return myFetch('https://jsonplaceholder.typicode.com/todos/2');
});

const pr3 = pr2.then((data) => {
    console.log(data);
    return myFetch('https://jsonplaceholder.typicode.com/todos/3');
});

pr3.then((data) => {
    console.log(data);
});


//           Or simply,

getJson('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        console.log(data);
        return myFetch('https://jsonplaceholder.typicode.com/todos/2');
    })
    .then((data) => {
        console.log(data);
        return myFetch('https://jsonplaceholder.typicode.com/todos/3');
    })
    .then((data) => {
        console.log(data);    
    });


//..........Promise catch............ (for error handling)

myFetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        console.log(data);
        return myFetch('https://jsonplaceholder.typicode.com/todos/2');
    })
    .then((data) => {
        console.log(data);
        return myFetch('https://jsonplaceholder.typicode.com/todos/3');
    })
    .then((data) => {
        console.log(data);    
    })
    .catch((err) => {
        console.log("ERROR: ",err);
    });    




// ...........Promise utils............

// promise.resolve()
//..................
//if promise is satisfied, this is executed



//promise.reject()
//..................
// if promise is rejected, this is executed


//promise.all() 
//..................
// executed after all promises get satisfied  


//promise.race()
//...................
// represents the first promise that is resolved     
    




// ............. Exception Handling...............
try {
     //some code
}
catch (e) {
     //some code
}
finally {
     // guaranteed code execution

     // code in finally is executed even if the code inside catch itself is erroneous  -- it is the use of finally 
}


// throw   -- allows the developers to throw errors 
//use class Error here to get the details like where and why it is thrown.    eg:     throw new Error("Ente Swantham Error..")   



//....async keyword.....     -- at the point of function declaration
async function getValue() {
    return 12;                       // async functions 
}



//.....await keyword....     -- at the time of funtion call


  






   