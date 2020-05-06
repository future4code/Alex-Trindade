import React from 'react';
import './App.css';
import { Dragons } from './components/Dragons.js'
import { Missions } from './components/Missions.js'
import { Videos } from './components/Videos.js'

class App extends React.Component {
  state = {
    selectPageValue: 'dragons'
  }

  onChangeSelect = (event) => {
    this.setState({ selectPageValue: event.target.value })
  }

  render() {
    let page

    switch (this.state.selectPageValue) {
      case 'dragons':
        page = <Dragons />
        break;
      case 'missions':
        page = <Missions />
        break;
      case 'videos':
        page = <Videos />
        break;
      default:
        page = null
        break;
    }

    return (
      <div className="App">
        <div>
          <h1>SpaceLab</h1>
        </div>
        <div>
          <label>Selecione a página que deseja visitar: </label>
          <select value={this.state.selectPageValue} onChange={this.onChangeSelect}>
            <option value="dragons">Dragons</option>
            <option value="missions">Missions</option>
            <option value="videos">Videos</option>
          </select>
        </div>
        {page}
      </div>
    );
  }
}

export default App