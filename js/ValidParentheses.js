// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

let first = "[]"

let second = "{}()[]"

let th = "[}[]"

let third = "[][}"

let s = "{[]}"

let f = "{[}]"




// function isValid(string){
//     let length = string.length
//     let check = 0;
//     for (let i = 0; i < string.length; i++){
//         for (let y = i + 1; y < string.length; y++){
//
//             if (string[i] === "(" && string[y] === ")"){
//                 check++
//             }
//             if (string[i] === "[" && string[y] === "]"){
//                 check++
//             }
//
//             if (string[i] === "{" && string[y] === "}"){
//                 check++
//             }
//         }
//     }
//
//     return length === check * 2;
//
// }

// let isValid = function(string) {
//     // split string into array
//     string = string.split("");
//     //create array to push opening brackets into
//     let stack = [];
//     for (let letter of string) {
//         if (letter === "(" || letter === "{" || letter === "[") {
//             stack.push(letter);
//
//     //if the letter is a closing bracket check the stack or the array of brackets
//     //if there is a matching bracket remove it from the array
//         } else {
//             let top = stack[stack.length - 1];
//             if (letter === ")" && top === "(" || letter === "]" && top === "[" || letter === "}" && top === "{")
//                 stack.pop();
//             else
//                 return false;
//         }
//     }
//     //ultimately  the array will be equal to nothing if there was matching brackets
//     return stack.length === 0;
// };



let isValid = function(string){
    string = string.split("");
    let brackets = [];
    for (let bracket of string){
        if (bracket === "[" || bracket === "{" || bracket === "("){
            brackets.push(bracket);
        }else {
            let last = brackets[brackets.length - 1]
           if (bracket === "}" && last === "{" || bracket === "]" && last === "[" || bracket === ")" && last === "("){
               brackets.pop();
           } else {
               return false
           }
        }
    }
    return brackets.length === 0;

}



console.log(isValid(second))