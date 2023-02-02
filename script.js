let one = prompt("Please enter your first grocery item.");
let oneNum = prompt("How many of this item?");
let two = prompt("Please enter second grocery item.");
let twoNum = prompt("How many of the second item?");
let three = prompt("Please enter your third grocery item.");
let threeNum = prompt("How many of third item?");
console.log(` ${oneNum} ${one} 
${twoNum} ${two}
${threeNum} ${three}`);
let sum = Number(oneNum) + Number(twoNum) + Number(threeNum);
console.log(`Total number of items: ${sum}`);

let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";

let pangram = "The quick brown fox jumps over the lazy dog.";

let anotherPangram = "The five boxing wizards jump quickly.";

let lc = tongueTwister.toLowerCase();
console.log(lc);

const search = 'fox';
const foxpan = pangram.indexOf(search);
console.log(foxpan);
const ucFoxpan = pangram.charAt(16).toUpperCase();
console.log(ucFoxpan);

const once = anotherPangram[10];
console.log(once);