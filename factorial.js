 function factorial (n){
    let factor = 1
    for (let i = n; i >1; i--) {
        factor = i*factor
    }
    return factor
}
// BigO = On
// console.log(factorial(1));