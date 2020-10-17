
function toggleBoolean (boolean){
	if(boolean == true){
		boolean = false;
		console.log("False")
	}else if(!boolean) {
		boolean = true;
		console.log("True")
	}}

toggleBoolean("Hello");
toggleBoolean(true);
toggleBoolean(false);