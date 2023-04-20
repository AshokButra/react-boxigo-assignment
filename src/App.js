import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import MyMoves from './components/MyMoves'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/my-moves" component={MyMoves} />
    </Switch>
  </BrowserRouter>
)

export default App
