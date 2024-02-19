// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const ToUpperCaseArray = (arr:string[])=>{

    return arr.map(item=>item.toUpperCase());
};

let personName:string[] = ["Maxwell","john","braNdy","eriC"];
console.log(`"To Upper Case", ${ToUpperCaseArray(personName)}`);


const toLowerCase = (arr : string[])=>{
    return arr.map(item => item.toLowerCase());
}

let arrName:string[] = ["Maxwell","john","braNdy","eriC"];
console.log(`"To Lower Case", ${toLowerCase(arrName)}`);


// ----------------------------------------------------------


function toTitleCaseArray(arr: string[]): string[] {
    const result: string[] = [];
    for (const index in arr) {
        const words = arr[index].split(' ');
        const titleCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        result.push(titleCasedWords.join(' '));
    }
    return result;
}

let arrayName:string[] = ["Maxwell","john","braNdy","eriC"];
console.log(toTitleCaseArray(arrayName));
