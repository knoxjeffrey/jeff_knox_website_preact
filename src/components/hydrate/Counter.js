const { html } = require('htm/preact')
const { useState } = require('preact/hooks')
const { h } = require ('preact')

const withHydration = require('./with-hydration')

const Counter = ({ id }) => {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    setCount(count + 1)
  };

  return html`
    <div>
      <p>You clicked ${count} times</p>
      <div>Another string</div>
      <button onClick=${handleClick}>
        Click me
      </button>
    </div>
  `
}

// Wrap the component `withHydration`.
module.exports = withHydration(Counter)
