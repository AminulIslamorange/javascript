// year will be leap year

function isLeapyear(year){
    const leapyear=year%4
    if(leapyear===0){
        console.log('Leap year')
    }
}
const year=2020
const input=isLeapyear(year);
console.log(input)