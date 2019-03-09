// Javascript ES6

// common functions
// getelementbyid
// getelementbytag
// createElement

// common property
// innerHTML

// var men declaire variable in the function scope
// let mean declaire variable in block scope

//class, property, function, data types, data structures

var rootElement = document.getElementById("root");
rootElement.innerHTML = "Todo List Page";

var unorderedList = document.createElement("ul");

// let you repeat some instructions
// let i=0
// while less than 10
// let i = i + 1
for (let i=0; i<10; i++){
    let listItem = document.createElement("li"); //list item
    listItem.innerHTML = i
    unorderedList.appendChild(listItem);
}

rootElement.appendChild(unorderedList);