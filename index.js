var mixins = module.exports = function () {};

mixins.focusingInput = require('./mixins/focusingInput');
mixins.forceUpdateOn = require('./mixins/forceUpdateOn');
mixins.swapProps = require('./mixins/swapProps');

mixins.after = function (afterFn) {
  return function (fn) {
    return function () {
      fn.apply(this, arguments);
      afterFn.apply(this, arguments);
    };
  };
};

mixins.before = function (beforeFn) {
  return function (fn) {
    return function () {
      beforeFn.apply(this, arguments);
      fn.apply(this, arguments);
    };
  };
};

mixins.inOrder = joiner(mixins.before);

mixins.inReverseOrder = joiner(mixins.after);

function joiner (combiner) {
  return function (mixins) {
    return mixins.reduce(function (joinedMixins, mixin) {
      Object.keys(mixin).forEach(function (key) {
        var prevFn = (joinedMixins[key] || function () {});
        joinedMixins[key] = combiner(prevFn)(mixin[key]);
      });
      return joinedMixins;
    }, {});
  };
}
