// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


let myArray: number[] = [1, 2, 3, 4, 5];

let index = 10;
if (index < myArray.length) {
    console.log(myArray[index]); // Access the element only if index is valid
} else {
    console.log("Index is out of bounds");
}
