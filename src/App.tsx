import Header from "components/Header";
import Home from "pages/Home";
import NoMatch from "pages/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
