const Icons = ({ expr }) => {
  switch (expr) {
    case "cinema":
      return <img src="public/iconsCategories/cinema.svg" alt="cinema icon" />;

    case "business":
      return (
        <img src="public/iconsCategories/business.svg" alt="business icon" />
      );

    case "polis":
      return <img src="public/iconsCategories/polis.svg" alt="polis icon" />;

    case "science":
      return (
        <img src="public/iconsCategories/science.svg" alt="science icon" />
      );

    case "sport":
      return <img src="public/iconsCategories/sport.svg" alt="sport icon" />;
    default:
      console.log("Sorry, we are out of expressions");
  }
};

export default Icons;
