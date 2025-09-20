// Question 01
/* Write a program that takes two user inputs for first and 
last name using prompt and merge them in a new variable 
titled fullName. Greet the user using his full name. */

// var firstName = prompt("Enter Your First Name");
// var secondName = prompt("Enter Your Second Name");

// alert("Welcome " + firstName + " " + secondName + "." )

//////////////////////////////////////
// Question 02

/*Write a program to take a user input about his favorite 
mobile phone model. Find and display the length of user 
input in your browser */

// var favMobile = prompt("Enter Your Favorite Mobile Model.");

// document.writeln("My favorite phone is: " + favMobile);
// document.writeln("Length of string: " + favMobile.length);

///////////////////////////////////
// Question 03

/*Write a program to find the index of letter “n” in the word 
“Pakistani” and display the result in your browser */

// var str = "Pakistani";
// console.log("index of letter n in the word Pakistan is " + str.indexOf("n"));


/////////////////////////////
// Question 04

/*Write a program to find the last index of letter “l” in the 
word “Hello World” and display the result in your browser. */

// var lastIndex = "Hello World";
// console.log("index of I is " + lastIndex.lastIndexOf("l"));

/////////////////////////////
// Question 05

/*Write a program to find the character at 3rd index in the 
word “Pakistani” and display the result in your browser*/

// var thirdIndex = "Pakistani";
// console.log("3rd index of word Pakistani is : " + thirdIndex.charAt(3));

/////////////////////////////
// Question 06

//  Repeat Q1 using string concat() method

// var firstName = prompt("Enter Your First Name");
// var secondName = prompt("Enter Your Second Name");
// var fullName = firstName.concat(" ", secondName);
// alert("Welcome ".concat(fullName, "!"));

// alert("welcome " + firstName.concat(" ", secondName + "!"));

/////////////////////////////
// Question 07

// Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser. 

// var hyderReplace = "This is hyder";
// hyderReplace = hyderReplace.replace("hyder" , "hyderabad");
// console.log(hyderReplace);

// hyderReplace = hyderReplace.replace("hyderabad" , "Islamabad");
// console.log(hyderReplace);


/////////////////////////////
// Question 08

// Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// message = message.replace(/and/g , "&");
// console.log(message);

/////////////////////////////
// Question 09

/* Write a program that converts a string “472” to a number 
472. Display the values & types in your browser. */

// var numString = "472";
// console.log(Number(numString));

/////////////////////////////
// Question 10

/*Write a program that takes user input. Convert and 
show the input in capital letters.*/

// var word = "peanuts";

// console.log(word.toLocaleUpperCase());

/////////////////////////////
// Question 11

/*Write a program that takes user input. Convert and 
show the input in title case. */

// var js = "javascript";
// caseTitle = js.charAt(0).toLocaleUpperCase + js.slice(1).toLocaleLowerCase
// console.log(js);

/////////////////////////////
// Question 12

/*Write a program that converts the variable num to 
string. 
Remove the dot to display “3536” display in your browser. */

// var number = 35.36;
// console.log(number);

////////////one method
// var str = number.toString().split(".").join("");
// console.log(str);
// console.log(typeof str);

/////////////////////////////
// Question 13

/////////////1 method

// let username = prompt("Enter your username:");

// while (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
//     username = prompt("Invalid username. Please enter a valid username without [@ , . !]:");
// }

// document.write("Your username is: " + username);

/////////////////////// 2 method

// var userName = prompt("Enter Your UserName(without symbols");
// var error = ["@", "."];

// while (userNam.in) {
//     userName = prompt("Invalid username!");
// }
// console.log(userName);


/////////////////////////////
// Question 14

/*You have an array 
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not. 
Note: Perform case insensitive search. Whether the user 
enters cookie, Cookie, COOKIE or coOkIE, program 
should inform about its availability. Example:*/

// let items = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter item to search:").toLowerCase();

// if (items.includes(userInput)) {
//   alert(userInput + " is available in our bakery.");
// } else {
//   alert("we are sorry! " userInput + " is not available in our bakery.");
// }

/////////////////////////////
// Question 15

// Write a program to take password as an input from 
// user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
// If the password does not meet above requirements, 
// prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII 
// table at the end of this document.

// var passWord = prompt("Enter your password, The password must qualify these requirements: It should contain alphabets and numbers , It should not start with a number , It must at least 6 characters long")

// if(passWord.includes()){

// }


/////////////////////////////// 1st method /////////////////////////

// let password = prompt("Enter your password:");

// let valid = false;

// while (!valid) {
//   let hasLetter = false;
//   let hasNumber = false;
//   let startsWithNumber = false;

//   // Check length
//   if (password.length >= 6) {

//     // Check first character ASCII
//     let firstCharCode = password.charCodeAt(0);
//     if (firstCharCode >= 48 && firstCharCode <= 57) {
//       startsWithNumber = true;
//     }

//     // Check each character
//     for (let i = 0; i < password.length; i++) {
//       let code = password.charCodeAt(i);

//       // A-Z (65–90) or a-z (97–122)
//       if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         hasLetter = true;
//       }

//       // 0–9 (48–57)
//       if (code >= 48 && code <= 57) {
//         hasNumber = true;
//       }
//     }

//     // All conditions
//     if (hasLetter && hasNumber && !startsWithNumber) {
//       valid = true;
//     } else {
//       alert("Invalid password! Must contain letters & numbers, not start with number.");
//       password = prompt("Enter a valid password:");
//     }
//   } else {
//     alert("Invalid password! Must be at least 6 characters.");
//     password = prompt("Enter a valid password:");
//   }
// }

// alert("Password accepted!");


//////////////////////////// 2nd method /////////////////////////////////////


let password = prompt("Enter your password:");

while (true) {
  let hasLetter = false;
  let hasNumber = false;

  // Check each character's ASCII code
  for (let i = 0; i < password.length; i++) {
    let code = password.charCodeAt(i);

    // Check for letters (A-Z = 65–90, a-z = 97–122)
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      hasLetter = true;
    }

    // Check for numbers (0–9 = 48–57)
    if (code >= 48 && code <= 57) {
      hasNumber = true;
    }
  }

  // Check if password starts with a number
  let firstCharCode = password.charCodeAt(0);
  let startsWithNumber = (firstCharCode >= 48 && firstCharCode <= 57);

  // Now validate using only if statements
  if (hasLetter) {
    if (hasNumber) {
      if (!startsWithNumber) {
        if (password.length >= 6) {
          alert("Password accepted!");
          break; // Exit loop
        } else {
          alert("Password must be at least 6 characters long.");
        }
      } else {
        alert("Password should not start with a number.");
      }
    } else {
      alert("Password must contain at least one number.");
    }
  } else {
    alert("Password must contain at least one alphabet.");
  }

  password = prompt("Enter a valid password:");
}
