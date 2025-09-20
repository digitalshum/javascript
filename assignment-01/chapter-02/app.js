// Question 01: Declare a variable called username. 
var username;


/* Question 02: Declare a variable called myName & assign 
to it a string that represents your Full Name. */
var myName = "Shumaila Qamar";


// Question 03: Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message = "Hello World";
alert(message)


// Question 04: Write a script to save student’s bio data in JS variables and show the data in alert boxes. //
var studentName = "Shumaila Qamar";
alert("Student Name: " + studentName);

var studentAge = 26;
alert("Student Age: " + studentAge + " Year");

var studentCourse = "Modern Web & Application Development";
alert("Student Course: " + studentCourse);


// Question 05: Write a script to display the following alert using one JS variable: //

var word = "PIZZA";
var pattern = "";
for (var i = 1; i <= word.length; i++) {
    pattern += word.slice(0, i) + "\n";
}
console.log(pattern);


// Question 06: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) //
var email = "digitalshum@example.com";
alert("My email address is: " + email);


// Question 07: Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: //
var book = "A smarter way to learn JavaScript";
alert(book);


// Question 08:  Write a script to display this in browser through JS //
document.writeln(`<br><h2>Question No: 08</h2>\n
    <p>Yah! I can write HTML content through JavaScript.</p><br>`);


/* Question 09: Store following string in a variable and show in alert and
 browser through JS */
var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(string);
document.writeln("<h2>Question No: 09</h2>")
document.writeln(string);