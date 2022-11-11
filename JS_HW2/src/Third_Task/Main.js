console.log(action(1, 4, "+"));
console.log(action(12, 3, "-"));
console.log(action(2, 8, "*"));
console.log(action(36, 9, "/"));
console.log(action(3, 2, "}"));



function action(a, b, act){
	try{
		if(act == "+") return a + b;
		else if(act == "-") return a-b;
		else if(act == "*") return a*b;
		else if(act == "/") return a/b;
		else throw new Error ("action error");	
	}
	catch(err){
		console.log("!-Incorrect action-!");
	}
}