// Test away!

const { makeFive , makeFour, makeObj, Car} = require('./car')
test('sanity', ()=>{
    expect(true).toBe(true)
})
describe(`intro to testing`, ()=>{
    test('sanity again', ()=>{
        expect(true).not.toBe(false)
    })
    test(`structure of test`, ()=> {
        const expected = 5
        const actual = makeFive()
        expect(actual).toBe(expected)
    })
    test(`async functiont`, ()=> {
        const expected = 4
        const actual = makeFour()
        expect(actual).toBe(expected)
    }) 
})

describe(`comparing values`, ()=>{
    it('works with objects', ()=>{
        expect('foo').toBe('foo') // use toBe with 'scalar' values like strings etc
        expect({}).not.toBe({})
        expect([]).not.toBe([])

        const o = {}
        const o2 = o
        expect(o).toBe(o2)
    })

    test('shapes of composite values', () => {
        expect({}).toEqual({})
        expect([]).toEqual([])
        expect(makeObj()).toEqual({})


        // m 1
        // const o = { name: 'lady gaga' }
        // expect(o).toEqual({ name: 'lady gaga' }) // NOT VERY RESILIENT
        
        const o = { name: 'lady gaga', password: '1234' }
        expect(o.name).toBe('lady gaga')
        // expect(o).toEqual({ name: 'lady gaga' }) // NOT VERY RESILIENT
        // expect(o).toMatchObject({ name: 'lady gaga' })
    })
})


describe('Car class', () => {
    let prius
    beforeEach(() => {
      prius = new Car('prius', 'toyota')
    })
    // beforeAll, afterEach, afterAll

    it('exists', () => {
        // 0- start with tests in the green
        // 1- write simplest possible failing test
        // 2- write simplest code that will pass test
        // 3- reward yourself refactoring
        expect(Car).toBeDefined()
      })
      it('has a model prop prius', () => {
        //   const prius = new Car('prius')
        expect(prius).toHaveProperty('model', 'prius')
      })
      it('has a make prop totota', () => {
        // const prius = new Car('prius', 'toyota')
        expect(prius.make).toBe('toyota')
      })
      it('has an odometer at 0 miles', () => {
        // const miata = new Car('miata', 'mazda', )
        // // empty test is a false positive
        // expect(miata.odometer).toEqual(0)
        // expect(miata.odometer).toBe(0)
        expect(prius.odometer).toBe(0)
      })
      it('has a drive method that takes distance and inc odometer', () => {
        
      })
})