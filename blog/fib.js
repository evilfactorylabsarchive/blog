module.exports = function Fib(num){ 
    return num <= 1 ? num : Fib(num-1) + Fib(num-2) 
}
