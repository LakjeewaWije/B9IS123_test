alert('Project euler loaded');
// 1. https://projecteuler.net/problem=1

total = 0;
for (i = 0; i < 10; i++) {
    if (i % 3 == 0 || i % 5 == 0) total += i;
};
alert(total);