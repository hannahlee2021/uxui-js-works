// console.log('starting work...');

// let homework_state = prompt('do i have homework [Y/N]');

// if(homework_state == 'Y') {
//     let homework_due = prompt('is my homework due tomorrow [Y/N]')
//     if(homework_due == 'Y') {
//         let mental_cond = prompt('do i feel like doing it [Y/N]');
//         if (mental_cond == 'Y') {
//             console.log('i am doing homework 1');
//             console.log('i am doing homework 2');
//         } 
//         else {
//            runHungerProgram();

//         }
//         else {
//             runHungerProgram();
//         }
//         else {

//         }
//     }
// };

// function runHungerProgram() {
//     let hunger_state = prompt('am i hungry [Y/N]');
//     if (hunger_state == 'Y') {
//         console.log('making food');
//     } else {
//         console.log('playing games');
//     }
// }

// a function that searches a string and find if it contains a pattern eg. life case insensitive
const my_quote = "The Answer to the Great Question Of Life, the Universe and Everything is Forty-two";

function findMatch(string, pattern) {
    string = string.toLowerCase();
    pattern = pattern.toLowerCase();

    if (string.indexOf(pattern) !== -1) {
        return 'yes';
    } else {
        return 'no';
    }
}
console.log(findMatch(my_quote,'life'));

//when match found, privide a callback that changes that matched part of the string in some way eg make it all uppercase or wraps in quotes.

//attempt 1
// function changeMatch(string,pattern,callback) {
//     string = string.toLowerCase();
//     pattern = pattern.toLowerCase();

//    let x = function y() {

//    if (string.indexOf(pattern) !== -1) {
//         return 'yes';
//     } else {
//         return 'no';
//     }
// }
//     callback(x.toUpperCase);
// }

// console.log(changeMatch(my_quote,'life',x));

//attempt 2
function changeMatch(string,pattern,callback) {
    if (changeMatch == 1) {
        
    }
}

console.log(changeMatch(my_quote,'life',x));