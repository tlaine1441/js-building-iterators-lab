// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach

// My each
function myEach(arr, callback) {
	// Iterate through arr
 	for(let i = 0; i < arr.length; i++) {
	  	// Pass every element of arr into callback
	  	// The index: i 
	  	// the whole array: arr
	    callback(arr[i], i, arr);
	}
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/




// export this function (you can ignore this for now)
module.exports = myEach;
