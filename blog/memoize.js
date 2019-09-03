module.exports = function memoize(fn){
    let memo = {}
    return function memoized(){
        const key = JSON.stringify(arguments)
        if(!memo[key]) memo[key] = fn.apply(this, arguments)
        return memo[key]
    } 
}
