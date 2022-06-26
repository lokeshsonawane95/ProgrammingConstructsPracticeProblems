io= require('process');

let inputOne= parseInt(process.argv[2]);
let inputTwo= parseInt(process.argv[3]);
let inputThree= parseInt(process.argv[4]);

resultOne= inputOne+inputTwo*inputThree;
resultTwo= inputThree+inputOne/inputTwo;
resultThree= inputOne%inputTwo+inputThree;
resultFour= inputOne*inputTwo+inputThree;

let maxFromResult= Math.max(resultOne,resultTwo,resultThree,resultFour);
let minFromResult= Math.min(resultOne,resultTwo,resultThree,resultFour);

console.log("Max result from forumlas "+maxFromResult);
console.log("Min result from formulas "+minFromResult);