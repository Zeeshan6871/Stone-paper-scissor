import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./Main";

function makeid() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const Test = () => {
  const id = makeid();
  return <Redirect to={`/${id}`} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Test} />
        <Route exact path="/:id" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
