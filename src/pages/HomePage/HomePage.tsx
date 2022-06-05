import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomePageStyled>
        <div className="home__image--container">
          <img
            className="home__image--first"
            src="https://firebasestorage.googleapis.com/v0/b/desterra.appspot.com/o/summer_painting-part-2.jpeg?alt=media&token=2fb15389-972b-4503-a2aa-45d5dbfce1a6"
            alt="painting of a boy's head out of the water in the summer"
          />
        </div>
      </HomePageStyled>
      <Footer />
    </>
  );
};

export default HomePage;
