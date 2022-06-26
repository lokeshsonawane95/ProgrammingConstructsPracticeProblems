io= require('process');

input=  process.argv[2];

let digitPosition=0;
while(input>0)
{
    digitPosition+=1;
    
    let modulusResult= input%10;
    
    input= Math.floor(input/10);
    
    console.log('Digit at '+digitPosition+' place is: '+modulusResult);
}