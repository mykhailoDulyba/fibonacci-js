//Recursia approach

const n = parseFloat(prompt('Recursia approach number'));

function fibRec(n) {
    if (n < 2) {
        return n
    } else {
        return fibRec(n - 1) + fibRec(n - 2);
    }
}

for (let i = 1; i <= n; i++) {
    document.write(fibRec(i));
}

document.write('<br>');

//Cycle approach

const s = parseFloat(prompt('Cycle approach number'));

function fibCycle(s) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= s; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
for (let i = 1; i <= s; i++) {
    document.write(fibCycle(i));
}

document.write('<br>');

//Array approach
const d = parseFloat(prompt('Array approach number'));

function fibArray(d) {
    let array = [1, 1];
    for (let i = 3; i <= d; i++) {
        array[2] = array[0] + array[1];
        array[0] = array[1];
        array[1] = array[2];
    }
    return array[1];
}

for (let i = 1; i <= d; i++) {
    document.write(fibArray(i));
}
