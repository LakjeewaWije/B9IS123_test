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
l = [1, 3, 6, 7, 8, 10]
function sumOfMultiples(valA, valB, list) {
    sum = 0;
    for (let index = 0; index < list.length; index++) {
        if (list[index] % valA == 0 || list[index] % valB == 0) {
            sum += list[index];
        }

    }

    alert(`sum of ${l.toString()} : ${sum}`);
}

sumOfMultiples(a, b, l);

// 2.
l1 = [3, 5];
l2 = [1, 3, 6, 7, 8, 10];
function sumOfMultiplesQuestionTwo(list1, list2) {
    sum = 0;
    [valA, valB] = list1;
    for (let index = 0; index < list2.length; index++) {
        if (list2[index] % valA == 0 || list2[index] % valB == 0) {
            sum += list2[index];
        }

    }

    alert(`sum of ${list2.toString()} : ${sum}`);
}

sumOfMultiplesQuestionTwo(l1, l2);


// 3.
li1 = [3, 5];
li2 = [1, 3, 6, 7, 8, 10];
function sumOfMultiplesQuestionThree(list1, list2) {
    sum = 0;
    [valA, valB] = list1;
    for (let index = 0; index < list2.length; index++) {

        for (let y = 0; y < list1.length; y++) {
            tempy =0
            if (list2[index] % list1[y] == 0) {
                tempy= y+1;
                console.log(list1.length ,tempy)
                if (list1.length == tempy) console.log("wijee")//sum += list2[index];
            } else {
                break;
            }
        }
    }

    alert(`sum of ${list2.toString()} : ${sum}`);
}

sumOfMultiplesQuestionThree(li1, li2);