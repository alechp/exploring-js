/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-30T15:56:07-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-02-02T14:45:24-08:00
 */

// https://www.youtube.com/watch?v=pCqfbzj2iLY

//NOTE: Seems that slice only produces shallow copy
/*
Array.slice(val1, val2)
slice:
* returns portion of array as second array
* does not modify array
* first arg specifies starting element
* second argument specifies ending argument
* second argument is optional
*/

const log = console.log;

log("-------------------");
log("Slice");
log("-------------------");
let arr = [1, 2, 3, 4, 5, 6];
let arr1 = arr.slice(0, 2); //up to, but not including 2nd index (ie. 3)
log("arr1", arr1);
//[ 1, 2]

let arr2 = arr.slice(4); //start on 4th index and include it...when no second var specified, go entire len
log("arr2", arr2);
// [5, 6]

log("-------------------");
/*
Array.splice(start, delete);
* modifies the array on which it is invoked
* first arg specifies array pos for insertion or deletion
* second arg indicates number of elements to delete
* deleted elements are returned as an array
 */

/*
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]
*/

log("-------------------");
log("Splice");
log("-------------------");
let arrZ0 = [1, 2, 3, 4, 5, 6];
log("arrZ", arrZ0);

log("-------------------");

let arrZ1 = [1, 2, 3, 4, 5, 6];
let arrZ1s = arrZ1.splice(2, 2);
log("arrZ1", arrZ1);
log("arrZ1s", arrZ1s); // [ 3, 4 ]

log("-------------------");

//delete
let arrZ2 = [1, 1, 3, 5, 8, 13];
let arrZ2s = arrZ2.splice(4); //start deleting AFTER specified index
log("arrZ2", arrZ2);
log("arrZ2s", arrZ2s); // [ 8, 13 ]
log("-------------------");

//insert but do NOT  delete
let arrZ3 = [1, 2, 3, 4, 5, 6];
let arrZ3s = arrZ3.splice(2, 0, "a", "b"); //0 indicates don't want to delete anything
log("arrZ3", arrZ3); //empty array
log("arrZ3s", arrZ3s); // [ ]
log("-------------------");

//insert AND deleted
let arrZ4 = [1, 2, 3, 4, 5, 6];
let arrZ4s = arrZ4.splice(2, 1, "a", "b");
log("arrZ4", arrZ4);
log("arrZ4s", arrZ4s); // [ 3 ]
log("-------------------");

/*

Output:::::::::::::
-------------------
Slice
-------------------
arr1 [ 1, 2 ]
arr2 [ 5, 6 ]
-------------------
-------------------
Splice
-------------------
arrZ [ 1, 2, 3, 4, 5, 6 ]
-------------------
arrZ1 [ 1, 2, 5, 6 ]
arrZ1s [ 3, 4 ]
-------------------
arrZ2 [ 1, 1, 3, 5 ]
arrZ2s [ 8, 13 ]
-------------------
arrZ3 [ 1, 2, 'a', 'b', 3, 4, 5, 6 ]
arrZ3s []
-------------------
arrZ4 [ 1, 2, 'a', 'b', 4, 5, 6 ]
arrZ4s [ 3 ]
-------------------
 */
