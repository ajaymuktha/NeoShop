import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
