import React from 'react';
import ReactDOM from 'react-dom';
import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  html {
    background-color: #ffdddd;
  }
`;

const Hi = styled.div`
  font-size: 64px;
  font-weight: 800;
  color: white;
`;

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Hi>
          yo sup
        </Hi>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));