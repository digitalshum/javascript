// Question 01: Declare and initialize an empty multidimensional array. 
// (Array of arrays)  

var multidimensional = ["one ", " two ", " three ", [" Aa ", "Bb ", "Cc "], " four ", [" Alif ", " Bay"], " five"];

document.writeln(`<h4>${"Question-01 = " + multidimensional}</h4>`);


// Question 02: Declare and initialize a multidimensional array 
// representing the following matrix:
// 0 1 2 3
// 1 0 1 2
// 2 1 0 1

var multidimensional2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 0; i < multidimensional2.length; i++) {
    document.writeln(`<h3>First Level Lopp --- ${multidimensional2[i]}</h3>`)

    for (var j = 0; j < multidimensional2[i].length; j++) {
        document.writeln(`<p>Second Level Lopp --- ${multidimensional2[i][j]}</p>`)
    }
}

// Question 03: Write a program to print numeric counting from 1 to 10.  

document.writeln(`<h4>Counting 1 to 10:<br></h4>`)

for (var i = 1; i <= 10; i++) {
    document.writeln(i + "<br><br>")
}

// Question 04:  Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user. 

document.writeln(`<h4> Table: <br></h4>`)

var start = +prompt("Start Num");
var end = +prompt("End Num");
var user = +prompt("Enter your Table Num");

for(var i = start; i <= end; i++){
document.writeln(`<p>${user} x ${i} = ${user * i}</p>`)

}

// var start = +prompt("Start Number");
// var END = +prompt("eND Number");
// var number = +prompt("Enter Number");

// for(var i =start; i<=END; i++){
// document.writeln(`<h1>  ${number} X ${i} = ${number * i}  </h1>`)
// }