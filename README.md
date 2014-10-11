Collection of Omniscient and Immstruct mixins
======================


## swapProps

A short-cut for deep merging on the current cursor for Omniscient.

```js
var swapProps = require('omniscient-mixins/mixins/swapProps');

var otherMixins = {
  // Some evented callback or similar
  handleSubmit: function () {
    this.swapProps({
      property: 'value'
    });
  }
};

var Component = component([otherMixins, swapProps], function () {
  return React.DOM.h1({}, 'Hello World!');
});
```
