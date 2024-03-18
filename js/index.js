// Verilmiş ədədlır siyahısındaki ədədlərin cəmini tapın qaytaran function

function sumDigit(arr){
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];      
    }
    return sum;

}
console.log(sumDigit([12,2,3,4,]));


//Verilmiş arraydəki ən böyük ədədi tapın qaytaran function

function findBig(arr){
    let temp=arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>temp){
            temp=arr[i];
        }   
    }
    return temp;
}
console.log(findBig([1,3,44]));

//Verilmiş ədədin rəqəmləri cəmini tapıb qaytaran function

function sumDigit2(a) {
    let temp, cem = 0;
    while (a !== 0) {
        temp = a % 10;   
        cem += temp;  
        a = Math.floor(a / 10);
    }
    return cem;
}
console.log(sumDigit2(932))


// Verilmiş ədədlər siyahısındaki ən çox təkrarlanan ədədi tapıb qaytaran function

function findManyRepeated(arr) {
    let numbers = []; 
    let mostRepeatedNum = arr[0]; 
    let repeatCount = 1; 

    for (let i = 0; i < arr.length; i++) {
        let digit = arr[i];
        if (numbers[digit] === undefined) {
            numbers[digit] = 1;
        } else {
            numbers[digit]++;
        }
        if (numbers[digit] > repeatCount) {
            mostRepeatedNum = digit;
            repeatCount = numbers[digit];
        }
    }
    return mostRepeatedNum; 
}

console.log(findManyRepeated([1,2,4,5,6,2,2,3,3,3])); 
