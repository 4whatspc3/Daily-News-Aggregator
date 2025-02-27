import "./App.css";
import Category from "./components/categories/Category";
import Title from "./components/title/Title";

function App() {
  return (
    <>
      <Title />
      <Category title="Politics" />
      <Category title="Sport" />
      <Category title="Cinema and TV" />
      <Category title="Music" />
      <Category title="Science" />
    </>
  );
}

export default App;
