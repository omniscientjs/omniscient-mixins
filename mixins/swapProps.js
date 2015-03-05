module.exports = {
  swapProps: function (obj) {
    return this.props.cursor.update(function (state) {
      return state.mergeDeep(obj);
    });
  }
};
