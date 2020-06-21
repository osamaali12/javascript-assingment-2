// // chapter 21-25

// // Task1:
// var firstname=prompt("Enter your First Name");
// var lastname=prompt("Enter your Last Name");
// var fullname=document.write("Your Full name is " + firstname + lastname + "<br>");

// // Task2:
// var phone=prompt("Enter your favourite mobile phone model");
// var length=prompt("enter the lenght of user ");
// var a=document.write("My Favourite Phone is " + phone + "<br>");
// var a=document.write("Length of String " + length + "<br>");

// //Task3:
// var str="Pakistani";
// var n= str.indexOf("n");
// document.write("String " + str + "<br>");
// document.write("The Index of n is " + n + "<br>");

// //task4:
// var str="Hello World";
// var n= str.lastIndexOf("l" , 9);
// document.write("String " + str + "<br>");
// document.write("Last Index of l " + n + "<br>");

// //task5:
// var str = "Pakistani";
// var res = str.charAt(3);
// document.write("String " + str + "<br>");
// document.write("Character at index 3 " + res + "<br>");

// //task6:
// var firstname=prompt("Enter your First Name");
// var lastname=prompt("Enter your Last Name");
// var res=firstname.concat(lastname);
// var fullname=document.write("Your Full name is " + res + "<br>");

// //task7:
// var str = "Hyderabad";
// var res = str.replace("Hyder", "Islam");
// document.write("City " + str + "<br>");
// document.write("After Replacement " + res + "<br>");


// //task8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var res = message.replace(/and/g, "&");
// document.write("After replacement: " + res + "<br>");

// //task9:
// var num="472";
// var a=typeof(num);
// var b=parseInt(num) + "<br>";
// document.write("Value is: " + num + "<br>");
// document.write("Type: " + a + "<br>");
// var num=472;
// var a=typeof(num);
// document.write("Value is: " + num + "<br>");
// document.write("Type: " + a + "<br>");


// //task10:
// var user=prompt("Enter your word");
// var res=user.toUpperCase();
// document.write("User Input: " + user + "<br>");
// document.write("Upper Case: " + res + "<br>");

// //task11:
// var str = prompt("Enter your word");
// var b=str.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
// document.write("User Input " + str + "<br>");
// document.write("Title Case " + b + "<br>");

// //task12:
// var num=35.26;
// var newnumber = parseInt(num.toString().replace(".", ""), 10);
// document.write("Number " + num + "<br>");
// document.write("Result: " + newnumber + "<br>");

// // //task13:
// // var username=prompt("Enter your name");
// // var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
// // document.write(format.test("My@string-with(some%text)") + "<br/>");
// // document.write(format.test("My string with spaces") + "<br/>");
// // document.write(format.test("MyStringContainingNoSpecialChars" + "<br>"));

// // //task14:
// // var a=["cake","apple pie", "cookie" , "chips" , "patties"];


// // //task15:
// // var password=prompt("enter your password");


// //task16:
// var str="University of Karachi";
// var a1=str.split("");
// for (var i=0; i<=21 ; i++){
// document.write(a1[i] + "<br>");
// }

// //task17:
// var a=prompt("enter your word");
// var b=a.slice(-1);
// document.write("User Input " + a + "<br>");
// document.write("Last Character of  Input: " + b + "<br>"); 

// //task18:
// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
// document.write("Text : The quick brown fox jumps over the lazy dog" + "<br>");
// document.write(count("The quick brown fox jumps over the lazy dog", 'the'));

// //chapter 26 -30;
// //task1:
// var num=prompt("Enter Positive Number");
// document.write("Number: " + num + "<br>");
// var round =Math.round(num);
// document.write("round of value: " + round + "<br>");
// var a=Math.floor(num);
// document.write("floor value: " + a + "<br>");
// var b=Math.ceil(num);
// document.write("ceil value: " + b + "<br>");

//task2:
var num=prompt("Enter Negative Number");
document.write("Number: " + num + "<br>");
var round =Math.round(num);
document.write("round of value: " + round + "<br>");
var a=Math.floor(num);
document.write("floor value: " + a + "<br>");
var b=Math.ceil(num);
document.write("ceil value: " + b + "<br>");

//task3:
var num=prompt("Enter Your Number");
var b=Math.abs(num);
document.write("The Absolute value of " + num + "is" + b + "<br>");

//task4:
var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write("random dice value " + diceRoll + "<br>");


//task5:
var heads = 0;
var tails = 0;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        flip("heads");
    }else{
        flip("tails");
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};