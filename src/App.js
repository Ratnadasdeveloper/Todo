import React from "react";
import "./styles.css";
import { List } from "./components/List/List";

export default function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const isError = false;
  const isLoading = false;
  const handleLogin = () => {
    setIsAuth(true);
  };
  return !isAuth ? (
    <div>
      user is not logged in,please
      <button onClick={handleLogin}>Login</button>
    </div>
  ) : isLoading ? (
    <div>...Loading</div>
  ) : isError ? (
    <div> something is wrong</div>
  ) : (
    <div className="App">
      <List />
    </div>
  );
}
