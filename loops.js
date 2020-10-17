//function countdown(startingpoint, endingpoint)
function countDown(startingpoint, endingpoint){
	while (startingpoint > endingpoint){
		console.log("While Loop: " + startingpoint);
		startingpoint--;
	}
}

function countDownFor(startingpoint, endingpoint){
	for (var i = startingpoint; startingpoint > endingpoint; startingpoint--){
		console.log("For Loop: " + startingpoint);
	}
}

countDown(10,0);
countDownFor(10,0)

// var i = 0;
// var countLimit = 8;
// while (i < countLimit){
// 	console.log(i);
// 	i++;
// }

// for(var i = 0; i < countLimit; i++){
// 	console.log(i);
// }
