

describe('a function that gets the repositories', function () {
  it('should exist', function () {
    expect(getRepos).toBeDefined()
  })
})

describe('a function that gets the userData', function () {
  it('should exist', function () {
    expect(getUser).toBeDefined()
  })
})


describe('a function that adds data to DOM', function () {
  it('should exist', function () {
    expect(addToDom).toBeDefined()
    })
})
describe('a function that adds userdata to DOM', function () {
  it('should exist', function () {
    expect(addUser).toBeDefined()
    })
})

describe('a function that catch errors', function () {
  it('should exist', function () {
    expect(getError).toBeDefined()
  })
  it('should return undefined if there is no error', function () {
    expect(getError()).toEqual(undefined)
  })

})


