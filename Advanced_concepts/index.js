// 20/06/24 

//.........Call back function........

// Types of Callback:
// (i) Synchronous (function is executed in the main thread itself)
// (ii) Asynchronous (function different from main thread)


//....Asynchronous Callback....
console.log("START")

document.getElementById("myBtn").onclick = myFunction;   // here myFunction is a Call back fuction

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
    return function (){
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
    a : 1,     
    b : 2, 
    c : "Hello"
};

var obj2 = {
    ...obj1
};

var obj3 = obj1;

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log( obj1 === obj2 )  // (O/P) : false , reason  : created a new different object
console.log( obj1 === obj3 )  // (O/P) : true  , reasom  : used the same reference to create new object therefore both are same

// example 
var obj0 = {
    a1 : 1,
    b1 : 2, 
    c : "Hello World"
}

// obj is a combined version of both the objects with unique keys.Value of the same key is overwritten by the value of the last object's key appended
var obj = {
    ...obj1,
    ...obj0
}
// here "Hello" is overwritten by "Hello World" as it comes last

console.log(obj);

// eg 2: 
var arr1 = [1,2,3,4,5]
var arr2 = [1,2,4,6,5]

var arr3 = [...arr1,...arr2]  //here duplication of values happens as there are no keys

console.log(arr3)

maxArr = Math.max(arr3) // (O/P) : won't work even , therefore use Spread operator, i.e,

maxArr = Math.max(...arr3)
minArr = Math.min(...arr3)

console.log(maxArr,minArr);








    
// ...........Destructuring Assignment...........

// Object destructuring 
const obj11= {
    name : "Aleena",
    age : 20,
    place : "Wayanad"
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

    




//............Array Functions...........

// ...FOREACH...
// argument 1 : a call back function
// argument 2 : index
const myArray = [1,2,3,4,5];

myArray.forEach((item) => {
    console.log(item)
});


//...FIND...
// argument : a call back function
// returns the value if it is found, otherwise undefined.
 var res = myArray.find((item) => {
    return item === 3
})
console.log(res);  // (O/P) : 3


//...FILTER...


//...MAP...


//...REDUCE...


