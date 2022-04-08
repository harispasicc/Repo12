function myCountdown(n){
    if (n<1) {
        return [];
    } else {
        const countArray = myCountdown(n -1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(myCountdown(-1));
console.log(myCountdown(10));
console.log(myCountdown(5));

module.exports = myCountdown;