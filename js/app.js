const React = require('react');

const App = React.createClass({
  render() {
    return (
      <div className="app">
        yo sup
      </div>
    );
  }
});

React.render(<App />, document.getElementById('root'));