const Icons = ({ expr }) => {
  switch (expr) {
    case "cinema":
      return <img src="/iconsCategories/cinema.svg" alt="cinema icon" />;

    case "business":
      return <img src="/iconsCategories/business.svg" alt="business icon" />;

    case "polis":
      return <img src="/iconsCategories/polis.svg" alt="polis icon" />;

    case "science":
      return <img src="/iconsCategories/science.svg" alt="science icon" />;

    case "sport":
      return <img src="/iconsCategories/sport.svg" alt="sport icon" />;
    default:
      console.log("Sorry, we are out of expressions");
  }
};

export default Icons;
