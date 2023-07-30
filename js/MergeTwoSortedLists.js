//Merge two sorted lists

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing
// together the nodes of the first two lists.

// Example 2:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]



let list1 = [1,3,5,5,6]
let list2 = [2,6]

// let mergeTwoSortedLists = function (list1,list2){
//     let list = list1.concat(list2)
//     return list.sort()
// }

//
let mergeTwoSortedLists = function (list1, list2) {
    let output = [];
    //list1 iterator
    let i = 0;
    //list1 iterator
    let j = 0;
    while(i < list1.length && j < list2.length){
        if (list1[i] < list2[j]){
            output.push(list1[i])
            i++
        }
        else {
            output.push(list2[j])
            j++
        }
    }

    while(i < list1.length){
        output.push(list1[i])
        i++
    }

    while (j < list2.length){
        output.push(list2[j])
        j++
    }
    return output;
}

console.log(mergeTwoSortedLists(list1,list2))