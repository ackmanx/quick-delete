const idGenerator = require('./utils').idGenerator

test('happy', () => {
    expect(idGenerator.next().value).toEqual(0)
    expect(idGenerator.next().value).toEqual(1)
    expect(idGenerator.next().value).toEqual(2)
    expect(idGenerator.next().value).toEqual(3)
})
