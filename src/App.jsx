import "./App.css";
import Category from "./components/categories/Category";

function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <Category title="Politics" />
      <Category title="Sport" />
      <Category title="Cinema and TV" />
      <Category title="Music" />
      <Category title="Science" />
    </>
  );
}

export default App;
