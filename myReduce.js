// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

 function myReduce(arr, callback, initialValue = 0) {
 	// To hold what will be returned
 	let result;
 	// Check to see if there is an initial value
 	// and check to see if the array is empty
 	if (initialValue && arr.length === 0) {
 		// Give result the inital value
 		result = initialValue;
 		// Return result (which return the initial value)
 		return result;
 	} 

 	// Iterate through arr
 	for (let i = 0; i < arr.length; i++) {
	  	// Check to see if we are at the start of the array
	  	// and if there is an initial value
 		if (i === 0 && initialValue) { // Initial value and starts at index 0
 			// Give result the callback return value
 			result = callback(initialValue, arr[i], i, arr);
 		} else if (i === 0 && !initialValue) { // Start at the frist index but with no initial value
 			// Assign the result the callback return value
 			// array accumulator starts at 0
 			// current value is the next item so arr[i+1] and
 			// the index of that value is i+1
 			result = callback(arr[i], arr[i+1], i+1, arr);
 		}
 		else { // No initial value 
 			// Assign the return of the callback to current
 			let current = callback(result, arr[i], i, arr);
 			// Assing current to result;
 			result = current;
 		}
 	}
 	// Return result
 	return result;
}
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/





// export this function (you can ignore this for now)
module.exports = myReduce;
