// Simple Array Sum 
function simpleArraySum(n, ar) {
    let sum = 0;
    ar.forEach(num => sum = sum + num)
    return sum
}


// Compare the Triplets 
function solve(a0, a1, a2, b0, b1, b2){
    let a = 0;
    let b = 0;
    
    const aScores = [a0, a1, a2];
    const bScores = [b0, b1, b2];
    
    for (let i =0; i <= 3; i ++) {
        if (aScores[i] > bScores[i]) {
            a += 1;
        } else if (bScores[i] > aScores[i]) {
            b += 1; 
        }
    }
    
    return [a, b]
}


// A Very Big Sum 
function aVeryBigSum(n, ar) {
    let sum = 0; 
    ar.forEach(num => sum += num)
    return sum;
}


// Diagonal Difference 
function diagonalDifference(a) {
    let lToR = 0; 
    let rToL = 0;

    let x = a.length - 1;
    for (let i = 0; i < a.length; i ++) {
        lToR += a[i][i];
        rToL += a[i][x];
        x -= 1;
    }
    return Math.abs(lToR - rToL);   
}