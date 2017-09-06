import React    from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';

// Components
import Header from './components/header.js';
import Artwork from './components/artwork.js';
import Graphs from './components/graphs.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row text-center top-header">
          <Header header="SFMOMA DASHBOARD" />
        </div>
        <div className="text-center">
          <Graphs />
        </div>
        <div className="ribbon-div">
          <Header headerClass="ribbon-header" header="SFMOMA ARTWORK" />
          <Artwork />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
