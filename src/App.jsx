import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Category from "./components/categories/Category";
import Icons from "./components/categories/icons/Icons";
import Logo from "./components/logo/Logo";
import News from "./components/news/News";
import Title from "./components/title/Title";
import LoaderComponent from "./components/loader/LoaderComponent";

const DisplayNews = ({ value, firstArr, secondArr }) => {
  if (value === false) {
    return (
      <div className="loader">
        <LoaderComponent />
      </div>
    );
  }

  if (value === true) {
    return (
      <>
        <div className="container-first-news">
          {Array.isArray(firstArr) &&
            firstArr.map((item) => (
              <News
                key={item["uuid"]}
                thumbnail={item["image_url"]}
                title={item["title"]}
                description={item["description"]}
                link={item["url"]}
              />
            ))}
        </div>
        <div className="container-second-news">
          {Array.isArray(secondArr) &&
            secondArr.map((item) => (
              <News
                key={item["uuid"]}
                thumbnail={item["image_url"]}
                title={item["title"]}
                description={item["description"]}
                link={item["url"]}
              />
            ))}
        </div>
      </>
    );
  }
};

function App() {
  const [resourceType, setResourceType] = useState("politics");
  const [firstArr, setFirstArr] = useState([]);
  const [secondArr, setSecondArr] = useState([]);
  const [value, setValue] = useState(false);

  function changeResource(type) {
    return setResourceType(type);
  }

  function changeValue() {
    return setValue((prev) => !prev);
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function fetchFirstData() {
      try {
        const response = await fetch(
          `https://api.thenewsapi.com/v1/news/top?locale=us&language=en&categories=${resourceType}&api_token=FAZEdTRjUMs66l39jd9FoodWHiK0wjYgPfQymiyE`,
          { method: "GET", mode: "cors", signal: signal }
        );
        const json = await response.json();

        console.log(json.data);

        setFirstArr(json.data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Something went wrong:", error);
        }
      }
    }

    async function fetchSecondData() {
      try {
        const response = await fetch(
          `https://api.thenewsapi.com/v1/news/top?locale=ca&language=en&categories=${resourceType}&api_token=KTdcT81JKWv3g5HwDjBxeC9XGgcWWnYlGJXnS3X2`,
          { method: "GET", mode: "cors", signal: signal }
        );
        const json = await response.json();

        console.log(json.data);

        setSecondArr(json.data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Something went wrong:", error);
        }
      }
    }

    fetchFirstData();

    fetchSecondData();

    return () => {
      abortController.abort();
    };
  }, [resourceType]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(true);
    }, 3000);

    console.log(value);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <>
      <header>
        <Logo />
        <div className="category-name">
          <p>{resourceType}</p>
        </div>
      </header>
      <nav>
        <Title />
        <Category
          title="Politics"
          icon={<Icons expr={"polis"} />}
          changeResource={() => changeResource("politics")}
          changeValue={changeValue}
        />
        <Category
          title="Sport"
          icon={<Icons expr={"sport"} />}
          changeResource={() => changeResource("sports")}
          changeValue={changeValue}
        />
        <Category
          title="Cinema and TV"
          icon={<Icons expr={"cinema"} />}
          changeResource={() => changeResource("entertainment")}
          changeValue={changeValue}
        />
        <Category
          title="Business"
          icon={<Icons expr={"business"} />}
          changeResource={() => changeResource("business")}
          changeValue={changeValue}
        />
        <Category
          title="Science"
          icon={<Icons expr={"science"} />}
          changeResource={() => changeResource("science")}
          changeValue={changeValue}
        />
      </nav>
      <main>
        <DisplayNews value={value} firstArr={firstArr} secondArr={secondArr} />
      </main>
      <footer>
        <div className="author">
          <p>
            Created by <b>Matheus Augusto</b>. Source and photo credits on my{" "}
            <a
              href="https://github.com/4whatspc3"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
