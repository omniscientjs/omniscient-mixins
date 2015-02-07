var chai = require('chai');
chai.should();

var mixins = require('../');

describe('mixins', function () {

  it('runs one fn before another', function (done) {
    var changed;
    var fn = function () {
      changed.should.equal(true);
      done();
    };
    var before = mixins.before(function () {
      changed = true;
    });
    before(fn)();
  });

  it('runs one fn after another', function (done) {
    var changed;
    var fn = function () { changed = true };
    var afterFn = mixins.after(function () {
      changed.should.equal(true);
      done();
    });
    afterFn(fn)();
  });

  it('joins mixin member functions in order', function () {
    var firstAsserter = createRunAsserter();
    var secondAsserter = createRunAsserter();

    var joined = mixins.inOrder([
      { first: firstAsserter(1), second: secondAsserter(1) },
      { first: firstAsserter(2) },
      { first: firstAsserter(3), second: secondAsserter(2) }
    ]);

    joined.first();
    joined.second();
  });

  it('joins mixin member functions in reverseOrder', function () {
    var firstAsserter = createRunAsserter();
    var secondAsserter = createRunAsserter();

    var joined = mixins.inReverseOrder([
      { first: firstAsserter(3), second: secondAsserter(2) },
      { first: firstAsserter(2) },
      { first: firstAsserter(1), second: secondAsserter(1) }
    ]);

    joined.first();
    joined.second();
  });

});

function createRunAsserter () {
  var runs = 0;
  return function (n) {
    return function () {
      runs++;
      runs.should.equal(n);
    };
  }
};

