import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Category from "./components/categories/Category";
import Icons from "./components/categories/icons/Icons";
import Logo from "./components/logo/Logo";
import News from "./components/news/News";
import Title from "./components/title/Title";

function App() {
  const [resourceType, setResourceType] = useState("politics");
  const [arr, setArr] = useState([]);

  function changeResource(value) {
    return setResourceType(value);
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.thenewsapi.com/v1/news/top?locale=us&language=en&categories=${resourceType}&api_token=FAZEdTRjUMs66l39jd9FoodWHiK0wjYgPfQymiyE`,
          { method: "GET", mode: "cors", signal: signal }
        );
        const json = await response.json();

        console.log(json);

        setArr(json.data);
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
          changeResource={() => changeResource("politics")}
        />
        <Category
          title="Sport"
          icon={<Icons expr={"sport"} />}
          changeResource={() => changeResource("sports")}
        />
        <Category
          title="Cinema and TV"
          icon={<Icons expr={"cinema"} />}
          changeResource={() => changeResource("entertainment")}
        />
        <Category
          title="Business"
          icon={<Icons expr={"music"} />}
          changeResource={() => changeResource("business")}
        />
        <Category
          title="Science"
          icon={<Icons expr={"science"} />}
          changeResource={() => changeResource("science")}
        />
      </nav>
      <main>
        {Array.isArray(arr) &&
          arr.map((item, index) => (
            <News
              key={item["uuid"]}
              direction="horizontal"
              thumbnail={item["image_url"]}
              content={item["title"]}
              link={item["url"]}
            />
          ))}
      </main>
    </>
  );
}

export default App;
