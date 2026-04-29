// singleton--> apne treh ka ek hi object hai
// Object.create -->(constructer method)

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Deeksha",
    [mySym] : "key1",
    age: 18,
    location: "Jaipur",
    "fname":"DeeksaSingh",
    email: "Deeksha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(typeof JsUser[mySym])
// console.log(JsUser["email"])

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "deeksha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "deeksha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
//     console.log("Hello JS user");
}
// console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greetingTwo());


//https://www.geeksforgeeks.org/javascript/objects-in-javascript/  ----object doc
