import LoaderComponent from "../loader/LoaderComponent";
import News from "./News";

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

export default DisplayNews;
