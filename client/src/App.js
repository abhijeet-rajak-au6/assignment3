import './App.css';
import "./index.css";
import Login from './Users/Login';
import NavBar from './Navbar/Navbar';
import DashBoard from './Dashboard/DashBoard';
import State from './State/State';
import District from './District/District';
import Child from './Child/Child';
import AddChild from './Child/AddChild';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/dashboard" component={DashBoard}/>
            <Route exact path="/addstate" component={State}/>
            <Route exact path="/district" component={District}/>
            <Route exact path="/child" component={Child}/>
            <Route exact path="/addChild" component={AddChild}/>
            <Redirect to="/login"/>

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
