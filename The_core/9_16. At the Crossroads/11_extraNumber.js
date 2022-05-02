// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

function solution(a, b, c) {
    if (a === b) {
        return c;
    }

    if (a === c) {
        return b;
    }
    
    return a;
}
