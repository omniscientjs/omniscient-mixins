Collection of Omniscient and Immstruct mixins
======================

### focusingInput

A `componentDidMount` hook that selects the text contained in an input.


### swapProps

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
  return React.DOM.form({ onSubmit: this.handleSubmit }, 
                        React.DOM.input({}, 'Hello World!'));
});
```
