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

### forceUpdateOn

A short-cut for forcing a component to re-render when a reference cursor has changed.
See https://github.com/omniscientjs/immstruct#references for more information on Immstruct's reference cursors.

```js
var forceUpdateOn = require('omniscient-mixins/mixins/forceUpdateOn');
// ...
// Assume there's an Immstruct object called 'foo', looking like {bar: 'baz'} defined somewhere in here.
// ...
var barRef = foo.reference('bar');
var refreshOnBarMixin = forceUpdateOn(barRef);

var Component = component([otherMixins, refreshOnBarMixin], function () {
  return <h1>I'll re-render when barRef gets updated!</h1>
});
```
