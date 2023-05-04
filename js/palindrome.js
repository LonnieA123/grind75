// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
// removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
//
//
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
//
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

function isPalindrome(input){
    //remove special symbols and make everything lowercase
    input = input.replace(/[^a-zA-Z0-9]/g, '')
    //log it to make sure
    console.log(input)
    //create our reverse variable to compare our parameter to
    let reverse = input.split('').reverse().join('')
    //return if reverse and input are equal
    return input === reverse;
}

console.log(isPalindrome("racecar"))