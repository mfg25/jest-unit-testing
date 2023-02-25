import {capitalize, calculator, reverseString, analyzeArray, caesarCipher} from './script.js'

it('capitalize first letter', () => {
    expect(capitalize('teste')).toBe('Teste')
})

it('calculator', () => {
    expect(calculator.add(2, 2)).toBe(4)
    expect(calculator.subtract(2, 2)).toBe(0)
    expect(calculator.divide(2, 2)).toBe(1)
    expect(calculator.multiply(2, 2)).toBe(4)
})

it('reverse string', () =>{
    expect(reverseString('banana')).toBe('ananab')
    expect(reverseString('1234')).toBe('4321')
})

it("analyze array", () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 })
    expect(analyzeArray([10,0,0,0])).toStrictEqual({ average: 2.5, min: 0, max: 10, length: 4 })
})

it("caesar cipher", () =>{
    expect(caesarCipher('teste', 5)).toBe('yjxyj')
    expect(caesarCipher('zzz', 1)).toBe('aaa')
    expect(caesarCipher('matheus', 20)).toBe('gunbyom')
    
})