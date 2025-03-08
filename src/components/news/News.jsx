const News = ({ direction, thumbnail, content, link }) => {
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
        <a href={`${link}`}>
          <p>{content}</p>
        </a>
      </div>
    </div>
  );
};

export default News;
