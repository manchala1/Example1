var Name = prompt("what is your name");
var height = prompt("what is your height in cm");
var weight = prompt("what is your weight in kg");
heightinmeters=height/100
bmi=weight/(heightinmeters*heightinmeters)
if(bmi<25 && bmi>=18){
    console.log(`Hey ${Name},you are having normal weight`)
}
else if(bmi>=25){
    console.log(`Hey ${Name},you are over weight`)
}
else{
    console.log(`Hey ${Name},you are under weight`)
}