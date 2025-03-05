const Category = ({ title, icon, changeResource }) => {
  return (
    <div className="category">
      <div className="category-icon">{icon}</div>
      <div className="category-title">
        <button onClick={() => changeResource(title)}>{title}</button>
      </div>
    </div>
  );
};

export default Category;
