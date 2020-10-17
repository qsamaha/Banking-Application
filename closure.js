function greetMaker(name){
	function greet (){
		console.log("Hello " + name);
	}

	return greet;
}

var greetQutada = greetMaker("Qutada");
greetQutada();

var greetWorld = greetMaker("World");
greetWorld();

//create function createAdder(baseNumber)
//return function (numberToAdd)
//return baseNumber + numberToAdd
function createAdder(baseNumber){
	return function (numberToAdd){
		var result = baseNumber + numberToAdd;
		return result;
			}
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));
