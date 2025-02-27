const Category = ({ title }) => {
  return (
    <div className="category">
      <div className="category-icon">
        <img></img>
      </div>
      <div className="category-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Category;
