module.exports = function forceUpdateOn (reference) {
  var cancel;
  return {
    componentDidMount: function () {
      var self = this;
      cancel = reference.observe(function () {
        self.forceUpdate();
      });
    },
    componentWillUnmount: function () {
      cancel();
    }
  };
};
