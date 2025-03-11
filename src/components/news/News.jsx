const News = ({ direction, thumbnail, title, description, link }) => {
  if (!thumbnail?.trim()) {
    thumbnail = new URL(
      "src/assets/fallback/elementor-placeholder-image.png",
      import.meta.url
    ).href;
  }

  return (
    <div className="news">
      <div className="news-thumbnail">
        <a href={`${link}`}>
          <img src={`${thumbnail}`} alt="News image" />
        </a>
      </div>
      <div className="news-content">
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
