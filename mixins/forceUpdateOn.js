module.exports = function forceUpdateOn (referenceCursor) {
  var cancel;
  return {
    componentDidMount: function () {
      cancel = referenceCursor.onChange(this.forceUpdate.bind(this));
    },
    componentWillUnmount: function () {
      cancel();
    }
  };
};
