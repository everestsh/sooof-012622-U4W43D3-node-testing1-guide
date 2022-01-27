// Test away!
function makeFive(){
    return 4
}

test('sanity', ()=>{
    expect(true).toBe(true)
})
describe(`intro to testing`, ()=>{
    test('sanity again', ()=>{
        expect(true).not.toBe(false)
    })
    test(`structure of test`, ()=> {
        const expected = 4
        const actual = makeFive()
        expect(actual).toBe(expected)
    })
})