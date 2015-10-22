Javascript Syntax:

Variables and Types:
	
	// Declaring variables. js follows follows camelCase convention for variables
	var variableName = value;
	var variableName1 = value1, variableName2 = value2, etc…;

	// Numbers: js does not differentiate between floats and ints. Everything is a number

	// Strings: same as Python

	// Booleans: 
	true and false (lowercase)

Objects: nearly identical to Python’s dictionaries. 

	// Declaring objects:
	var objectName = {
		key : value,
		key : value
	};
	
	Manipulation:
	
		// Retrieve Values. following will return the key as a string
		objectName.key;
		objectName[“key”];
		
		// Add Values:
		objectName.key = value;
		objectName[“key”] = value;

		// Remove Values:
		delete objectName.key;

	References/Assignments:

	same as Python // if a = 1, b = a, b = 1

	Arrays: // treated as a type of object

	structurally the same as Python
	have .push() method that is equivalent to Python’s .append() method.
	.pop() is the same.
	.splice(begin index, # of items to remove) //removes selected items from array

MISC:
	
	Whitespace: Ignored. Use liberally.

	Comments:
	// line comment text
	/* block comment text*/

	//  Regexes:
	/characters/;
	/characters/i; // i = case insensitive
	/^characters/; // ^ = checks beginning of string
	/characters$/; // $ = checks end of string
	
Operators:

	1 === 1; //   === returns true if two items are equal value and type.
	1 !== 2; //   !== returns true if two items are either not equal value or type. 
	1 == ‘1’ //   == returns true if two items are equal value, regardless of type.
	1 != ‘2’ //   != returns true if two items are not equal value, regardless of type.
	&& 	 //   the and operator
	|| 	 //   the or operator
	// everything else is the same as Python

Conditionals:

	//  simple if statements
	if (a === b) console.log(“a is equal to b”);

	//  syntax for if, else if, else blocks:
	if (a === true) {
	    console.log('True');
	} else if (a === false) {
	    console.log('Maybe not');
	} else {
	    console.log(‘wtf?’);
	}


	//  syntax for ternary operator expressions. equivalent to if, else block:
	a === b ? console.log(‘a is equal to b’) : console.log(‘a is not equal to b’);

	//  syntax for switch, case, default blocks:
	switch (variable) {
	    case “a” :
		console.log(‘a is correct’);
		break;
	    case “b” :
		console.log(‘b is not correct’);
		break;
	    default  :
		console.log(’not even close’);
		break;
	}

	/* if you don’t include a break after a case block, js will 
	   ignore the next case block and execute the next line. for 
	   example, if break; is removed after the case “a” : statement, 
	   and “a” is entered, js will execute ‘a is correct’, and continue 
	   down to execute ‘b is not correct’ before breaking. */

Value Types:

	//  General syntax for determining type:
	typeof variable; // returns the type as a string. e.g. ‘object’, ‘string’, ‘number’, etc.

	//  because arrays are considered an object type, they must be evaluated differently
	//  to distinguish them from regular objects. the following will evaluate to true 
	//  if variable is an array, and false if a regular object:
	typeof variable === ‘object’ && variable.hasOwnProperty(‘length’);

	//  null is also an object type, and will always be treated as an object.
	//  However, using an equal operator will evaluate ‘true’ when a variable value is null, 
	//  and false when it is a regular object:
	typeof null // returns ‘object’
	null === null // returns ‘true’
	var object = {};
	object === null // returns ‘false’


	//  typeof NaN (not a number) will return type ‘number’. Use:
	isNaN(variable); //  though this returns true if type is NaN or null, and false otherwise.

Loops:

	//  For loops syntax:
	for (i = 0; i = 10; i +=1) {
	    console.log(i);
	};
	
		// enumerative for loops like the following are not recommended for arrays. They 
		// may not iterate through the array in the correct order: iteration may pick up 
		// inherited properties that you don’t want for your code.
		for (item in objectName) {
	    	    console.log(item);
		}


	//  while loops
	while (i < 10) {
	    console.log(i + ‘until 10’);
	    i += 1;
	}

	//  do while loops. Executes loop at least once before requiring while condition.
	do {
	    console.log(‘myArray has ‘ + myArray.length + ‘ items ‘);
	    myItem = myArray.pop();
	} while (myItem !== false);

Functions:

	// syntax.
	function functionName() {
		console.log('string');
	}

	// creating a anonymous function as a variable to be passed in as an argument.
	var variableName = function(params) {
		console.log('string');
	}

	// as in Python, js functions are objects. They can be passed into other functions as arguments
	// 

Variable Scope:

	// within a function, using var to declare a variable keeps it local to the function
	// using just the variable name, makes it a global variable.
	window.variableName // accesses the global variable. useful within functions.

Is js OOP? 

	OOP languages are polymorphic, x, and y

	Polymorphism: 3 components
	
		Ad Hoc Polymorphism: ability of a function to behave differently depending on the 
		type of arguments it is given. E.g.:
		// Python example:
		def func(a, b):
		  print a + b
		x = 1
		y = 2
		a = “cat”
		b = “dog”
		func(x, y) returns 3
		func(a, b) returns catdog

		Parametic Polymorphism: ability of a function to perform the same action on an object
		regardless of its type. E.g.
		//  Python example:
		list.reverse() returns a list in reverse order regardless whether its items are tuples, ints, etc.
		
		
		Subtyping(inheritance)
		

	Data Encapsulation:


	js does Polymorphism, but when you configure it to do sub typing, you give up Data encapsulation.