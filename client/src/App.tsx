import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddMeal from './pages/AddMeal';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/AddMeal" component={AddMeal} />
        <Route path="/Main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
