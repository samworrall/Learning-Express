beforeEach(function() {
  sam = new Name('Sam');
});

describe('#name', function() {
  it('Returns the name', function() {
    expect(sam.name).toEqual('Sam');
  });
});
