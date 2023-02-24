export function capitalize(string){
    let array = string.split('')
    let firstLetter = array.shift()
    return firstLetter.toUpperCase() + array.join('')
}


export let calculator = {
    add(a, b){
        return a + b
    },
    subtract(a, b){
        return a - b
    },
    divide(a, b){
        return a / b
    },
    multiply(a, b){
        return a * b
    }
}