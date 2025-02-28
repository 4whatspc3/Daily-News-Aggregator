const Category = ({ title, icon }) => {
  return (
    <div className="category">
      <div className="category-icon">{icon}</div>
      <div className="category-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Category;
