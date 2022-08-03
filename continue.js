var numbers = [20, 25, 102, 30, 42];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        continue;
    }
    console.log(number);
}