import Navigation from "components/Navigation";
import { Campaign, Comment, Coupon, Home, Member, Monster, NoMatch, Pinpoint } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Comment" component={Comment} />
          <Route path="/Campaign" component={Campaign} />
          <Route path="/Pinpoint" component={Pinpoint} />
          <Route path="/Coupon" component={Coupon} />
          <Route path="/Member" component={Member} />
          <Route path="/Monster" component={Monster} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`

export default App;
