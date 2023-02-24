import {capitalize, calculator} from './script.js'

it('capitalize first letter', () => {
    expect(capitalize('teste')).toBe('Teste')
})

it('calculator', () => {
    expect(calculator.add(2, 2)).toBe(4)
    expect(calculator.subtract(2, 2)).toBe(0)
    expect(calculator.divide(2, 2)).toBe(1)
    expect(calculator.multiply(2, 2)).toBe(4)
})