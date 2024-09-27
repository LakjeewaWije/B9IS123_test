alert('Project euler loaded');
// 1. https://projecteuler.net/problem=1

total = 0;
number = 1000;
for (i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) total += i;
};
alert(total);