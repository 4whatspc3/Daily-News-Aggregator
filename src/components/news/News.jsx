const News = ({ direction, thumbnail, content }) => {
  return (
    <div
      className={
        direction === "horizontal" ? "news horizonal" : "news vertical"
      }
    >
      <div className="news-thumbnail">{thumbnail}</div>
      <div className="new-content">{content}</div>
    </div>
  );
};

export default News;
