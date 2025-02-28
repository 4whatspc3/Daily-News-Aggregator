const Category = ({ title, icon }) => {
  return (
    <div className="category">
      <div className="category-icon">{icon}</div>
      <div className="category-title">
        <button>{title}</button>
      </div>
    </div>
  );
};

export default Category;
