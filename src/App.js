import "./assets/css/dist/tailwind.css";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import RegisterUser from "./pages/users/RegisterUser";
import LoginUser from "./pages/users/LoginUser";
import CreatePost from "./pages/posts/CreatePost";
import EditPost from "./pages/posts/EditPost";
import ListPost from "./pages/posts/ListPost";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/RegisterUser"} component={RegisterUser} />
        <Route exact path={"/LoginUser"} component={LoginUser} />
        <Route
          exact
          path={"/"}
          render={() => <Redirect to="/RegisterUser" />}
        />
        <Route exact path={"/CreatePost"} component={CreatePost} />
        <Route exact path={"/EditPost/:post_id"} component={EditPost} />
        <Route exact path={"/ListPost"} component={ListPost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
