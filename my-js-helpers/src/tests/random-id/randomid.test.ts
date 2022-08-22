import { randomid } from '../../helpers'

describe('id', () => {
  it('should return value with expected length', () => {
    const result = randomid()
    expect(result.length).toEqual(11)
  })

  it('should return expected value', () => {
    // testing 10,000 different ids
    const attempts = 10000
    const results = []
    for (let i = 0; i < attempts; i++) {
      const value = randomid()
      results.push(value)
    }

    const distinctResults = new Set([...results])
    expect(results.length).toEqual(distinctResults.size)
  })
})
