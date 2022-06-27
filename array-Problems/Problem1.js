//declaration of array
let randomNumberArray= new Array();
//array length is 10
while(randomNumberArray.length<10)
{
    //generating random numbers
    randomNumber= Math.floor(Math.random()*1000);
    //if number is greater than 99 and less than 1000
    if(randomNumber>=100 && randomNumber<=999)
    {
        randomNumberArray.push(randomNumber);
    }
}
//finding smallest and largest numbers
let small = randomNumberArray[0]
let large = randomNumberArray[0]
for (let i = 0; i < randomNumberArray.length; i++){
    if(randomNumberArray[i] < small){
        small = randomNumberArray[i]
    }
    if(randomNumberArray[i] > large){
        large = randomNumberArray[i]
    }
}
//finding second smallest and second largest numbers
let secondSmall = randomNumberArray[0]
let secondLarge = randomNumberArray[0]
for (let i = 0; i < randomNumberArray.length; i++){
    if(randomNumberArray[i] != small && randomNumberArray[i] < secondSmall){
        secondSmall = randomNumberArray[i]
    }
    if(randomNumberArray[i] != large && randomNumberArray[i] > secondLarge){
        secondLarge = randomNumberArray[i]
    }
}
console.log(randomNumberArray)
console.log("Second Smallest number is : " + secondSmall)
console.log("Second Largest number is : " + secondLarge)