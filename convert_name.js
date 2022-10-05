const readline = require("readline-sync");
let first_name = String(readline.question());
let surname1 = String(readline.question());
let surname2 = String(readline.question());
let surname3 = String(readline.question());
let surname1_first_letter = surname1.charAt(0);
let surname2_first_letter = surname2.charAt(0);
let result = (surname3 + ', ' + first_name + ' ' + surname1_first_letter + ' ' + surname2_first_letter)
