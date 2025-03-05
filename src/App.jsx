import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Category from "./components/categories/Category";
import Icons from "./components/categories/icons/Icons";
import Logo from "./components/logo/Logo";
import News from "./components/news/News";
import Title from "./components/title/Title";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  function changeResource(title) {
    return setResourceType(title);
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchData() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${resourceType}`,
          { signal }
        );
        const json = await response.json();

        setItems(json);

        console.log(json);

        console.log(resourceType);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Something went wrong:", error);
        }
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [resourceType]);

  return (
    <>
      <header>
        <Logo />
      </header>
      <nav>
        <Title />
        <Category
          title="Politics"
          icon={<Icons expr={"polis"} />}
          changeResource={changeResource}
        />
        <Category
          title="Sport"
          icon={<Icons expr={"sport"} />}
          changeResource={changeResource}
        />
        <Category
          title="Cinema and TV"
          icon={<Icons expr={"cinema"} />}
          changeResource={changeResource}
        />
        <Category
          title="Music"
          icon={<Icons expr={"music"} />}
          changeResource={changeResource}
        />
        <Category
          title="Science"
          icon={<Icons expr={"science"} />}
          changeResource={changeResource}
        />
      </nav>
      <main>
        {items.slice(0, 2).map((item) => (
          <News
            key={item.id}
            direction="horizontal"
            thumbnail="ola mundo"
            content={item.body}
          />
        ))}
        {items.slice(2, 6).map((item) => (
          <News
            key={item.id}
            direction="vertical"
            thumbnail="ola mundo"
            content={item.body}
          />
        ))}
        {items.slice(6, 8).map((item) => (
          <News
            key={item.id}
            direction="horizontal"
            thumbnail="ola mundo"
            content={item.body}
          />
        ))}
      </main>
    </>
  );
}

export default App;
