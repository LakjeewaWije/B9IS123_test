/*Arrays:
a.
Create a function which takes parameters a,b,l
l is a list of integers
find the sum of all the multiples of a or b in l

b.
Create a function which takes parameters a,l
a is a list of two integers
l is a list of integers
find the sum of all the multiples of elements of a in l

c.
Create a function which takes parameters a,l
a is a list of integers
l is a list of integers
find the sum of all the multiples of elements of a in l
*/

alert("Array Js loaded");

a = 3;
b = 5;
l = [1,3,6,7,8]
function sumOfMultiples(valA, valB, list) {
    sum = 0;
    for (let index = 0; index < list.length; index++) {
        if (list[index] % valA == 0 || list[index] % valB == 0) {
            sum += list[index];
        }

    }

    alert(`sum of ${l.toString()} : `,sum);
}

sumOfMultiples(a,b,l);