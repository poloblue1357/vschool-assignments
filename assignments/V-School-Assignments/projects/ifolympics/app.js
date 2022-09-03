if (5 > 3) {
    console.log("is greater than");
}


if ("cat".length === 3) {
    console.log("is the length");
}
var cat = "cat"
    if (cat.length == 3) {
        console.log("is the length")
    }
if ("cat" === "dog") {
    console.log("are the same");
} else {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 19,
}
if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie");
} else  { 
    console.log(person.name + " can't go to the movie")
}

var person = {
    name: "Bobby",
    age: 19,
}
if (person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " can't go to the movie")
}

var person = {
    name: "Bobby",
    age: 19,
}
if (person.name[0] === "B" && person.age >= 18)  {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " can't go to the movie")
}

if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all")
}

if (1 <= 2 && 2 == 4) {
    console.log("yes");
} else {
    console.log("no")
}
var dog = "dog"
if (typeof dog === "string") {
    console.log("true");
} else {
    console.log("false")
}

if (typeof true === "boolean") {
    console.log("true");
} else {
    console.log("false")
}

if (typeof bob === "undefined") {
    console.log("true");
} else {
    console.log("false")
}

if ("s" > 12) {
    console.log("it is greater");
} else {
    console.log("not greater")
}
