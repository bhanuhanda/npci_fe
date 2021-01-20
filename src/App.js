import React, { useState } from 'react';
import MainPage from './components/MainPage';
import Login from './components/Login';
import TransactionPage from './components/TransactionPage';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import UserContext from './Contexts/UserContext';

function App() {
const [contextUserData, setContextUserData] = useState({
  token: undefined,
  user: undefined
});

  return (
    <React.StrictMode>
      <BrowserRouter>
        <UserContext.Provider value={{contextUserData, setContextUserData}}>
          <Switch>
            <Route path="/register"><Register /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/transaction"><TransactionPage /></Route>
            <Route exact path="/"><MainPage /></Route>
            <Route><h1>404 page not found</h1></Route>
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
