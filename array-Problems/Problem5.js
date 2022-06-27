let repeatingArray = new Array()

for(let i = 10; i < 100; i++){
    let temp = parseInt(i)
    let remainder = (temp % 10)
    remaining = parseInt(i / 10)
    if(remaining == remainder){
        repeatingArray.push(i)
    }
}
console.log(repeatingArray)