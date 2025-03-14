const Category = ({ title, icon, changeResource, changeValue }) => {
  return (
    <div className="category">
      <div className="category-icon">{icon}</div>
      <div className="category-title">
        <button
          onClick={() => {
            changeResource();
            changeValue();
          }}
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default Category;
