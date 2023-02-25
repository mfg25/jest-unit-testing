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

export function reverseString(string){
    if(string.length == 1){
        return string
    }else{
        let array = string.split('')
        let letter = array.shift()
        
        return reverseString(array.join('')) + letter
    }
}

export function analyzeArray(array){
    let max = array[0]
    let min = array[0]
    let average = 0
    for (const e of array) {
        if(e > max) max = e
        if(e < min) min = e
        average += e
    }
    average = average/array.length
    return {average: average, min: min, max: max, length: array.length}
}

export function caesarCipher(string, shift){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let alphabetObj = {}
    let i = 0
    for(let e of alphabet){
        alphabetObj[e] = {e, value: i}
        i++
    }
    let splitedArray = string.split('')
    let result = []
   
    for(let letter of splitedArray){
        for(let letterProp in alphabetObj){
            if(alphabetObj[letterProp].e == letter){
                for(let letterObj1 in alphabetObj){
                    let finalValue = (alphabetObj[letterProp].value + shift) % 26
                    if(alphabetObj[letterObj1].value == finalValue) result.push(alphabetObj[letterObj1].e)
                }
            }
        }
    }
    
    return result.join('')
}
for(let i = 0; i < 25; i++){
    console.log(caesarCipher('teteu', i))
}
