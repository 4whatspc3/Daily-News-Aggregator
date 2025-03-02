import "./App.css";
import Category from "./components/categories/Category";
import Icons from "./components/categories/icons/Icons";
import Logo from "./components/logo/Logo";
import News from "./components/news/News";
import Title from "./components/title/Title";

function App() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <nav>
        <Title />
        <Category title="Politics" icon={<Icons expr={"polis"} />} />
        <Category title="Sport" icon={<Icons expr={"sport"} />} />
        <Category title="Cinema and TV" icon={<Icons expr={"cinema"} />} />
        <Category title="Music" icon={<Icons expr={"music"} />} />
        <Category title="Science" icon={<Icons expr={"science"} />} />
      </nav>
      <main>
        <News
          direction={"horizontal"}
          thumbnail={"ola mundo"}
          content={"abacadabra"}
        />
      </main>
    </>
  );
}

export default App;
