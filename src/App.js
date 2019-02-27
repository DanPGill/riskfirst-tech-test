import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Calendar from './containers/calendar'
import store from './redux/reducers/store'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Calendar />
        </Provider>
      </div>
    )
  }
}

export default App
