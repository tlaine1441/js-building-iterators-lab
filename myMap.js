// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
	//  New array  to return
	const newArr = [];
	// Iterate through all index's of arr
	for(let i = 0; i < arr.length; i++) {
  		// Pass every element of arr into callback
  		// The index: i 
  		// the whole array: arr
  		let callbackReturn = callback(arr[i],i , arr);
  		// push callback return into newArray
    	newArr.push(callbackReturn);
	}
	// Return newArr
	return newArr;
}


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
