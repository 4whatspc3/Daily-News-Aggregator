const News = ({ direction, thumbnail, title, description, link }) => {
  return (
    <div
      className={
        direction === "horizontal" ? "news horizonal" : "news vertical"
      }
    >
      <div className="news-thumbnail">
        <a href={`${link}`}>
          <img src={`${thumbnail}`} width="100" height="100" alt="News image" />
        </a>
      </div>
      <div className="new-content">
        <div className="news-title">
          <a href={`${link}`}>
            <p>{title}</p>
          </a>
        </div>
        <div className="news-description">
          <a href={`${link}`}>
            <p>{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
