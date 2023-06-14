// Input:
// root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// root = [2,1,3]
// Output: [2,3,1]

// Input:
    root = []
// Output: []



let invertTree = function (root){

    let output = []
    output.push(root[0])

    for (let i = 1; i < root.length; i = i + 2){
       let slice = root.slice(i, i+ 2).reverse();
       console.log(slice)
        output.push(slice)
        // root.splice(i,1,slice)
    }
    return output

}

console.log(invertTree(root))