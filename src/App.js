import "./App.css";
import NavBar from "./components/NavBar";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { useEffect } from "react";
import { retrieveData } from "./fetchJobs";
import JobsDisplay from "./components/JobsDisplay";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";

const Main = () => {
  const toggleSwitch = useSelector((store) => store.themereducer.switch);
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieve = async () => {
      let data = await retrieveData();
      console.log(data);
      dispatch({ type: "fetchJobs", payload: data });
    };
    retrieve();
  }, []);

  return (
    <div
      style={{
        backgroundColor: toggleSwitch ? "#131822" : "#eee",

        display: "flex",
        flexDirection: "column",
      }}
      className="App"
    >
      <div>
        <NavBar />
      </div>
      <div>
        <Switch>
          <Route exact path="/details/:id" component={Detail} />
          <Route exact path="/" component={JobsDisplay} />
        </Switch>
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
