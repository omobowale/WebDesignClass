//operators

//7 = 7.0

//-Arithmetic operators
//+, -, *, /, %,
//% - modulus (remainder) 
var a = 5;
var b = 6;
var f = 9;

var c = a + b + f;
var d = a - b - f;
var x = a * b * f;
var value = a * b - c + d;  // 30 - 20 - 10
var divide = c / 2;
var rem = 10 % 3;   //1
var rem2 = b % 4;   //2
var rem3 = 4 % 7;   //4
var rem4 = 13 % 100; //13   all integers are doubles 

var something = (a == b);  //String, int, double, char, boolean, 
//alert(something);

//12.75738584858323423234234  //float, double


document.write("c : " + c + "<br>");
document.write("d : " + d + "<br>");
document.write("x : " + x + "<br>");
document.write("value : " + value + "<br>");
document.write("divide : " + divide + "<br>");
document.write("rem3 : " + rem3 + "<br>");
document.write("rem4 : " + rem4 + "<br>");


//-Comparison operators 
//<, >, ==, <=, >=, !=, ===, !==

document.write("a < b : " + (a < b) + "<br>");
document.write("b > f : " + (b > f) + "<br>");
document.write("a == 6 : " + (a == 6) + "<br>");
document.write("f <= 6 : " + (f <= 6) + "<br>");
document.write("12 >= 12  : " + (12 >= 12) + "<br>");
document.write("12 != 12  : " + (12 != 12) + "<br>");
document.write("12 == '12'  : " + (12 == 12) + "<br>");
document.write("12 === '12'  : " + (12 === '12') + "<br>");
document.write("12 != '12'  : " + (12 != '12') + "<br>");
document.write("12 !== '12'  : " + (12 !== '12') + "<br>");

//-Assignment operators
// =, +=, -=, *=, /=, %=

//  +=
var y = 67;
var z = 2;
z += 3         // z = z + 3

y += 8;      //y = y + 8

//alert(y);

//  -=
y -= 12;     //y = y - 12

//alert(y);

z *= 4;      //z = z * 4;    //z = 20


z /= 5;    //z = z / 5;     //z = 4


z %= 3;     // z = z % 3;      //z = 1


//-Logical operators

//&&, ||, !
//&& (and)
// || (or)
// ! (not)


//false and false = false        //false = 0, true = 1, and = *, or = +
//false and true = false
//true and false = false
//true and true = true

//true or false = true
//false or true = true
//false or false = false
//true or true = true

var x = !( (4 == 3) && (7 > 9) );    // !(false && false) = !false 
var y = (3 === '3') || (7 > 9);    // false || false = false

var g = !false;       //true

alert("x : " + x);

//- Conditional / Ternary operator (? : )  --shorthand way of writing the if.. else statement

var t = (23 <= 35) ? "I like meat" : "I am a vegetarian";

alert(t);

//Github  -- hosting your webpage















