// for(i = 1; i <= 20; i++){
//     console.log(i);
//     if(i < 5){
//         break;
//     }
// }

// var rostGiven = 0;
// while(rostGiven < 10){
//     console.log('Roast den');
//     rostGiven++;
//     if(rostGiven > 4){
//         break;
//     }
// }
// var items = ['kek', 'man', 'biscut', 'psoruti'];
// for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     if(item == 'biscut'){
//         break;
//     }
//     console.log(item);
// }

var numbers = [20, 25, 102, 30, 42];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}