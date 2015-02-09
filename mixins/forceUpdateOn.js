module.exports = function forceUpdateOn (reference) {
  var cancel;
  return {
    componentDidMount: function () {
      cancel = reference.observe(this.forceUpdate.bind(this));
    },
    componentWillUnmount: function () {
      cancel();
    }
  };
};
