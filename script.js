// Q : Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// Ans : var a = 10;
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br><br>");
// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// Q : What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// Ans : var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: " + a + "<br>");
// document.write("b is: " + b + "<br>");
// document.write("result is: " + result);

// Q : Write a program that takes input a name from user & greet the user.
// Ans : var userName = prompt("Enter your name:");
// alert("Hello, " + userName + "!");

// Q : Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// Ans : var number = prompt("Enter a number:");
// if (number === "" || number === null) {
//   number = 5;
// };
// document.write("Multiplication Table of " + number + "<br><br>");
// for (var i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + (number * i) + "<br>");
// };

// Q : Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table).
// Ans : var subject1 = prompt("Enter 1st subject name:");
// var subject2 = prompt("Enter 2nd subject name:");
// var subject3 = prompt("Enter 3rd subject name:");
// var totalMarksPerSubject = 100;
// var marks1 = +prompt("Enter marks obtained in " + subject1 + ":");
// var marks2 = +prompt("Enter marks obtained in " + subject2 + ":");
// var marks3 = +prompt("Enter marks obtained in " + subject3 + ":");
// var totalMarks = totalMarksPerSubject * 3;
// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.write("<table border='1' cellpadding='10'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + Math.round((marks1/100)*100) + "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + Math.round((marks2/100)*100) + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + Math.round((marks3/100)*100) + "%</td></tr>");
// document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th><th>" + Math.round(percentage) + "%</th></tr>");
// document.write("</table>");


