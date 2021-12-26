import React from 'react'
import { Route, Switch, RouteComponentProps  } from 'react-router-dom' 
import { RootComponent } from './pages/index'
import 'antd/dist/antd.css'
//import './anotherCSS.less'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      
      <Route path='/' render={() => <RootComponent/>}/>
    </div>
  )
}

export default App